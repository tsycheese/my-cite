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



