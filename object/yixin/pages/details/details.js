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
    var a=wx.getStorageSync('cart')
    this.setData({
      careils:a
    })


    
  },
  tanch:function(){
    let arrList = JSON.parse(wx.getStorageSync('cartData')) || [];
    // console.log(arrList,this.data.careils)

    arrList.push(this.data.careils)
    wx.setStorageSync('cartData', JSON.stringify(arrList))
    
    wx.switchTab({
      url: '../cart/cart',
    })
  }
})

