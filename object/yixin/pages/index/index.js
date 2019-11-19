//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    indicatorDots: true,
    offerFlag:'0',
    vertical: false,
    interval: 2000,
    duration: 500,
    imgArr:[
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1784651257,3355939035&fm=26&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=3209370120,2008812818&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2752453349,2871240348&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=3390039905,145682966&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3751828260,2572384024&fm=26&gp=0.jpg'
      ],
    shopImgArr:[
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1261311949,211702069&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3343385524,1816653258&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4116498177,2464549981&fm=26&gp=0.jpg'
    ],
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
    // this.onPullDownRefresh()
  },
  onPullDownRefresh(){
    wx.showNavigationBarLoading();
    wx.showLoading({title:'加载中...'})
    setTimeout(() => {
      wx.hideNavigationBarLoading();;
      wx.stopPullDownRefresh();
      wx.hideLoading()
    },500)
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
