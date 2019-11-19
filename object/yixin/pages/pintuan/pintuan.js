Page({
  data: {
    titleBtn: ['待拼成','已拼成','拼团失败'],
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