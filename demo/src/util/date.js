/**
 * 获取当前的年月日、时分秒、星期几
 * @returns {{date: string, week: *, time: string}}
 */
function getByDateTimeWeek() {
  let myDate = new Date()
  let wk = myDate.getDay()
  let yy = String(myDate.getFullYear())
  let mm = myDate.getMonth() + 1
  let dd = String(
    myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
  )
  let hou = String(
    myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()
  )
  let min = String(
    myDate.getMinutes() < 10
      ? '0' + myDate.getMinutes()
      : myDate.getMinutes()
  )
  let sec = String(
    myDate.getSeconds() < 10
      ? '0' + myDate.getSeconds()
      : myDate.getSeconds()
  )
  return {
    date: yy + '年' + mm + '月' + dd + '日',
    time: hou + ':' + min + ':' + sec,
    week: weeks[wk],
  }
}

export {
  getByDateTimeWeek
}

const weeks = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六'
]
