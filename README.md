# Arduino 快速入门

> 本项目源于小学期创新实验。旨在辅助学生学习 [Arduino](https://github.com/arduino/Arduino)。

## **:hand:Have a try**

- 微信搜索 `Arduino快速入门`
- 或扫描以下小程序码

![Arduino_mp_code.jpg](https://pic.f00bar.cn/images/2020/05/27/Arduino_mp_code.jpg)

## Have a look

![home page](https://pic.f00bar.cn/images/2020/05/27/Arduino_.jpg)![basic page](https://pic.f00bar.cn/images/2020/05/27/Arduino_7d86a.jpg)

## 开发

下载 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)，导入本仓库。

## 项目结构

```
.
├── README.md
├── app.js 
├── app.json
├── app.wxss
├── components
├── config.js // 配置后端接口
├── images
├── pages
├── project.config.json
├── sitemap.json
├── template
├── towxml
├── utils
└── vendor
```

## 技术相关

- [towxml](https://github.com/sbfkcel/towxml)

  微信小程序HTML、Markdown渲染库。将 markdown 格式数据转化为 wxml。

- [wafer2-client-sdk](https://github.com/tencentyun/wafer2-client-sdk)

  微信小程序客户端腾讯云增强 SDK。与后端交互使用，包括 HTTP 请求及 WebSocket 连接。