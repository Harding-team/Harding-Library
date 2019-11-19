let app = getApp();
Page({
  data: {
    titleBtn: ['待确认','已完成','已关闭'],
    currentIndex: 0
  },
  onLoad(options) {
    app.loading()
  },
  onChangeBtn(ev){
    let index = ev.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })
    app.loading()
  },
  onPullDownRefresh(){
    wx.showNavigationBarLoading()
    wx.startPullDownRefresh({
      success: (res)=>{
        console.log(res)
      }
    });
    setTimeout(() => {
      console.log(111)
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    }, 2000);
  }
})