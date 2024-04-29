let val = 'ex data'
export default '导出一个'
export { val as value }

/**
 * 在 node.js 中使用 ESM 的方式：
 * 1. 修改文件后缀名 .
 * 2. package.json 中添加 "type": "module" 配置
 * 
 * 通过 as 设置导出别名 export { val as value }， 导入使用 value
 */

/**
 * commonjs
 * module.exports = {}
 * module.exports.foo = foo
 */