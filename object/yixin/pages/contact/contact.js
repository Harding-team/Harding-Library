Page({
  data: {

  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:options.name,
    })
  },
  gotoShopImg(){
    wx.navigateTo({
      url: '/pages/shopImg/shopImg?name=店铺图片'
    })
  }
})