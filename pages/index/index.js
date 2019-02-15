Page({
    data: {
        showTopTips: false,
        area: ""
    },
    showTopTips: function() {
        var that = this;
        this.setData({
            showTopTips: true
        });
        setTimeout(function() {
            that.setData({
                showTopTips: false
            });
        }, 3000);
    },
    calculateArea: function(e) {
        var a = parseFloat(e.detail.value.side1);
        var b = parseFloat(e.detail.value.side2);
        var c = parseFloat(e.detail.value.side3);
        var p = (a + b + c) / 2.0;
        var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        this.setData({
            area: s.toFixed(4)
        })
    }
})