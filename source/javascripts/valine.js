;(function () {
    if (window.aomori.valine && window.aomori.valine.enable) {
        new Valine({
            el: '#valine-container',
            appId: window.aomori.valine.appId,
            appKey: window.aomori.valine.appKey,
            placeholder: window.aomori.valine.placeholder,
            avatar: window.aomori.valine.avatar,
            pageSize: window.aomori.valine.pageSize,
            lang: window.aomori.valine.lang,
            visitor: window.aomori.valine.visitor,
            highlight: window.aomori.valine.highlight,
            recordIP: window.aomori.valine.recordIP,
            emojiCDN: window.aomori.valine.emojiCDN,
            enableQQ: window.aomori.valine.enableQQ,
            requiredFields: window.aomori.valine.requiredFields,
        })
    }
})()
