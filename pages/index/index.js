Page({
    data: {},
    gotoPage: function(e) {
        var page = e.currentTarget.dataset.page;
        wx.navigateTo({
            url: '../' + page + '/' + page
        });
    },
    onLoad: function() {

    }
})