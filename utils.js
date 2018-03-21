// transform the time stamp to '2018.03.01 18:00:00'
const formatTime = (stamp) => {
  const date = new Date(Number(stamp))
  
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()

  let h = date.getHours()
  let M = date.getMinutes()
  let s = date.getSeconds()

  return [y, m, d].map(paddingNum).join('.') + [h, M, s].map(paddingNum).join(':')
}

// padding with 0 if the nummber's length is less 1
const paddingNum = (n) => {
  n = n + ''
  return n[1] ? n : '0' + n
}

// transform json to querystring when the url without '?'
const json2url = json => {
  return '?' + Object.keys(json).map(key => `${key}=${json[key]}`).join(&)
}

// check cellphone number
// the number section 13 14 15 16 17 18
const checkCellphone = num => {
  return /^1[345678]\d{9}$/.test(num) ? true : false
}


module.export = {
  formatTime,
  paddingNum,
  json2url,
  checkCellphone
}