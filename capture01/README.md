## 第一章 Electron入门-如何快速自己搭起 `Electron` demo

#### 本地环境搭建
1. 官方教程：`https://electronjs.org/docs/tutorial/development-environment`

2. mac 环境搭建: 安装node环境即可。
  `http://nodejs.cn/download/`

3. windows 环境的搭建

    (1) 安装python2.7 (electron需要用到python来打包)
    选择2.7版本进行下载
    https://www.python.org/getit/

    (2) 安装node-gyp
    
    `npm install -g node-gyp`
    // windows 编译工具（请耐心等待，大概要10-15分钟才行，完成后会有done的提示的）

    `npm install --global --production windows-build-tools`

    (3) 运行时出现此错误的话： MSBUILD : error MSB4132，无法识别工具版本“2.0” 等（还有提示啥14.0,4.0的都一样）。

    // 此处2015 是电脑上装的2015 ，如果不是，可以看自己电脑是不是2012，

    // 或者不知道怎么看的，直接试试 2012 是不是得行。

    `npm install --msvs_version 2015 -g`

    `npm config set msvs_version 2015 -g`

    (4) 打包时候总有包，无论开不开代理都下不下来的话，请如下做：
    复制终端中，下不下来的路径，直接去那个路径（应该是github的路径）下载，
    并将文件拷贝到，如下目录下相关文件夹中，比如nsis的
    C:\Users\pk\AppData\Local\electron-builder\Cache\nsis。

#### Electron demo搭建。

1. 快速尝试
    快速搭建通道：`https://electronjs.org/docs/tutorial/first-app`

    `git clone https://github.com/electron/electron-quick-start`

    `cd electron-quick-start`

    `yarn install`

    `yarn start`

2. 自己搭建-8步

    （1）新建目录: `mkdir capture01`

    （2） `cd capture01`

    （3） `npm init`

    （4） `package.json`文件中增加启动命令 `start`。
    ```
        {
            "name": "myelectron",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "start": "electron ."
            },
            "author": "",
            "license": "ISC"
        }
    ```
      (5) 新建一个index.js，作为启动文件。（注意package.json中配置的也是这个文件哦: "main": "index.js"）

    ```
        const { app, BrowserWindow } = require('electron');

        function createWindow () {
            // 创建浏览器窗口
            let win = new BrowserWindow({ width: 800, height: 600 });

            // 然后加载 app 的 index.html.
            win.loadFile('index.html');
        }

        app.on('ready', createWindow);
    ```
      (6) 新建index.html 用于呈现桌面应用页面的。

        ```
               <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Hello World!</title>
            </head>
            <body>
                Hellow, World!
            </body>
            </html>
        ```

    （7）安装依赖(建议用yarn,因为官方也推荐)

        ```
        ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ yarn add electron --save
        (ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ npm install electron --save-dev)
        ```

    （8）启动electron-demo
    
        ```
            yarn start (npm run start)
        ```