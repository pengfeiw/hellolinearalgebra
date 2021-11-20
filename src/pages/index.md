---
title: 你好，线性代数🖐
description: 这是一本关于入门计算机图形学的线性代数基础教程。主要介绍向量、行列式和矩阵的几何意义，例如向量的点积和叉积，矩阵的变换，行列式的意义。如果你对图形学感兴趣，却缺乏一些数学知识，又没有时间去学习其他复杂的线性代数中繁杂的计算，那么你来对地方了，这本书应该非常适合你。
---

import CoordinateModel from "src/components/article/index/coordinate3d";
import {GithubLink} from "src/components/githubLink";
import {ColorModeSwitch} from "src/components/colorModeSwitch";
import {AccentPicker} from "src/components/accent";
import CoordinateModel2d from "src/components/article/index/coordinate2d";

## 介绍

线性代数作为数学的一个分支，在很多领域都发挥着重要作用，例如以下几个领域。

- 计算机科学（包括但不限于图形学）
- 物理工程
- 机械工程
- 电子工程
- 统计学

所以从事这些专业的朋友，必须要掌握好线性代数。这个教程的目的是介绍线性代数中的几何意义。

很多学习线性代数的朋友，对线性代数的理解十分浅显，只会套用公式进行向量、行列式、矩阵的计算和解线性方程组，但是不能理解其中包含的更深层次的意义，而这个教程向大家介绍的就是线性代数在[计算机图形学](https://baike.baidu.com/item/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9B%BE%E5%BD%A2%E5%AD%A6/279486)中的几何意义，它不会向大家介绍大学课本中关于线性代数那些复杂的计算，因为这些计算都可以通过工具进行计算，我认为最重要的是理解它所代表的意义。例如我在编程时，计算向量和矩阵会利用[glm](https://github.com/g-truc/glm)和[glMatrix](https://glmatrix.net/)这两个数学工具库帮我处理那些复杂的计算，而我所要做的就是理解其中的几何意义，选择合适的[函数](https://www.makeuseof.com/what-is-a-function-programming/)去处理图形。

数学是一门很难的学科，学习数学相关的知识时，能专注学习，并且能理解它是一件比较困难的事，为了提起大家的兴趣，课程中某些示例我会使用[ThreeJS](https://threejs.org/)和[canvas2d](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)构建demo展示给大家，例如下面的使用threejs绘制的坐标系模型，希望这样可以激发大家的学习兴趣。

你可以通过鼠标操作模型（触屏设备可以通过手指操作），左键-旋转，右键-平移，滚轮-缩放。
<CoordinateModel />
<CoordinateModel2d />
*本书中所有坐标系中的红色代表X轴，绿色代表Y轴，蓝色代表Z轴*

本教程文档及网站代码开源。文档采用知识共享4.0许可证。除商业用途外，你可以自由的使用本站资源，不需要额外支付任何费用和通知我，前提是必须保持署名（“作者：王鹏飞 原文地址：[https://pengfeiw.github.io/hellolinearalgebra](https://pengfeiw.github.io/hellolinearalgebra)”）和采用相同方式共享。


## 使用方法

项目开源，可以点击右上角github图标（<GithubLink />）查看源代码，如果你支持本项目，欢迎fork、star。

本教程暂时关闭留言板功能，如果你要留言可以至我的个人网站给我留言也可以至github提交issue或者pr。

网站右上角有颜色切换按钮（<AccentPicker />和<ColorModeSwitch />），支持主题色切换和黑夜白天模式，可以自行选择适合自己的阅读模式。

## 关于网站

如果你对本网站搭建的细节感兴趣，请点击[这里](https://www.pengfeixc.com/blogs/website/site-opensource)。

## 联系

Eamil: <a href="mailto:pengfeixc@sian.com">pengfeixc@sina.com</a>
