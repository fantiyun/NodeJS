const inquirer = require('inquirer')



const kitAction = (project, args) => {
  // 命令行的逻辑执行代码
  console.log('project', project, 'args', args)
  // 下载 node 框架
  inquirer.createPromptModule([
    {
      type: radio
    }
  ])
}

module.exports = kitAction