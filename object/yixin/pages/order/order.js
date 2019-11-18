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
    }],
    middleList: [{
      img: 'http://img1.imgtn.bdimg.com/it/u=3608155120,1630233151&fm=26&gp=0.jpg',
      text: '  待付款时间了快放待付款时间了快放假施蒂利克待付款时间了快放假施蒂利克假施蒂利克',
      price: 300,
      counts: 4
    },{
      img: 'http://img1.imgtn.bdimg.com/it/u=3608155120,1630233151&fm=26&gp=0.jpg',
      text: '  待付款时间了快放待付款时间了快放假施蒂利克待付款时间了快放假施蒂利克假施蒂利克',
      price: 330,
      counts: 2
    }]
  },
  onLoad(options) {
    console.log(options.index)
    this.setData({
      currentIndex: options.index
    })
    app.loading()
  },
  onChangeBtn(ev){
    let index = ev.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })
    app.loading()
  }
})