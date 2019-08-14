// get subRoutes
function requireSubRoutes (r) {
  const routes = []
  r.keys().forEach((key) => {
    Object.keys(r(key)).forEach((name) => {
      routes.push(...r(key)[name])
    })
  })
  return routes
}

/* require.context()这个方法，我们就可以通过正则匹配引入相应的文件模块
    require.context()有三个参数：
    directory：说明需要检索的目录
    useSubdirectories：是否检索子目录
    regExp: 匹配文件的正则表达式 */

// 深度搜索routes下的js文件   返回一个require 函数
const autoInjectRoutes = requireSubRoutes(require.context('./routes/', true, /\.js$/))
export default [
  ...autoInjectRoutes
]
