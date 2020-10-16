;(function () {
    if (window.aomori_counter) {
        const url = md5(window.location.href)
        $.get('https://counter.linhong.me/api/add?url=' + url).then((res) => {
            $('#counter').text(res.data.count)
        })

        const pathname = window.location.pathname
        $.get(
            'https://counter.linhong.me/api/google/analytics?url=' +
                pathname +
                '&startdate=2010-01-01',
            function (res) {
                console.log(res.data)
            }
        )
    }
})()
