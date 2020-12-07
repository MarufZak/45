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
    this.addClass = function (addClass) {  
        if (typeof addClass == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].classList.add(addClass)            
            }
        }
        return this
    }
    this.removeClass = function (removeClass) {  
        if (typeof removeClass == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].classList.remove(removeClass)            
            }
        }
        return this
    }
    this.width = function (width) {  
        if (typeof width == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.width = width
            } 
        } else if (typeof width == 'number') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.width = width + 'px'                
            }
        } else if (width === undefined) {
            return this.element[0].clientWidth
        }
        return this
    }
    this.height = function (height) {  
        if (typeof height == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.height = height
            } 
        } else if (typeof height == 'number') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.height = height + 'px'                
            }
        } else if (height === undefined) {
            return this.element[0].clientHeight
        }
        return this
    }
}

