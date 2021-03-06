TypeScript：javascript 的类型超集，由于 javascript 是弱类型（变量类型不确定）的语言，因此有了微软的 TypeScript
[强类型 JavaScript 的解决方案](http://www.ruanyifeng.com/blog/2015/02/strong-typing-javascript.html)
![](https://upload-images.jianshu.io/upload_images/7094266-c333804c1f834140.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

node 无法直接运行 ts，需要用 ts-node

```
npm install typescript@3 -g
npm install ts-node@7.0.0 -g
```

```
{
    "configurations": [{
        "name": "ts-node",
        "type": "node",
        "request": "launch",
        # "program": "C:/Users/ada/AppData/Roaming/npm/node_modules/ts-node/dist/bin.js",  // "C:/Users/Administrator/AppData/Roaming/npm/node_modules/ts-node/dist/bin.js"
        "program": "注意看这里，要写成ts-node对应的可执行文件，Windows 用户注意了，你应该写成 ${workspaceRoot}/node_modules/ts-node/dist/bin.js",
        "args": ["${relativeFile}"],
        "cwd": "${workspaceRoot}",
        "protocol": "inspector"
    }]
}
```

利用调试功能检测代码

![](https://upload-images.jianshu.io/upload_images/7094266-eb538796c6703f3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
npm init -y
npm i -D ts-node typescript
```

![官方例子无法用 DEBUG，因为没有 document](https://upload-images.jianshu.io/upload_images/7094266-846108b36ee601f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## typescript 优点：类型检查

![](https://upload-images.jianshu.io/upload_images/7094266-bfe55b3bb81762d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 如何学 TS

![](https://upload-images.jianshu.io/upload_images/7094266-0ad57e81e205e9ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

1. 初略浏览官方文档：看哪些 js 没有。
2. 自己尝试写需求 demo，遇到问题再看文档，文档不懂搜索。
