# Avatar

![image-20241116212110315](C:\Users\17871\AppData\Roaming\Typora\typora-user-images\image-20241116212110315.png)

## 属性

| 属性名 | 含义                         | 类型   | 必填 | 默认值 |
| ------ | ---------------------------- | ------ | ---- | ------ |
| url    | 头像图片地址                 | String | 是   | 无     |
| size   | 头像尺寸，宽高相等（单位px） | Number | 否   | 50     |







# Icon

![image-20241116212923101](C:\Users\17871\AppData\Roaming\Typora\typora-user-images\image-20241116212923101.png)

图标组件

使用的图标源来自「阿里巴巴矢量库」

## 属性

| 属性名 | 含义     | 类型   | 必填 | 默认值 |
| ------ | -------- | ------ | ---- | ------ |
| type   | 组件类型 | String | 是   | 无     |

> ​	Icon 的大小继承自父元素，可以通过设置**父元素的 font-size** 来设置 Icon 的大小







# Pager

![image-20241116213026080](C:\Users\17871\AppData\Roaming\Typora\typora-user-images\image-20241116213026080.png)

## 属性

| 属性名        | 含义       | 类型   | 必填 | 默认值 |
| ------------- | ---------- | ------ | ---- | ------ |
| current       | 当前页码   | Number | 否   | 1      |
| total         | 总数据量   | Number | 否   | 0      |
| limit         | 页容量     | Number | 否   | 10     |
| visibleNumber | 可见页码数 | Number | 否   | 10     |

## 事件

| 事件名     | 含义     | 事件参数 | 参数类型 |
| ---------- | -------- | -------- | -------- |
| pageChange | 页码变化 | 新的页码 | Number   |







# Empty

![image-20241118202926356](C:\Users\17871\AppData\Roaming\Typora\typora-user-images\image-20241118202926356.png)

## 属性

| 属性名 | 含义     | 类型   | 必填 | 默认值   |
| ------ | -------- | ------ | ---- | -------- |
| text   | 图中文字 | String | 否   | "无数据" |

> 组件的颜色为 var.less 中的 @gray，图标的 font-size 为 72px
>
> 注意事项：
>
> - 组件为绝对定位，要求父元素为定位元素，才能实现居中效果







# ImageLoader

![alt tag](http://mdrs.yuanjin.tech/img/20201115132049.gif)

## 属性

| 属性名      | 含义                                         | 类型   | 必填 | 默认值 |
| ----------- | -------------------------------------------- | ------ | ---- | ------ |
| src         | 原图片路径                                   | String | 是   | 无     |
| placeholder | 预览图片路径                                 | String | 是   | 无     |
| duration    | 原始图片加载完成后，切换到原始图经过的毫秒数 | Number | 否   | 500    |

## 事件

| 事件名 | 含义                   | 事件参数 | 参数类型 |
| ------ | ---------------------- | -------- | -------- |
| load   | 原始图片加载完成后触发 | 无       | 无       |

> 该组件的宽高与父元素的宽高相同







# Concact

![image-20241118224131935](C:\Users\17871\AppData\Roaming\Typora\typora-user-images\image-20241118224131935.png)

![image-20241118224159647](C:\Users\17871\AppData\Roaming\Typora\typora-user-images\image-20241118224159647.png)

该组件需要横向撑满容器，背景色透明，字体颜色为 @gray

> 1. 如何实现点击弹出QQ对话？
>
> 	设置超链接为：tencent://message/?Menu=yes&uin=要对话的QQ号&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45
>
> 2. 如何实现点击弹出发送邮件？
>
> 	设置超链接为：mailto:邮件地址







# Menu

<img src="http://mdrs.yuanjin.tech/img/20201130195147.png" alt="image-20201130195147086" style="zoom:33%;" />

该组件需要横向撑满容器，背景色透明

每个菜单的信息如下：

> **首页**
>
> 链接地址：/
>
> 选中条件：路径等于 /
>
> **文章**
>
> 链接地址：/blog
>
> 选中条件：路径以`/blog`开头
>
> **关于我**
>
> 链接地址：/about
>
> 选中条件：路径等于`/about`
>
> **项目&效果**
>
> 链接地址：/project
>
> 选中条件：路径等于`/project`
>
> **留言板**
>
> 链接地址：/message
>
> 选中条件：路径等于`/message`







# SiteAside

![image-20241119141753607](C:\Users\17871\AppData\Roaming\Typora\typora-user-images\image-20241119141753607.png)

网站侧边栏

宽度和高度撑满外层容器

横向溢出隐藏，高度溢出会显示滚动条






# Layout

使用示例：

```html
<Layout>
	<template #left>
  	<div>
      左边栏区域，宽度适应内容，溢出隐藏
    </div>
  </template>
  <div>
      主区域，宽度占满剩余空间，溢出隐藏
  </div>
  <template #right>
  	<div>
      右边栏区域，宽度适应内容，溢出隐藏
    </div>
  </template>
</Layout>
```

<img src="http://mdrs.yuanjin.tech/img/20201202154014.png" alt="image-20201202154014492" style="zoom:40%;" />

## 插槽

| 插槽名  | 含义       |
| ------- | ---------- |
| default | 中间主区域 |
| left    | 左边栏     |
| right   | 右边栏     |

