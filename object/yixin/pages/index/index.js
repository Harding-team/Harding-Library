//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    offerFlag:'0',
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    imgArr:['/images/qiimg/1.png','/images/qiimg/2.png','/images/qiimg/3.png','/images/qiimg/4.png','/images/qiimg/5.png'],
    reservationArr:[
      {
        name:'动态',
        imgUrl:'/images/qiimg/1.png',
        pathUrl:'/pages/dynamic/dynamic'
      },{
        name:'预约',
        imgUrl:'/images/qiimg/2.png',
        pathUrl:'/pages/reservation/reservation'
      },{
        name:'优惠券',
        imgUrl:'/images/qiimg/3.png',
        pathUrl:'/pages/offer/offer'
      },{
        name:'联系我们',
        imgUrl:'/images/qiimg/4.png',
        pathUrl:'/pages/contact/contact'
      }
    ]
  },
  onLoad: function () {
  },
  onShow(){
    if(!wx.getStorageSync('offer')){
      wx.setStorageSync('offer','0')
    }
    let flag = wx.getStorageSync('offer')
    this.setData({
      offerFlag:flag
    })
  },
  gotoBox(e){//跳转页面
    wx.navigateTo({
      url:`${e.currentTarget.dataset.pathurl}?name=${e.currentTarget.dataset.name}`,
    })
  },
  receive(){//领取优惠券
    if(wx.getStorageSync('offer') == '1'){
      wx.showToast({
        title: '已经领取!!',
        icon: 'info',
        duration: 1000
      })
    }else{
      wx.showToast({
        title: '领取成功!!',
        icon: 'success',
        duration: 1000
      })
      JSON.stringify(wx.setStorageSync('offerObj',{
        name:'艺欣艺术100代金券',
        price:100,
        time:'2019-11-11至2020-11-11'
      }))
    }
    wx.setStorageSync('offer','1')
    let flag = wx.getStorageSync('offer')
    this.setData({
      offerFlag:flag
    })
  },
  goToOfferDetail(){
    wx.navigateTo({
      url: '/pages/offerDetail/offerDetail',
    })
  }
})
