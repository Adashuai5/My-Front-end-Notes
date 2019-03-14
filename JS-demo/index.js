前端面试基础常用代码

// promis
let fn = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve()
        }, 300)
    })
}
fn().then().then()

// 手写 ajax
let requset = new XMLHTTPRequest()
requset.open('POST', '/xxx')
requset.onreadystatechange = () => {
    if (requset.readyState === 4) {
        console.log('res')
        if (response.status === 200) {
            console.log('success')
        } else if (response.status >= 400) {
            console.log('fail')
        }
    }
}
requset.send()

// 闭包
function fn() {
    let n = 0

    function Addfn() {
        n = n + 1
        console.log(n)
    }
    return Addfn
}
let fn2 = fn()
fn() // 1
fn() // 1
console.log(n) // n is not defined

// 浅拷贝 （日常使用）
Object.assign(a, {})
var a = {
    ...{}
}
// 深拷贝 （日常使用）
var b = JSON.parse(JSON.stringify(object))
// 缺点：JSON 不支持函数、引用、undefined、RegExp、Date……

// 数组去重
// 1. 使用计数排序的逻辑，缺点是 key 只能是正整数
var a = [5, 2, 12, 32, 2, 54, 2, 3, 4, 5]
var hashTab = {}
for (let i = 0; i < a.length; i++) {
    if (a[i] in hashTab) {

    } else {
        hashTab[a[i]] = true
    }
}
console.log(hashTab) // {4: true, 2: true, 5: true, 6:true, 3: true}
console.log(Object.keys(hashTab)) // ['4','2','5','6','3']
// 2. Set
Array.from(new Set(a))
// [...new Set(array)]
// 正则实现 string.trim()
function trim(string) {
    return string.replace(/^\s+|\s+$/g, '')
}

// 继承
// 1. class 版本
class Animal {
    constructor() {
        this.body = "身体"
    }
    run() {}
}
class Human extends Animal {
    constructor(name) {
        super()
        this.name = name
    }
    useTools() {}
}
var ada = new Human('ada')
// 2. 原型链版本
function Animal() {
    this.body = "身体"
}

function Human(name) {
    Animal.apply(this, arguments)
    this.name = name
}
let f = function () {}
f.prototype = Animal.prototype
Human.prototype = new f()

var ada = new Human('ada')

// 事件委托
// 简单版本
function listen(element, eventType, selector, fn) {
    element.addEventListener(eventType, e => {
        if (e.target.matchs(selector)) {
            fn.call(el, e, el)
        }
    })
}

// 节流 技能冷却
function fn() {}
var cd = false
button.onclick = function () {
    if (cd) {

    } else {
        fn()
        cd = true
        var timeId = setTimeout(() => {
            cd = false
        }, 3000)
    }
}

// 防抖 （带着一起做，只做一次）
function fn() {}
var timeId = null
button.onclick = function () {
    if (timeId) {
        window.clearTimeout(timeId)
    } else {
        setTimeout(() => {
            fn()
            timeId = null
        }, 3000)
    }
}
// async/await
function resolveAfter2Seconds() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('received')
        }, 2000)
    })
}

async function asyncCall() {
    console.log('calling')
    var result = await resolveAfter2Seconds()
    console.log(result)
}

asyncCall()
// 捕获异常
async function getProcessedData(url) {
    let v;
    try {
        v = await downloadData(url);
    } catch (e) {
        v = await downloadFallbackData(url);
    }
    return processDataInWorker(v);
}