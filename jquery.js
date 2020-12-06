function $(selector) {
    let  element;
    if (typeof selector == 'string') {
        element = document.querySelectorAll(selector);
    } else if (selector instanceof HTMLElement) {
        element = [ selector ]
    } else {
        element = null
    }
    return new jQ(element)
}

function jQ(params) {
    this.element = params
    this.on = function (event, callBackFunction) {  
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener(event, callBackFunction)            
        }
        return this;
    }
    this.html = function (html) {  
        if (typeof html == 'string' || typeof html == 'number') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].innerHTML = html
                
            }
        }
        return this;
    }
    this.css = function (styleName, value) {  
        if (typeof styleName == 'string' && (typeof value == 'string' || typeof value == 'number')) {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style = `${styleName}: ${value}`;                
            }
        } else if (typeof styleName == 'object' && styleName != null && !Array.isArray(styleName)) {
            for (let i = 0; i < this.element.length; i++) {
                for (const key in styleName) {
                    this.element[i].style[key] = styleName[key]
                }          
            }
        }
        return this
    }
    this.toggleClass = function (className) {  
        if (typeof className == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(className)) {
                    this.element[i].classList.remove(className)
                } else {
                    this.element[i].classList.add(className)
                }    
            }
        }
        return this
    }
    this.classes = function (event , value) {  
        for (let i = 0; i < this.element.length; i++) {
            if (event == 'addClass' && typeof value == 'string') {
                this.element[i].classList.add(value)
            } else if (event == 'removeClass' && typeof value == 'string') {
                this.element[i].classList.remove(value)
            }
        }
        return this
    }
    this.width = function (width) {  
        for (let i = 0; i < this.element.length; i++) {
            if (typeof width == 'number') {
                this.element[i].style.width = width + 'px'
            } else if (typeof width == 'string') {
                this.element[i].style.width = width
            } else {
                this.element[i].width = this.element[i].width
            }        
        }
        return this
    }
    this.height = function (height) {  
        for (let i = 0; i < this.element.length; i++) {
            if (typeof height == 'number') {
                this.element[i].style.height = height + 'px'
            } else if (typeof height == 'string') {
                this.element[i].style.height = height
            } else {
                this.element[i].height = this.element[i].height
            }        
        }
        return this
    }
}

/* Вашим домашним заданием будет сделать методы которые будут удалять и добавлять классы (addClass, removeClass). Также сделать методы которые будут изменять ширину и высоту элементов, при этом если вы получаете просто число, то сами добавляете “px”, а если получаете строку, то просто передаете для ширины, но если вы ничего не получаете, то возвращаете ширину или высоту первого элемента. (height, width) */

