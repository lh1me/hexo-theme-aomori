;(function () {
    if (window.aomori && window.aomori.gitalk) {
        window.aomori.gitalk.id = md5(window.location.href)
        const gitalk = new Gitalk(window.aomori.gitalk)
        gitalk.render('gitalk-container')
    }
})()
