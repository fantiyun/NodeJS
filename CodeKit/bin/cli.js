#! /usr/bin/env node
const { program } = require('commander')
program.option('-f  --framwork <framwork>', 'setting framwork')
program.command('create <project> [other...]')
.alias('crt')
.description('create project name')
.action((project, args) => {
  // 命令行的逻辑执行代码
  console.log('project', project, 'args', args)
})
program.parse(process.argv)
