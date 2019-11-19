
// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */

Page({
  data: {
    isAllSelect: false,
    totalMoney: 0,
    carts:[]  
  },
  onLoad: function (options) {
    this.getTotalPrice();
    var cartData=JSON.parse(wx.getStorageSync('cartData'))
    this.setData({
      carts: cartData
    })
    // this.getTotalPrice();
    // this.switchSelect();
    // this.quantityChange();

  },
  // 选择药品函数
  switchSelect (ev) {
    console.log(ev)
    let index = ev.currentTarget.dataset.index; // 获取data- 传进来的index
    let carts = this.data.carts; // 获取购物车列表
    let selectNum = 0; //统计选中商品
    const isSelect = carts[index].isSelect; // 获取当前商品的选中状态
    carts.isSelect = !isSelect; // 改变状态
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].isSelect) {
        selectNum++
      }
    }
    if (selectNum == carts.length) {
      this.setData({
        isAllSelect: true
      })
    } else {
      this.setData({
        isAllSelect: false
      })
    }
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },
  // 商品增加或减少
  quantityChange(ev) {
    let index = ev.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.forEach(item => {
      let quantity = item.count.quantity;
      if (ev.target.id == 'sub') {
        if (quantity <= 1) return
        quantity -= 1
      } else if (ev.target.id == 'add') {
        quantity += 1
      }
      carts[index].count.quantity = quantity
    })
    // this.setData({
    //   carts: carts
    // })
    // this.getTotalPrice()
  },
  // 计算总价函数
  getTotalPrice() {
    let carts = this.data.carts; // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) { // 循环列表得到每个数据
      if (carts[i].isSelect) { // 判断选中才会计算价格
        total += carts[i].count.quantity * carts[i].price; // 所有价格加起来
      }
    }
    this.setData({ // 最后赋值到data中渲染到页面
      carts: carts,
      totalMoney: total.toFixed(2)
    });
  },
  // 商品全选
  selectAll(e) {
    console.log(this.data.isAllSelect)
    let isAllSelect = this.data.isAllSelect; // 是否全选状态
    isAllSelect = !isAllSelect;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].isSelect = isAllSelect; // 改变所有商品状态
    }
    this.setData({
      isAllSelect: isAllSelect,
      carts: carts
    });
    this.getTotalPrice(); // 重新获取总价
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }
})
