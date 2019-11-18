//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab:0
  },
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }, 

  onLoad: function () {
    console.log('onLoad')
  },
  tanch:function(){
    wx.switchTab({
      url: '../cart/cart',
    })
  }
})
