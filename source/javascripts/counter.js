;(function () {
    if (window.aomori_counter) {
        const url = md5(window.location.href)
        // http://localhost:3002/api/add
        $.post('https://counter.linhong.me/api/add', {
            url,
            href: window.location.href,
        }).then((res) => {
            $('#counter').text(res.data.count)
        })
    }
})()
