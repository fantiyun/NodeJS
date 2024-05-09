const http = require('http')
const fs = require('fs')
const url = require('url')
const server = http.createServer()
server.listen(8080, () => {
	console.log('http://127.0.0.1:8080')
})
server.on('request', (req, res) => {

	// 获取请求类型
	if(req.method === 'GET') {
		// console.log(req.url)
		// GET 方法获取参数 http://127.0.0.1:8080/user?id=123
		console.log(url.parse(req.url, true).query.id)
		if(req.url === '/') {
			fs.readFile('./test/index.html', 'utf8', (err, data) => {
				res.write(data)
				res.end()
			})
		} else {
			// 相应图片
			fs.readFile('./test/images/ElectronWorkFlow.png', (err, data) => {
				res.end(data)
			})
		}
	} else if(req.method === 'POST') {

	}
})
