'use strict'

/** 
 * @param {Number|String}
 * @return {String}  transform the time stamp to '2018.03.01 18:00:00' 
 */
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

/**
 * get the last day of current month
 * @param {}
 * @returns {Number} 
 */
const getLastDay = () => {
  let date = new Date()
  let y = date.getFullYear() + 1
  let m = date.getMonth()

  return new Date(y, m, 0).getDate()
}

/**
 * @param {Number} 9
 * @return {String} '09' padding with 0 if the nummber's length is less 1
 */
const paddingNum = (n) => {
  n = n + ''
  return n[1] ? n : '0' + n
}
 
/** 
 * @param {Object} 
 * @return {String} transform json to querystring when the url without '?'
 */
const json2url = json => {
  return '?' + Object.keys(json).map(key => `${key}=${json[key]}`).join('&')
}

/** 
 * @param {String} '?key1=val1?key2=val2...' 
 * @return {Object} transform querystring to json when the url with '?'
 */
const url2json = qs => {
  let result = {}
  let temp = qs.substring(1).split('&')
  for (let i =0; i < temp.length; i ++) {
    let res = temp[i].split('=')
    result[res[0]] = res[1]
  }
  return result
}

/** 
 * @param {Number} 
 * @return {Boolean}  true if the phone is start with 13 14 15 16 17 18 and the length is 11
 */
const checkCellphone = num => {
  return /^1[345678]\d{9}$/.test(num) ? true : false
}

/**
 * @param {Object}
 * @return {Boolean} true if the Object is an Array, otherwise false
 */
const isArray = (val) => {
  Object.prototype.toString.call(val) === '[object Array]'
}


module.exports = {
  formatTime,
  paddingNum,
  json2url,
  checkCellphone,
  isArray
}