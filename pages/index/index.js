Page({

  /**
   * 页面的初始数据
   */
  data: {
    sliderImg: [
      {
        imgSrcs: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        linkUrls:'/pages/pagein/pagein?id=250'
      },
      {
        imgSrcs: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        linkUrls:'/pages/pagein/pagein?id=250'
      },
      {
        imgSrcs: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        linkUrls: '/pages/about/about'
      }
    ],
    deger:'',
    loupan:'',
    style:'',
    spaces:'',
    area:'',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    //所有图片的高度
    imgheights: [],
    //图片宽度
    imgwidth: 750,
    //默认
    current: 0,

    selectArray1: true,
    firstSelect1: '设计师',
    selecIcon1: false,

    selectArray2: true,
    firstSelect2: '楼盘',
    selecIcon2: false,

    selectArray3: true,
    firstSelect3: '风格',
    selecIcon3: false,

    selectArray4: true,
    firstSelect4: '空间',
    selecIcon4: false,

    selectArray5: true,
    firstSelect5: '面积',
    selecIcon5: false,


    page: 1,
    designerID:'',
    loupanID:'',
    styleID:'',
    spacesID:'',
    areaID:'',
    listData:'',

    // clientHeight: '',
    // overflow:'',
    isScroll:'',
  },



  call_me:function(){
    wx.makePhoneCall({
      phoneNumber: '4000-712-888'
    })
  },

  drownList1: function () {
    var selectArray1 = this.data.selectArray1;
    if (selectArray1 == true) {
      this.setData({
        selecIcon1: true,
        selectArray1: false,
        selecIcon2: false,
        selectArray2: true,
        selecIcon3: false,
        selectArray3: true,
        selecIcon4: false,
        selectArray4: true,
        selecIcon5: false,
        selectArray5: true,
        isScroll: true,
      });
    } else {
      this.setData({
        selecIcon1: false,
        selectArray1: true,
        selecIcon2: false,
        selectArray2: true,
        selecIcon3: false,
        selectArray3: true,
        selecIcon4: false,
        selectArray4: true,
        selecIcon5: false,
        selectArray5: true,
        isScroll:'',
      });
    }
  },
  //点击切换
  mySelect1: function (e) {
    var _this = this;
    this.setData({
      firstSelect1: e.target.dataset.me,
      selectArray1: true,
      selecIcon1: false,
      isScroll: '',
      designerID:e.target.dataset.id,
      page:1,
    },()=>{
      wx.request({
        url: 'https://request.hejianzhiyang.com/Yiyang/index?page=' + _this.data.page + '&limit=10&designerID=' + _this.data.designerID + '&styleID=' + _this.data.styleID + '&loupanID=' + _this.data.loupanID + '&spacesID=' + _this.data.spacesID + '&areaID=' + _this.data.areaID,
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          _this.setData({
            listData: res.data
          });
          // console.log(_this.data.listData);
        }
      });
    });
    // console.log(e.target.dataset.id);
    // console.log(this.data.designerID);
  },

  drownList2: function () {
    var selectArray2 = this.data.selectArray2;
    if (selectArray2 == true) {
      this.setData({
        selecIcon2: true,
        selectArray2: false,
        selecIcon1: false,
        selectArray1: true,
        selecIcon3: false,
        selectArray3: true,
        selecIcon4: false,
        selectArray4: true,
        selecIcon5: false,
        selectArray5: true,
        isScroll: true,
      })
    } else {
      this.setData({
        selecIcon1: false,
        selectArray1: true,
        selecIcon2: false,
        selectArray2: true,
        selecIcon3: false,
        selectArray3: true,
        selecIcon4: false,
        selectArray4: true,
        selecIcon5: false,
        selectArray5: true,
        isScroll: "",
      })
    }
  },
  //点击切换
  mySelect2: function (e) {
    var _this = this;
    this.setData({
      firstSelect2: e.target.dataset.me,
      selectArray2: true,
      selecIcon2: false,
      isScroll: '',
      loupanID: e.target.dataset.id,
      page:1,
    },()=>{
      wx.request({
        url: 'https://request.hejianzhiyang.com/Yiyang/index?page=' + _this.data.page + '&limit=10&designerID=' + _this.data.designerID + '&styleID=' + _this.data.styleID + '&loupanID=' + _this.data.loupanID + '&spacesID=' + _this.data.spacesID + '&areaID=' + _this.data.areaID,
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          _this.setData({
            listData: res.data
          });
          // console.log(_this.data.listData);
        }
      });
    });
    // console.log(e.target.dataset.id);
  },

  drownList3: function () {
    var selectArray3 = this.data.selectArray3;
    if (selectArray3 == true) {
      this.setData({
        selecIcon3: true,
        selectArray3: false,
        selecIcon1: false,
        selectArray1: true,
        selecIcon2: false,
        selectArray2: true,
        selecIcon4: false,
        selectArray4: true,
        selecIcon5: false,
        selectArray5: true,
        isScroll: true,
      })
    } else {
      this.setData({
        selecIcon3: false,
        selectArray3: true,
        selecIcon2: false,
        selectArray2: true,
        selecIcon1: false,
        selectArray1: true,
        selecIcon4: false,
        selectArray4: true,
        selecIcon5: false,
        selectArray5: true,
        isScroll: '',
      })
    }
  },
  //点击切换
  mySelect3: function (e) {
    var _this = this;
    this.setData({
      firstSelect3: e.target.dataset.me,
      selectArray3: true,
      selecIcon3: false,
      isScroll: '',
      styleID: e.target.dataset.id,
    },()=>{
      wx.request({
        url: 'https://request.hejianzhiyang.com/Yiyang/index?page=' + _this.data.page + '&limit=10&designerID=' + _this.data.designerID + '&styleID=' + _this.data.styleID + '&loupanID=' + _this.data.loupanID + '&spacesID=' + _this.data.spacesID + '&areaID=' + _this.data.areaID,
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          _this.setData({
            listData: res.data
          });
          // console.log(_this.data.listData);
        }
      });
    });
    // console.log(e.target.dataset.id);
  },

  drownList4: function () {
    var selectArray4 = this.data.selectArray4;
    if (selectArray4 == true) {
      this.setData({
        selecIcon4: true,
        selectArray4: false,
        selecIcon1: false,
        selectArray1: true,
        selecIcon2: false,
        selectArray2: true,
        selecIcon3: false,
        selectArray3: true,
        selecIcon5: false,
        selectArray5: true,
        isScroll: true,
      })
    } else {
      this.setData({
        selecIcon4: false,
        selectArray4: true,
        selecIcon2: false,
        selectArray2: true,
        selecIcon1: false,
        selectArray1: true,
        selecIcon3: false,
        selectArray3: true,
        selecIcon5: false,
        selectArray5: true,
        isScroll: '',
      })
    }
  },
  //点击切换
  mySelect4: function (e) {
    var _this = this;
    this.setData({
      firstSelect4: e.target.dataset.me,
      selectArray4: true,
      selecIcon4: false,
      isScroll: '',
      spacesID: e.target.dataset.id,
    },()=>{
      wx.request({
        url: 'https://request.hejianzhiyang.com/Yiyang/index?page=' + _this.data.page + '&limit=10&designerID=' + _this.data.designerID + '&styleID=' + _this.data.styleID + '&loupanID=' + _this.data.loupanID + '&spacesID=' + _this.data.spacesID + '&areaID=' + _this.data.areaID,
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          _this.setData({
            listData: res.data
          });
          // console.log(_this.data.listData);
        }
      });
    });
    // console.log(e.target.dataset.id);
  },

  drownList5: function () {
    var selectArray5 = this.data.selectArray5;
    if (selectArray5 == true) {
      this.setData({
        selecIcon5: true,
        selectArray5: false,
        selecIcon1: false,
        selectArray1: true,
        selecIcon2: false,
        selectArray2: true,
        selecIcon3: false,
        selectArray3: true,
        selecIcon4: false,
        selectArray4: true,
        isScroll: true,
      })
    } else {
      this.setData({
        selecIcon5: false,
        selectArray5: true,
        selecIcon2: false,
        selectArray2: true,
        selecIcon1: false,
        selectArray1: true,
        selecIcon3: false,
        selectArray3: true,
        selecIcon4: false,
        selectArray4: true,
        isScroll: '',
      })
    }
  },
  //点击切换
  mySelect5: function (e) {
    var _this = this;
    this.setData({
      firstSelect5: e.target.dataset.me,
      selectArray5: true,
      selecIcon5: false,
      isScroll: '',
      areaID: e.target.dataset.id,
    },()=>{
      wx.request({
        url: 'https://request.hejianzhiyang.com/Yiyang/index?page=' + _this.data.page + '&limit=10&designerID=' + _this.data.designerID + '&styleID=' + _this.data.styleID + '&loupanID=' + _this.data.loupanID + '&spacesID=' + _this.data.spacesID + '&areaID=' + _this.data.areaID,
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          _this.setData({
            listData: res.data
          });
          // console.log(_this.data.listData);
        }
      });
    });
    // console.log(e.target.dataset.id);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'https://request.hejianzhiyang.com/Yiyang/getXcxSlider',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          sliderImg: res.data
        });
      }
    });
    wx.request({
      url: 'https://request.hejianzhiyang.com/Yiyang/getCondition?type=designer',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          deger: res.data
        });
      }
    });
    wx.request({
      url: 'https://request.hejianzhiyang.com/Yiyang/getCondition?type=loupan',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          loupan: res.data
        });
      }
    });
    wx.request({
      url: 'https://request.hejianzhiyang.com/Yiyang/getCondition?type=style',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          style: res.data
        });
      }
    });
    wx.request({
      url: 'https://request.hejianzhiyang.com/Yiyang/getCondition?type=spaces',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          spaces: res.data
        });
      }
    });
    wx.request({
      url: 'https://request.hejianzhiyang.com/Yiyang/getCondition?type=area',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          area: res.data
        });
      }
    });
    wx.request({
      url: 'https://request.hejianzhiyang.com/Yiyang/index?page=' + _this.data.page + '&limit=10&designerID=' + _this.data.designerID + '&styleID=' + _this.data.styleID + '&loupanID=' + _this.data.loupanID + '&spacesID=' + _this.data.spacesID + '&areaID=' + _this.data.areaID,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          listData: res.data
        });
        // console.log(_this.data.listData);
      }
    });
    
  },


  imageLoad: function (e) {
    //获取图片真实宽度
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比
      ratio = imgwidth / imgheight;
    // console.log(imgwidth, imgheight);
    //计算的高度值
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的高度记录到数组里
    imgheights.push(imgheight);
    this.setData({
      imgheights: imgheights,
    });
  },

  bindchange: function (e) {
    // console.log(e.detail.current)
    this.setData({ current: e.detail.current })
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
    var _this = this;
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    });
    _this.setData({
      page:_this.data.page+1,
    });
    wx.request({
      url: 'https://request.hejianzhiyang.com/Yiyang/index?page=' + _this.data.page + '&limit=10&designerID=' + _this.data.designerID + '&styleID=' + _this.data.styleID + '&loupanID=' + _this.data.loupanID + '&spacesID=' + _this.data.spacesID + '&areaID=' + _this.data.areaID,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var push_list = _this.data.listData;

        for (var i = 0; i < res.data.length; i++) {
          push_list.push(res.data[i]);
        }

        _this.setData({
          listData: _this.data.listData
        });
        wx.hideLoading();
        // console.log(_this.data.listData);
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },




  // 备用方法
  // drownList2: function () {
  //   var _this = this;
  //   var selectArray2 = this.data.selectArray2;
  //   if (selectArray2 == true) {
  //     wx.getSystemInfo({
  //       success: function (res) {
  //         console.log(res.windowHeight);
  //         _this.setData({
  //           isScroll: true,
  //           clientHeight: res.windowHeight + "px",
  //           overflow: "hidden",
  //         });
  //       },
  //     });
  //     this.setData({
  //       selecIcon2: true,
  //       selectArray2: false,
  //       selecIcon1: false,
  //       selectArray1: true,
  //       selecIcon3: false,
  //       selectArray3: true,
  //       selecIcon4: false,
  //       selectArray4: true,
  //       selecIcon5: false,
  //       selectArray5: true,
  //     })
  //   } else {
  //     this.setData({
  //       selecIcon1: false,
  //       selectArray1: true,
  //       selecIcon2: false,
  //       selectArray2: true,
  //       selecIcon3: false,
  //       selectArray3: true,
  //       selecIcon4: false,
  //       selectArray4: true,
  //       selecIcon5: false,
  //       selectArray5: true,
  //       clientHeight: "",
  //       overflow: "",
  //     })
  //   }
  // },


})