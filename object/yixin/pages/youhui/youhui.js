let app = getApp();
Page({
  data: {
    titleBtn:[{
      name: '未使用',
      count: 2
    },{
      name: '使用记录',
      count: 0
    },{
      name: '已过期',
      count: 0
    }],
    currentIndex: 0
  },
  onLoad(options) {
    app.loading()
    let offerObj = wx.getStorageSync('offerObj')
    this.setData({
      offerObj  
    })
  },
  onChangeBtn(ev){
    let index = ev.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })
    app.loading()
  },
  goToYouHuiDetail(){
    wx.navigateTo({
      url: '/pages/offerDetail/offerDetail'
    })
  }
})