//index.js
//获取应用实例
const app = getApp()
const rubishData = require('../../rubish_data.js')

Page({
  data: {
    cateItems: [],
    curNav: 1,
    curIndex: 0,
    background: "background:#663300"
  },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index,
      background: "background:"+this.data.cateItems[index].color
    })
  },
  onLoad: function () {
    this.bindData();
  },
  bindData: function () {
    let cateItems = [{
      cate_id: 1,
      cate_name: "湿垃圾",
      ishaveChild: true,
      color: '#663300',
      children: [{}],
      imgUrl : "../../img/shilaji.png"
    },
    {
      cate_id: 2,
      cate_name: "干垃圾",
      ishaveChild: true,
      color: '#000000',
      children: [{}],
      imgUrl: "../../img/ganlaji.png"
    },
    {
      cate_id: 3,
      cate_name: "可回收物",
      ishaveChild: true,
      color: '#000066',
      children: [{}],
      imgUrl: "../../img/kehuishouwulaji.png"
    },
    {
      cate_id: 4,
      cate_name: "有害垃圾",
      color: '#ff0000',
      ishaveChild: true,
      children: [{}],
      imgUrl: "../../img/youhailaji.png"
    }];
    for(let i=0;i<cateItems.length;i++){
      cateItems[i].children = rubishData.result.data[i+1];
    }
    this.setData({
      cateItems: cateItems
    });
  }
})
