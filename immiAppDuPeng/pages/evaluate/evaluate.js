var app = getApp();
Page({
  data: {
    ImmigrationType:[
      "请选择",
      "EB1A",
      "EB1B",
      "NIW"
    ],
    Index:0,
    disbaled:true,
  },
  formSubmit:function(e){
    var evalateInfo = e.detail.value;
    if (evalateInfo.pubNum==""){
      wx.showToast({
        title: '请输入出版物数量！',
        duration: 4000,
        icon:"none"
      });
    } else if (!(/^[0-9]+$/.test(evalateInfo.pubNum))){
      wx.showToast({
        title: '请输入数字！',
        duration: 4000,
        icon: "none"
      });
    } else if (evalateInfo.citaNum==""){
      wx.showToast({
        title: '请输入引用次数！',
        duration: 4000,
        icon: "none"
      });
    } else if (!(/^[0-9]+$/.test(evalateInfo.citaNum))) {
      wx.showToast({
        title: '请输入数字！',
        duration: 4000,
        icon: "none"
      });
    }
    else if (evalateInfo.revNum == "") {
      wx.showToast({
        title: '请输入评论数！',
        duration: 4000,
        icon: "none"
      });
    } else if (!(/^[0-9]+$/.test(evalateInfo.revNum))) {
      wx.showToast({
        title: '请输入数字！',
        duration: 4000,
        icon: "none"
      });
    } else if (evalateInfo.ImmType=="请选择"){
      wx.showToast({
        title: '请选择移民类型！',
        duration: 4000,
        icon: "none"
      });
    }else{
      app.globalData.evalateInfo = evalateInfo;
      wx.showToast({
        title: "正在评估!",
        duration: 2000,
        icon:"loading"
      });
      setTimeout(function () {
        wx.navigateTo({
          url: '../result/result',
        });
      }, 2500);
    }
  },
  bindPickerChangeImmigrationType:function(e){
    console.log(e.detail.value);
    this.setData({
      Index: e.detail.value
    })
  }
})