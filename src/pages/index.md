---
title: 你好，线性代数
description: 这是一本关于入门计算机图形学的线性代数基础教程。主要介绍向量、行列式和矩阵的几何意义，例如向量的点积和叉积，矩阵的变换，行列式的意义。如果你对图形学感兴趣，却缺乏一些数学知识，又没有时间去学习其他复杂的线性代数中繁杂的计算，那么你来对地方了，这本书应该非常适合你。
---

import CoordinateModel from "src/components/article/index/coordinate";
import {GithubLink} from "src/components/githubLink";
import {ColorModeSwitch} from "src/components/colorModeSwitch";
import {AccentPicker} from "src/components/accent";

# 你好，线性代数🖐

这是一本关于入门计算机图形学的线性代数基础教程。主要介绍向量、行列式和矩阵的几何意义，如果你对图形学感兴趣，却缺乏一些数学知识，又没有时间去学习其他复杂的线性代数中繁杂的计算，那么你来对地方了，这本书应该非常适合你。

## 介绍

数学是一门让人头大的学科，所以为了提起大家的兴趣，课程中我会使用[ThreeJS](https://threejs.org/)构建demo展示给大家，类似下面的坐标系模型。

可以通过鼠标操作模型（触屏设备可以通过手指操作），左键-旋转，右键-平移，滚轮-缩放。
<CoordinateModel />

*本书中所有坐标系中的红色代表X轴，绿色代表Y轴，蓝色代表Z轴*

本书的内容包括：
- 向量和向量的运算
- 行列式和行列式的运算
- 矩阵和矩阵的运算
- 向量、行列式和矩阵的关系
- 矩阵与线性方程的关系
- 线性变换

所以读完本教程，你应该能了解到以上知识。本教程文档及网站代码开源。文档采用知识共享4.0许可证。除商业用途外，你可以自由的使用本站资源，不需要额外支付任何费用和通知我，前提是必须保持署名（“作者：王鹏飞 原文地址：[https://pengfeiw.github.io/hellolinearalgebra](https://pengfeiw.github.io/hellolinearalgebra)”）和采用相同方式共享。


## 使用方法

项目开源，可以点击右上角github图标（<GithubLink />）查看源代码，如果你支持本项目，欢迎star。

本教程暂时关闭留言板功能，如果你要留言可以至我的个人网站给我留言也可以至github提交issue或者pr。

网站右上角有颜色切换按钮（<AccentPicker />和<ColorModeSwitch />），支持主题色切换和黑夜白天模式，可以自行选择适合自己的阅读模式。

## 关于作者

梦想有一天能写一个牛逼的软件的程序员。对图形学比较感兴趣，目前在钻研web前端。
