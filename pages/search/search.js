const utils = require('../../utils/util.js');
const rubishData = require('../../rubish_data.js')

Page({
  data: {
    cateItems: [],
    inputShowed: false
  },
  onLoad: function () {
    this.setData({
      inputShowed:true
    })
  },
  search(e){
    let array1 = rubishData.result.data[1];
    let array2 = rubishData.result.data[2];
    let array3 = rubishData.result.data[3];
    let array4 = rubishData.result.data[4];
    let array = array1.concat(array2, array3, array4);
    let key = e.detail.value;
    let list = utils.searchList(key, array);
    if(list.length>0){
      let alist = list.slice(0, 50);
      alist = utils.uniqueArray(alist,'n');
      this.setData({
        cateItems: alist
      });
    }
  }
});

