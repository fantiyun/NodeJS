const download = require('download-git-repo')
const {frameworkPath} = require('../config')

download(frameworkPath['express'], './xxx', {clone: true}, err => {

})

