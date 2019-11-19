// pages/dynamic/dynamic.js
Page({
  data: {

  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:options.name,
    })
  }
})