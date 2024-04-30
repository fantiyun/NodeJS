const kitAction = require('./kitAction')

const kitCommander = (program) => {
  program.command('create <project> [other...]')
  .alias('crt')
  .description('create project name')
  .action(kitAction)
}

module.exports = kitCommander