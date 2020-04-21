const vm = require('./script.js');
const callback = (data) => {
  console.log('callback data:', data);
};
vm('test.js',
  (callback) => {
    setTimeout(function () {
      callback(100500);
    }, 2000);
  },
  (result) => {
    callback(result);
});
