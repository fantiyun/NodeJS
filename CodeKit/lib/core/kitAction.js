const inquirer = require('inquirer')
const config = require('../../config')
const downloadFn = require('./download')

const kitAction = async (project, args) => {
// 命令行的逻辑执行代码

  // 获取选择的框架名称
  const { framework } = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      choices: config.framework,
      message: 'Please select the framework you want to use'
    }
  ])
  // 下载 node 框架
  downloadFn(config.frameworkURL[framework], project)



}

module.exports = kitAction
