let data = new Promise(function (resolve, reject) {
  testQuery((data) => {
    if (data) {
      resolve(data);
    }
    else {
      reject(new Error('empty data'));
    }
  });
});
const result = {
  success: true,
  data: null,
  error: null,
};

data.then((data) => {
  result.data = data;
  testResult(result);
}).catch((err) => {
  result.success = false;
  result.error = err;
  testResult(result);
});




