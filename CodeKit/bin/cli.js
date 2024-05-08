#! /usr/bin/env node
const { program } = require('commander')
const kitHelp = require('../lib/core/kitHelp')
const kitCommander = require('../lib/core/kitCommander')
// 处理 help
kitHelp(program)
kitCommander(program)

program.parse(process.argv)

