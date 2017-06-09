import RequestQualifier from '../lib/request-qualifier';

class JacksonCore {
  static processRequest(inputs) {
    const promise = new Promise((resolve, reject) => {
      new RequestQualifier().validate(inputs)
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
    return promise;
  }
}

export default JacksonCore;
