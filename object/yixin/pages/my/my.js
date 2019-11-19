// pages/my/my.js
let app = getApp();
Page({
  data: {
    orderList: [{
      icon: 'daishouhuo',
      name: '待收货'
    },{
      icon: 'huowu',
      name: '待取货'
    },{
      icon: 'yiwancheng',
      name: '已完成'
    },{
      icon: 'yiguanbigongdanshu',
      name: '已关闭'
    }]
  },
  onLoad: function (options) {

  },
  goToOrder(ev){
    let index = ev.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/order/order?index='+index
    })
  },
  goToYuyue(){
    wx.navigateTo({
      url: '/pages/yuyue/yuyue'
    })
  },
  goToYouHui(){
    wx.navigateTo({
      url: '/pages/youhui/youhui'
    })
  },
  goToKanJia(){
    wx.navigateTo({
      url: '/pages/kanjia/kanjia'
    })
  },
  goToPinTuan(){
    wx.navigateTo({
      url: '/pages/pintuan/pintuan'
    })
  },
  onGiveAuthor(){
    wx.previewImage({
      urls: ['http://a1.qpic.cn/psb?/V12NJO3h1JBiOp/qagclP9BAXzRuNveX1LFF0lBvFncZTnIhc.BeZU2r2I!/m/dFwAAAAAAAAAnull&bo=UAVQBVAFUAUDCSw!&rf=photolist&t=5'],
      success: function(res){
        // console.log(res);
      }
    })
  },
  onAddress(){
    wx.chooseAddress({
      success: (res)=>{
        console.log(res)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})