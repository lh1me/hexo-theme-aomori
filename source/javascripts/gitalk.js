;(function () {
    if (window.aomori && window.aomori.gitalk.enable) {
        console.log(window.aomori.gitalk)
        const gitalk = new Gitalk(window.aomori.gitalk)
        gitalk.render('gitalk-container')
    }
})()
