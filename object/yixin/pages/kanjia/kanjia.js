Page({
  data: {
    titleBtn: ['进行中','已购买','已结束'],
    currentIndex: 0
  },
  onLoad(options) {

  },
  onChangeBtn(ev){
    let index = ev.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })
  }
})