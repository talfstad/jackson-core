exports.handler = (event, context, callback) => {
  console.log(event);
  console.log(context);
  callback(null, { hi: event });  // Echo back the first key value
};
