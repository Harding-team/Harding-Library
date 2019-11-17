Page({
  data: {
    arr:['/images/qiimg/10.png','/images/qiimg/3.png','/images/qiimg/4.png','/images/qiimg/5.png','/images/qiimg/6.png','/images/qiimg/7.png','/images/qiimg/8.png','/images/qiimg/9.png']
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.name,
    })
  }
})