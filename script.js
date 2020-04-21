const vm = require('vm');
const fs = require('fs');
const path = require('path');
module.exports = (fileName, queryCallback, resultCallback) => {
  const filePath = path.resolve(__dirname, fileName);
  const context = {
    testQuery: queryCallback,
    testResult: resultCallback,
  };
  const code = fs.readFileSync(filePath, 'utf8');
  vm.createContext(context);
  vm.runInContext(code, context);
};
