const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//数组去重复
function uniqueArray(alist,key){
  let hash = {};
  alist = alist.reduce(function (item, next) {
    hash[next[key]] ? '' : hash[next[key]] = true && item.push(next);
    return item
  }, [])
  return alist;
}

//数组内查找
function searchList(str, container) {
  let newList = [];
  //新的列表
  let startChar = str.charAt(0);
  //开始字符
  let strLen = str.length;
  //查找符串的长度
  for (let i = 0; i < container.length; i++) {
    let obj = container[i];
    let isMatch = false;
    for (let p in obj) {
      if (typeof (obj[p]) == "function") {
        obj[p]();
      } else {
        let curItem = "";
        if (obj[p] != null) {
          curItem = obj[p];
        }
        for (let j = 0; j < curItem.length; j++) {
          if (curItem.charAt(j) == startChar) {
            if (curItem.substring(j).substring(0, strLen) == str) {
              isMatch = true;
              break;
            }
          }
        }
      }
    }
    if (isMatch) {
      newList.push(obj);
    }
  }
  return newList;
}

module.exports = {
  formatTime: formatTime,
  uniqueArray: uniqueArray,
  searchList: searchList
}
