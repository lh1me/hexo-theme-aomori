;(function () {
    if (window.aomori_counter) {
        const url = md5(window.location.href)
        $.get('https://counter.linhong.me/api/add?url=' + url).then((res) => {
            $('#counter').text(res.data.count)
        })
    }
})()
