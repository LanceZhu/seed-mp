let app = getApp()

Page({
    data: {
        programs: [
            { 'title': '好友对战', 'subtitle': '邀请微信好友，相互比拼一较高下', 'img': '/images/friend.svg', 'location': './friends_sort/friends_sort' },
            { 'title': '随机匹配', 'subtitle': '你永远不知道，下一个对手会是谁', 'img': '/images/fighting.svg', 'location': './fighting_sort/fighting_sort' },
            { 'title': '我的排名', 'subtitle': '好友和全球排名，你能排在第几名？', 'img': 'cloud://production-7gzyk6ja759cf75a.7072-production-7gzyk6ja759cf75a-1253604577/images/rank.svg', 'location': './rank_list/rank_list' }
        ]
    },

    onLoad: function (options) {
    },

    onShow (e) {
        this.quit()
    },

    quit: function () {
        if (app.tunnel && app.tunnel.isActive()) {
            app.tunnel.close()
            console.log('[tunnelGame][close]')
        }
    }
})
