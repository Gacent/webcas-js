function getUrlkey(url) {
  var params = {}
  var urls = url.split('?')
  if (urls[1]) {
    var arr = urls[1].split('&')
    for (var i = 0, l = arr.length; i < l; i++) {
      var a = arr[i].split('=')
      params[a[0]] = a[1]
    }
    return params
  }
}

let sessionName,localStorageName
// 获取token
function getToken() {
   return localStorage.getItem(localStorageName)
}
// 设置token
function setToken(token) {
  return localStorage.setItem(localStorageName, token)
}
// 传入session的name，和自己需要设置localStorage的name
function CasRun(session,localStorages){
  sessionName=session
  localStorageName=localStorages
  const url = getUrlkey(window.location.href)
  const cur = window.location.href.split('?')[0] // 获取纯网址，无参数形式，目的在于清除url的明显token
  if (url && url[sessionName]) {
    setToken(url[sessionName])
  }
  window.location.href = cur
}

module.exports = {
  CasRun,
  getToken,
  setToken
}