// 1.导入 http 模块
const http = require('http')
// 2.创建服务器( createServer() 获取到服务器的实例对象)
const server = http.createServer()
// 3.设置服务监听端口
server.listen(8080, () => {
	console.log('http://127.0.0.1:8080')
})
// 4.接收客户端请求
server.on('request', (req, res) => {
	console.log('request')
	// 5.响应请求
	res.write('881118 你好')
	// 6.断开响应
	res.end()
})
