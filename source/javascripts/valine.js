;(function () {
    if (window.aomori.valine && window.aomori.valine.enable) {
        new Valine({
            el: '#valine-container',
            appId: window.aomori.valine.appId,
            appKey: window.aomori.valine.appKey,
        })
    }
})()
