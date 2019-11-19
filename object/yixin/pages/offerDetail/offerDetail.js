Page({
  data: {
    flodFlag:false
  },
  onLoad: function (options) {

  },
  onFold(){
    this.setData({
      flodFlag:!this.data.flodFlag
    })
  },
  onShareAppMessage(){
    return{
      title:'分享给微信好友!'
    }
  }
})