//index.js
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList:[
      {
        logo:'/images/pro_01.jpg',
        title:'标题1',
        desc:'内容1',
      },
      {
        logo: '/images/pro_02.jpg',
        title: '标题2',
        desc: '内容2',
      },
      {
        logo: '/images/pro_03.jpg',
        title: '标题3',
        desc: '内容3',
      },
    ],
  },

  toDetail:function(e) {
    console.log(e)
    var index = e.currentTarget.dataset.index
    console.log("index = "+index)

    //本地缓存传值
    wx.setStorageSync('title', this.data.proList[index].title)

    //url 传值
    wx.navigateTo({
      url: '/pages/detail/detail?title='+this.data.proList[index].title,
    })
  },
  onLoad: function() {
    
  },

  onGetUserInfo: function(e) {

  },

  onGetOpenid: function() {
    
  },

})
