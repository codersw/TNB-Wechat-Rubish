
Page({
  data: {
    cateItems:[],
    score:0
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    let question = wx.getStorageSync("question");
    question = JSON.parse(question);
    let answer = wx.getStorageSync("answer");
    answer = JSON.parse(answer);
    let cateItems = [];
    let score = 0;

    for (let i=0;i<question.length;i++){
      let que = {};
      que.name = question[i].n;
      que.cname = c(question[i].c);
      que.aname = c(answer[i]);
      que.color = 'red';
      if (que.cname == que.aname){
        que.color = 'green';
        score += 10;
      }
      cateItems.push(que);
    }
    this.setData({
      cateItems: cateItems
    });
  },
  onUnload: function () {
    wx.navigateBack({
      url: '../../exam/exam'
    })
  }
})

function c(c){
  let cname ='';
  if (c == '1') {
    cname = '湿垃圾';
  } else if (c == '2') {
    cname = '湿垃圾';
  } else if (c == '3') {
    cname = '可回收物';
  } else if (c == '4') {
    cname = '有害垃圾';
  } else {
    cname = '未知';
  }
  return cname;
}