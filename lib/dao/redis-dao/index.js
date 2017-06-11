import redis from 'redis';

class RedisDao {
  constructor(config) {
    this.connected = false;

    this.ensureConnection = () => new Promise((resolve, reject) => {
      if (this.connected) {
        resolve();
      } else {
        this.db = redis.createClient(config);

        this.db.on('ready', () => {
          this.connected = true;
          resolve();
        });

        this.db.on('error', (err) => {
          reject(err);
        });
      }
    });
  }

  getWhitelistedDomains() {
    return new Promise((resolve, reject) => {
      this.ensureConnection()
        .then(() => {
          this.db.get('whitelistedDomains', (err, whitelistedDomains) => {
            if (err) reject(err);
            else resolve(whitelistedDomains);
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  setWhitelistedDomains(whitelistedDomains) {
    return new Promise((resolve, reject) => {
      this.ensureConnection()
        .then(() => {
          this.db.set('whitelistedDomains', whitelistedDomains);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default RedisDao;
