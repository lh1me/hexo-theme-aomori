
import { addNewClass, removeClass, throttle } from './class-module'

document.addEventListener('DOMContentLoaded',function(){
    let toggles = document.querySelectorAll('.cases .item')
    toggles.forEach(((toggle, index) => {
        
        toggle.addEventListener('mouseover', function(e) {
			      // Prevent the default link behavior
            e.preventDefault();

            // 移除上一次的选中状态
            removeClass(document.getElementsByClassName('img__active'), 'img__active')
            removeClass(document.getElementsByClassName('sub__active'), 'sub__active')
            // 设置新的选中状态
            addNewClass(toggle.children[0], 'img__active')
            addNewClass(document.getElementById('sub-' + toggle.dataset.icon), 'sub__active')

        }, false);

    }))

    // 监听屏幕滚动修改边栏
    window.addEventListener('scroll', throttle(() => {
        const _top = document.documentElement.scrollTop || document.body.scrollTop;
        if (_top > 100) {
            // 边栏绝对定位
            addNewClass('.sidebar', 'sidebar__fixed')
            // 返回顶部按钮显示
            $('#backtop').fadeIn(300)
        } else {
            // 取消边栏定位
            removeClass('.sidebar', 'sidebar__fixed')
            // 返回顶部按钮消失
            $('#backtop').fadeOut(300)
        }
    }));

    // 代码高亮
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });

    // TOC
    tocbot.init({
        tocSelector: '.post-toc-html',
        contentSelector: '.post-inner-html',
        headingSelector: 'h1, h2, h3'
    });

    // NProgress
    var totalH = document.body.scrollHeight || document.documentElement.scrollHeight // 页面总高
    var clientH = window.innerHeight || document.documentElement.clientHeight // 可视高
    window.addEventListener('scroll', throttle((e) => {
        // 计算有效高
        var validH = totalH - clientH
        // 滚动条卷去高度
        var scrollH = document.body.scrollTop || document.documentElement.scrollTop
        // 百分比
        var result = (scrollH/validH)
        NProgress.set(result)
    }))
    NProgress.configure({
        showSpinner: false,
        minimum: 0
    });

    // Back to Top
    $('#backtop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800)
    })

    // Share
    $('.share > .share-item').hover(function() {
      addNewClass($(this).children('.n-icon'), $(this).children('.n-icon')[0].classList[1] + '-select')
    }, function() {
      removeClass($(this).children('.n-icon'), $(this).children('.n-icon')[0].classList[2])
    })

    // Social
    $('.footer-info > .social').hover(function() {
      addNewClass($(this).children('.n-icon'), $(this).children('.n-icon')[0].classList[1] + '-select')
    }, function() {
      removeClass($(this).children('.n-icon'), $(this).children('.n-icon')[0].classList[2])
    })

    // Mobile Menu
    $('#mobile-menu-open').click(function() {
      $('.header-menu-mobile-menu').fadeIn(300)
      addNewClass($('body'), 'mobile-menu-fixed')
    })
    $('#mobile-menu-close').click(function() {
      $('.header-menu-mobile-menu').fadeOut(300)
      removeClass($('body'), 'mobile-menu-fixed')
    })

})