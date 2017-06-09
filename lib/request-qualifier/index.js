class RequestQualifier {
  constructor() {
    this.validIP = (ip) => {
      if (ip) {
        return true;
      }
      return false;
    };

    this.validURL = (url) => {
      if (url) {
        return true;
      }
      return false;
    };

    this.validUUID = (uuid) => {
      if (uuid) {
        return true;
      }
      return false;
    };
  }

  validate({ ip, url, uuid }) {
    return new Promise((resolve) => {
      if (!this.validIP(ip) ||
          !this.validURL(url) ||
          !this.validUUID(uuid)) {
        throw new Error('Inputs are invalid');
      }

      resolve();
    });
  }
}

export default RequestQualifier;
