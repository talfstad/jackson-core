exports.processRequest = (inputs) => {
  const promise = new Promise((resolve, reject) => {
    if (inputs) {
      resolve(inputs);
    } else {
      reject();
    }
  });
  return promise;
};
