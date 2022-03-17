window.jQuery = function (selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray);
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    const api = Object.create(jQuery.prototype)
    Object.assign(api, {
        elements: elements,
        oldApi: selectorOrArray.oldApi
    })
    return api
};
jQuery.fn = jQuery.prototype = {
    each(fn) {
        for (let i = 0; i < this.elements.length; i++) {
            fn(this.elements[i], i)
        }
    },
    addClass(string) {
        this.each((node) => {
            node.classList.add(string)
        })
        return this; //只有返回api才可以继续链式调用
    },
    find(selector) {
        let array = []
        this.each((node) => {
            array = array.concat(Array.from(node.querySelectorAll(selector)))
            // 或者使用下面的写法
            // array = array.push(...node.querySelectorAll(selector)) 
        })
        array.oldApi = this
        return jQuery(array) //既要返回api，又要返回array
    },
    print() {
        console.log(this.elements)
    },

    // 返回上一次操作的elements
    end() {
        return this.oldApi
    },
    parent() {
        let array = [];
        this.each((node) => {
            if (array.indexOf(node.parentNode) === -1) {
                array.push(node.parentNode)
            }
        })
        array.oldApi = this
        return jQuery(array)
    },
    children() {
        let array = [];
        this.each((node) => {
            array.push(...node.children)
        })
        array.oldApi = this
        return jQuery(array)
    },
    siblings() {
        let array = [];
        this.each((node) => {
            let arr = Array.from(node.parentNode.children).filter((i) => {
                return i !== node
            })
            array.push(...arr)
        })
        array.oldApi = this
        return jQuery(array)
    },
    get(index) {
        return this.elements[index]
    },
    index(selector) {
        let node = document.querySelector(selector);
        let j;
        this.children().each((n, i) => {
            if (n === node) {
                j = i;
                return
            }

        })
        return j
    }
}
