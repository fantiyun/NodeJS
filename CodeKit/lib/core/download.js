const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const downloadFn = (frameworkURL, project) => {
	const spinner = ora('loading……').start()

	setTimeout(() => {
		spinner.color = 'yellow';
		spinner.text = `building ${project}`;
	}, 1000);

	download(frameworkURL, project, {clone: true}, err => {
		if (err) spinner.fail('complete fail')
		spinner.succeed(chalk.green.bold('completed!'))
		console.log(chalk.red('you run:'))
		console.log(chalk.blue(`cd ${project}`))
		console.log(chalk.blue('npm install'))
		console.log(chalk.blue('npm run dev'))

	})
}

module.exports = downloadFn
