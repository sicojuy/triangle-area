Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  onShareAppMessage() {
    return {
      title: '三角形面积',
      path: 'page/home/index'
    }
  },
  onShareTimeline() {
    '三角形面积'
  },

  data: {
    theme: 'light',
    message: "--",
    result: 0.0
  },

  calculate(e) {
    var message = this.data.message
    var result = ""
    const a = parseFloat(e.detail.value.side1)
    const b = parseFloat(e.detail.value.side2)
    const c = parseFloat(e.detail.value.side3)
    console.log("a: ", a)
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      message = "请输入三角形边长"
    } else if (a + b <= c || a + c <= b || b + c <= a) {
      message = "三角形任意两边之和需大于第三边"
    } else {
      message = ''
      const p = (a + b + c) / 2.0
      result = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }

    this.setData({
      message: message,
      result: result
    })
  },

  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    })

    if (wx.onThemeChange) {
      wx.onThemeChange(({theme}) => {
        this.setData({theme})
      })
    }
  }
})