;(function () {
    // DisqusJS
    if (window.aomori.disqusjs && window.aomori.disqusjs.enable) {
        const dsqjs = new DisqusJS({
            shortname: window.aomori.disqusjs.shortname,
            siteName: window.aomori.disqusjs.siteName,
            api: window.aomori.disqusjs.api,
            apikey: window.aomori.disqusjs.apikey,
            nesting: window.aomori.disqusjs.nesting,
            nocomment: window.aomori.disqusjs.nocomment,
            admin: window.aomori.disqusjs.admin,
            adminLabel: window.aomori.disqusjs.adminLabel,
        })
    }
})()
