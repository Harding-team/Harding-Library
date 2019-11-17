Page({
  data: {
    flag:'0'
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:options.name,
    })
    let flag = wx.getStorageSync('offer')
    this.setData({
      flag
    })
  },
  goToOfferDetail(){
    wx.navigateTo({
      url: '/pages/offerDetail/offerDetail',
    })
  },
  tap(){
    wx.setStorageSync('offer','1')
    this.setData({
      flag:'1'
    })
    wx.showToast({
      title: '领取成功!!',
      icon: 'success',
      duration: 1000
    })
  }
})