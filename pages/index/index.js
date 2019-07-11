//index.js
//获取应用实例
const app = getApp();
const rubishData = require('../../rubish_data.js');
const utils = require('../../utils/util.js');

Page({
  data: {
    cateItems: [],
    curNav: 1,
    minscreenHeight: 0,
    scrollTop: -1,
    curIndex: 0,
    showModal: false,
    background: "background:#664035",
    name:""
  },
  onLaunch() {
    this.getHeight(1)
  },
  getHeight(n) {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.data.minscreenHeight = res.windowHeight * n
      }
    })
  },
  onPageScroll(e) { // 获取滚动条当前位置
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  goTop() {
    wx.pageScrollTo({
      scrollTop: -1,
      duration: 300
    })
  },
  //事件处理函数  
  switchRightTab(e) {
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
  onLoad: function (e) {
    if (e.id == 'share'){
      wx.switchTab({
        url: '../exam/exam'
      });
    }
    this.bindData();
  },
  toggleDialog(e) {
    let name = e.currentTarget.dataset['name'];
    console.log(name);
    this.setData({
      showDialog: !this.data.showDialog,
      name: name
    });
  },  
  bindData() {
    let cateItems = [{
      cate_id: 1,
      cate_name: "湿垃圾",
      ishaveChild: true,
      color: '#664035',
      children: [{}],
      imgUrl : "../../img/shilaji.png"
    },
    {
      cate_id: 2,
      cate_name: "干垃圾",
      ishaveChild: true,
      color: '#2C2B27',
      children: [{}],
      imgUrl: "../../img/ganlaji.png"
    },
    {
      cate_id: 3,
      cate_name: "可回收物",
      ishaveChild: true,
      color: '#104883',
      children: [{}],
      imgUrl: "../../img/kehuishouwulaji.png"
    },
    {
      cate_id: 4,
      cate_name: "有害垃圾",
      color: '#E53122',
      ishaveChild: true,
      children: [{}],
      imgUrl: "../../img/youhailaji.png"
    }];
    for(let i=0;i<cateItems.length;i++){
      let data = rubishData.result.data[i + 1];
      data = utils.uniqueArray(data,"n");
      cateItems[i].children = data;
    }
    this.setData({
      cateItems: cateItems
    });
  },
  toSearchPage(){
    wx.navigateTo({
      url: '../search/search',
    });
  }
})
