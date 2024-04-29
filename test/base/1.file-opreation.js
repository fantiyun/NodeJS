const fs = require('fs')

const filesURL = './test/base/files/'
// 读取文件 (err, data)
// fs.readFile(`${filesURL}example.txt`, 'utf-8', (err, data) => {
//   console.log('err', err)
//   console.log('data', data)
// })

/**
 * 写入文件 (err)
 * 清空并替换源文件
 */
// fs.writeFile(`${filesURL}example.txt`, '写入文件', 'utf-8', (err) => {
//   console.log('err', err)
// })

/**
 * 追加内容
 */
fs.readFile(`${filesURL}example.txt`, 'utf-8', (err, data) => {
  if(!err) {
    let newData = data + '666'
    fs.writeFile(`${filesURL}example.txt`, newData, 'utf-8', (err => {
      if(!err) {
        console.log('写入成功')
      }
    }))
  }
})