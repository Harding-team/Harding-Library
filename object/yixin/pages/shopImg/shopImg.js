Page({
  data: {
    arr:[]
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.name,
    })
    let _that = this;
    wx.request({
      url: 'http://localhost:8083/dimg',
      success:(res)=>{
        this.setData({
          arr: res.data.listArr
        })
      }
    })
  }
})