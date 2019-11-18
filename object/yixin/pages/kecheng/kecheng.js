// pages/kecheng/kecheng.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stausts:false,
    // list:['全部','天使宝宝','舞蹈启蒙','舞蹈低端','舞蹈中段','舞蹈高级','硬笔书法','少儿绘画','创意美术','少儿主持'],
    lists:[{
        title: '全部',
        gou: [
          {
            titles: '艺欣艺术 美术组、天使宝宝班300元学费任你砍！',
            jia: '300',
            lan: '904',
            ku:'200',
            zan: '9',
            png: '0',
            nums:1,
            images: '../../images/cart.jpg',
            id:0
          },
          {
            titles: '艺欣艺术 美术组、500元学费任你砍！',
            jia: '500',
            lan: '4924',
            ku: '300',
            zan: '67',
            png: '0',
            nums: 1,
            images: '../../images/cart.jpg',
            id:1
          },
        ]
      }, {
        title: '天使宝宝',
        
      }, {
        title: '舞蹈启蒙',
     
      }, {
        title: '舞蹈低端',
      
      }, {
        title: '舞蹈中段',
        
      }, {
        title: '舞蹈高级',
    
      }, {
        title: '硬笔书法',
   
      }, {
        title: '少儿绘画',
      
      }, {
        title: '创意美术',
        
      }, {
        title: '少儿主持',
    
      },
    ],

  },
  clicke(e){
    console.log(e.currentTarget.dataset.num)
    this.setData({
      num:e.currentTarget.dataset.num
    })


  },

  wuche(e){
    var ad=e.currentTarget.dataset.id
      this.setData({
        stausts:true,
        gouon: this.data.lists[0].gou[ad]
      })
  },
  aaas() {
    this.data.gouon.nums--
    var nums = this.data.gouon.nums
    
    console.log(nums)
    this.setData({
      nums: this.data.gouon.nums
    })
  },
  aaaa() {
    this.data.gouon.nums++
    var nums = this.data.gouon.nums
   
    console.log(nums)
    this.setData({
      nums: this.data.gouon.nums
    })
    
  },
  tiao(){
    wx.navigateTo({
      url: '../../pages/kecheng/kechengs/kechengs',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: '../../../server.js',
    //   method:'GET',
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })
    this.setData({
      num:0
    })
  },
  guan(){
    this.setData({
      stausts: false,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})