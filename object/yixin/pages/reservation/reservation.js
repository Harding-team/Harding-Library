Page({
  data: {
    list:['综合','最热','新品','价格'],
    curIndex:0
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:options.name,
    })
  },
  tap(e){
    this.setData({
      curIndex:e.currentTarget.dataset.curindex
    })
    if(e.currentTarget.dataset.curindex == 3){
      wx.showLoading({
        title:'加载中...'
      })
      setTimeout(function(){
        wx.hideLoading()
      },500)
    }
  },
})