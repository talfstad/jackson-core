exports.handler = (event, context, callback) => {
  callback(null, { hi: 'from jackson-core' });  // Echo back the first key value
};
