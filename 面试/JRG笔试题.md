# 2020

你如何理解“前端工程师先是一个工程师，然后才是一个前端”这句话

初看这句话，隐隐感觉有些歧义，似乎可以表达多种意思：

1. 以工程师为重点：表达前端工程师不应该局限自己为前端，而应该把目光放长远。除了 JS 、HTML 、CSS 等这一亩三分地外，应该将视线放宽，不局限一种语言，一种框架，一个领域；
2. 以前端为重点：表达前端工程师在成为一个优秀的前端的道路上，成为一个懂得软件开发工程化规范的工程人员是必不可少的一环。即前端工程师，先成为一个工程师，才能有机会成长为一名用户界面专家。

不论上述哪种意思，本质上都是一样的，都是**不设限**。
软件开发是一门令人着迷的艺术，它能给在追求它道路上的每一层人递进的快乐，就好比英雄联盟的段位机制和意识层次（你以为我在第二层，其实我在第五层~老千层饼啦~），黄铜有黄铜的快乐（刚入门时候编程可能是最纯粹的快乐），王者有王者的博弈，上分是艰难的（“别出新技术啦，我学不动啦”），不是每个人都能上王者（去大厂），去峡谷之巅（去 BAT），甚至成为职业选手（成为领域专家），但谁不想自己的段位更高一点呢（钱更多，技能更强，技术更深）。
成长是需要不断努力的，现在的我只是一名前端，我希望随着技术得不断提升，能够快速成长为一名优秀的前端工程师，这并不容易，但是只有对自己不设限，而后不断得增加自己的广度和深度，才有可能，不是吗？
~双拼真香！~

# 2019

[计算器](https://jsbin.com/vipesomebi/1/edit?html,css,js,console,output)

## 二、JS 基础考察

有如下代码

```
function fn(){
	return 1
}
```

### 请问 fn 和 fn() 的区别是什么？

fn 指代上述函数的函数名；fn() 即 fn.call()，指代调用上述函数名为 fn 的函数，执行该函数返回结果 1。

## 三、JS 基础考察

有如下代码

```
var name = 'x'
var obj = {
	name: 'frank'
}
```

### 请问 obj[name] 的值是多少？

```
undefined
```

## 四、JS 基础考察

有如下代码

```
var a = [1,2,3]
```

### 请问，a.concat(4) 与 a.push(4) 的区别是什么？

a.concat(4) 返回一个新数组 [1,2,3,4]，a 仍为 [1,2,3]；a.push(4) 返回数组长度（4），即 a 变成了 [1,2,3,4]

## 五、JS 基础考察

有如下未完成的代码

```
Array.prototype.self = function(){
  //未完成
}
let arr = [1,2,3,4,5]
arr.self() // [1,2,3,4,5]
```

### 请填写未完成的部分，使得 arr.self() 的值是 [1,2,3,4,5]

```
Array.prototype.self = function(){
  return this
}
let arr = [1,2,3,4,5]
arr.self() // [1,2,3,4,5]
```

## 六、JS 基础考察

### JS 有哪几种数据类型？

Number、String、Boolean、Object、undefined、null、Symbol

## 七、debounce 和 throttle 的使用场景分别是什么？简单实现一个 debounce 或者 throttle。

- debounce：将触发频繁的事件合并成一次执行。debounce 适用于诸如 input 事件，当用户输入时需要响应 ajax 请求，多次 input 只响应一次回调方法。
- throttle： 设置一个阀值，在阀值内，将触发的事件合并成一次执行；且当到达阀值，必定执行一次事件。throttle 适用于 resize 或者鼠标移动事件，防止浏览器频繁响应事件，严重拉低性能。

```
// debounce
let button = document.getElementById('button')
var timeId = null
button.onclick = function() {
 if(timeId) {
   window.clearTimeout(timeId)
  }
    timeId =  setTimeout(() => {
    fn()
    timeId = null
  },5000)
}

function fn() {
  console.log('1')
}
```

## 八、用 Vue 写一个 Hello World（要求能运行，你可以使用 jsbin.com 或者 codesandbox.io 或者 GitHub Pages 来写）如果你想看起来比其他应聘者厉害，你可以加各种其他的东西。

[Vue hello world](https://jsbin.com/lipejicuqe/1/edit?html,js,output)

## 九、用 React 写一个 Hello World（要求能运行，你可以使用 jsbin.com 或者 codesandbox.io 或者 GitHub Pages 来写）如果你想看起来比其他应聘者厉害，你可以加各种其他的东西。

[React hello world](https://jsbin.com/yozobufadi/1/edit?html,js,output)

## 十、写出你觉得厉害的程序员的名字或者开源项目的名字，并说出理由，不少于五个。

以下排名不分先后

1. **Timothy John Berners-Lee** 万维网、浏览器等的发明者，没有他可能就不会有前端这个行业（当然可能会有其他人代替他完成这个伟大的使命，但是世界就会变得不一样了，谁知道呢），就更不会说有现在我学习前端的机会。
2. **阮一峰** 教程浅显易懂，博客深入浅出。能够写博客讲明白一个东西很难，能够坚持连续十多年写近 1800 篇博客分享那么多事物，膜拜。
3. **TJ Holowaychuk** 大佬，各种知名开源库的贡献者。
4. **尤雨溪** Vue 作者，新人友好向的文档，让作为初学者的我更快上手前端工程化开发。
5. **廖雪峰** 另一个峰，javascript 教程同样浅显易懂，另外还有 git 教程。
6. **张鑫旭** CSS 大神，写了十年的 CSS 博客，内容十分深入，学习 CSS 就要看他的博客。
7. **贺师俊** 看贺老的回答学习到了很多。
8. **vczh** 知乎大 V 轮子哥，车开得很稳。
9. **justjavac** 另一个前端大佬。
10. **方应杭** 讲课引人入胜，深入浅出，超喜欢听他吹逼。通过他我才了解到上面的大佬，踏进了程序员的世界。
    （还有很多。。）
