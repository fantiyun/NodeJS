const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input', // 问题类型
    name: 'username',
    message: '你的名字',
  }
]).then(answer => {
  console.log(answer)
})
