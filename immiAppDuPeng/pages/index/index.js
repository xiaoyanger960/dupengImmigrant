var app = getApp();
const config = require("../../config.js")
Page({
  data: {
    imgUrls: [
      '../../images/banner/banner01.jpg',
      '../../images/banner/banner02.jpg',
      '../../images/banner/banner03.jpg',  
      '../../images/banner/banner04.jpg',  
    ],
    hostImg:app.d.hostImg,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    recommendSchoolData:[],
    rankSchoolData:[],
    schoolData:{}
  },
  know:function(){
    wx.showModal({
      title: '支持移民类型',
      content: 'EB1A,EB1B,NIW',
    })

  },
  evaluate:function(){
    wx.navigateTo({
      url: '../evaluate/evaluate',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  service:function(){

  },
  about:function(){
    wx.navigateTo({
      url: '../aboutus/aboutus',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  eb1a:function(){
    wx.navigateTo({
      url: '../eb1a/eb1a',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  eb1b:function(){
    wx.navigateTo({
      url: '../eb1b/eb1b',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  niw: function () {
    wx.navigateTo({
      url: '../niw/niw',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onShareAppMessage: function () {
    return {
      title: '留学移民不求人',
      path: '/pages/index/index',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  },

  /*onLoad: function (options) {
    var that = this;
    wx.request({
      url: config.UNIVER_LIST,
      method:'post',
      data: {},
      header: {
        'Content-Type':  'application/x-www-form-urlencoded'
      },
      success: function (res) {       
        var school = res.data.data;
        console.log(school);
        //var bannerUrl=res.data.data.list;
        //that.setData({
          //imgUrls:bannerUrl
        //});  
        that.setData({
          schoolData: school
        })
    
      },
      fail:function(e){
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  searchRedirect:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  }*/

});