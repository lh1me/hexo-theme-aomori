// Add class to element => https://www.sitepoint.com/add-remove-css-class-vanilla-js/
export function addNewClass(elements, myClass) {
    // if there are no elements, we're done
    if (!elements) {
        return
    }
    // if we have a selector, get the chosen elements
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements)
    }
    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) {
        elements = [elements]
    }
    // add class to all chosen elements
    for (var i = 0; i < elements.length; i++) {
        // if class is not already found
        if (
            (' ' + elements[i].className + ' ').indexOf(' ' + myClass + ' ') < 0
        ) {
            // add class
            elements[i].className += ' ' + myClass
        }
    }
}

// Remove class from element => https://www.sitepoint.com/add-remove-css-class-vanilla-js/
export function removeClass(elements, myClass) {
    // if there are no elements, we're done
    if (!elements) {
        return
    }

    // if we have a selector, get the chosen elements
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements)
    }
    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) {
        elements = [elements]
    }
    // create pattern to find class name
    var reg = new RegExp('(^| )' + myClass + '($| )', 'g')
    // remove class from all chosen elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].className = elements[i].className.replace(reg, ' ')
    }
}

// 函数节流
export function throttle(fn, scope) {
    let timer
    return function () {
        const context = scope || this
        const args = arguments
        if (!timer) {
            timer = setTimeout(function () {
                fn.apply(context, args)
                timer = null
            }, 80)
        }
    }
}
