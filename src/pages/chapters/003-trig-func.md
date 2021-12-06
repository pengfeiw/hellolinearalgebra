---
title: 三角函数
description: 介绍计算机图形学中常用的三角函数公式。
keywords: 三角函数,计算机图形学,CG,几何学,线性代数
---

**三角函数（trig functions）**，大家应该都不会陌生，想到三角函数，脑子里就会出现`sin`、`cos`、`tan`等词语，和一系列难以记忆的公式。虽然严格来说三角函数并不属线性代数这门学科，但是它在图形学中出现的频次实在太高了，所以不得不将其在这里介绍一下（写到这时，我正在想《你好，线性代数》这门教程的名字是否合适，不过暂时就这样吧）。

## 一. 基本三角函数

有一个直角三角形，如下。

![三角函数](/images/003-1.jpg)

三角形的三个角为A、B、C，直角边长为x和y，斜边长为l。

1. 正弦函数（sine ）

正弦函数，等于与角对应的直角边长除以斜边长，以角A为例。

> <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>sin</mi><mfenced><mi>A</mi></mfenced><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mfrac><mi>x</mi><mi>l</mi></mfrac></math>

2. 余弦函数（cosine）

余弦函数，等于与角相邻的直角边长除以斜边长，以角A为例。

> <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>cos</mi><mfenced><mi>A</mi></mfenced><mo>&#xa0;</mo><mo>=</mo><mo>&#xa0;</mo><mfrac><mi>y</mi><mi>l</mi></mfrac></math>

3. 正切函数（tangent）

正切函数，等于与角对应的直角边长除以与角相邻的直角边长，以角A为例。

> <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>tan</mi><mfenced><mi>A</mi></mfenced><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mfrac><mi>x</mi><mi>y</mi></mfrac></math>

4. 正割函数（secant）

正割函数，与余弦函数相反，等于斜边长除以与角相邻的直角边长。

> <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>sec</mi><mfenced><mi>A</mi></mfenced><mo>&#xa0;</mo><mo>=</mo><mo>&#xa0;</mo><mfrac><mi>l</mi><mi>x</mi></mfrac><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mfrac><mn>1</mn><mrow><mi>cos</mi><mo>(</mo><mi>A</mi><mo>)</mo></mrow></mfrac></math>

5. 余割函数（cosecant）

余割函数，与正弦函数相反，等于斜边长除以与角对应的直角边长。

> <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>csc</mi><mo>(</mo><mi mathvariant="normal">A</mi><mo>)</mo><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mfrac><mi>l</mi><mi>y</mi></mfrac><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mfrac><mn>1</mn><mrow><mi>sin</mi><mrow><mo>(</mo><mi>A</mi><mo>)</mo></mrow></mrow></mfrac></math>

6. 余切函数（cotangent）

余切函数，与正切函数相反，等于与角相邻的直角边长除以与角对应的直角边长。

> <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>cot</mi><mfenced><mi>A</mi></mfenced><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mfrac><mn>1</mn><mrow><mi>tan</mi><mfenced><mi>A</mi></mfenced></mrow></mfrac></math>

## 二. 延伸公式

我们用单位圆来推导三角函数，单位圆就是半径为1的圆。如图有一个单位圆，原点为`O`，半径为1，有一条半径OA，A点的坐标为`(x, y)`，OA与x轴的夹角为<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3b8;</mi></math>。

![单位圆](/images/003-2.jpg)

1. 平方公式
我们知道**勾股定理**。

> 在一个直角三角形中，两个直角边的平方和等于斜边长的平方。

所以将勾股定理带入到上图的单位圆中，得到：
> <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>&#x3c7;</mi><mn>2</mn></msup><mo>&#xA0;</mo><mo>+</mo><mo>&#xA0;</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mn>1</mn></math>

因为，斜边长为1，所以有以下等式成立。

> <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>cos</mi><mfenced><mi mathvariant="normal">&#x3b8;</mi></mfenced><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mi mathvariant="script">x</mi></math>
<br />
<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>sin</mi><mfenced><mi mathvariant="normal">&#x3b8;</mi></mfenced><mo>&#xa0;</mo><mo>=</mo><mo>&#xa0;</mo><mi mathvariant="normal">y</mi></math>

代入勾股定理，可以得到以下公式。

> <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>sin</mi><mn>2</mn></msup><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo><mo>&#xA0;</mo><mo>+</mo><mo>&#xA0;</mo><mi>c</mi><mi>o</mi><msup><mi>s</mi><mn>2</mn></msup><mrow><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo></mrow><mo>&#xa0;</mo><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mn>1</mn></math>

通过同样的代入方式，我们也可以得到其他平方公式。

> <math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>&#xA0;</mo><mo>+</mo><mo>&#xA0;</mo><mi>t</mi><mi>a</mi><msup><mi>n</mi><mn>2</mn></msup><mrow><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo></mrow><mo>&#xa0;</mo><mo>=</mo><mo>&#xA0;</mo><mi>s</mi><mi>e</mi><msup><mi>c</mi><mn>2</mn></msup><mrow><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo></mrow><mo>&#xa0;</mo></math>
<br />
<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>&#xa0;</mo><mo>+</mo><mo>&#xa0;</mo><msup><mi mathvariant="italic">cot</mi><mn>2</mn></msup><mrow><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo></mrow><mo>&#xa0;</mo><mo>=</mo><mo>&#xa0;</mo><mi mathvariant="normal">c</mi><mi>s</mi><msup><mi>c</mi><mn>2</mn></msup><mrow><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo></mrow><mo>&#xa0;</mo></math>

2. 对称公式

根据圆的对称性，有以下等式成立。

> <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>sin</mi><mo>(</mo><mo>-</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mo>-</mo><mi>s</mi><mi>i</mi><mi>n</mi><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo></math>
<br />
<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>cos</mi><mrow><mo>(</mo><mrow><mo>-</mo><mi mathvariant="normal">&#x3b8;</mi></mrow><mo>)</mo></mrow><mo>&#xa0;</mo><mo>=</mo><mo>&#xa0;</mo><mi mathvariant="italic">cos</mi><mrow><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo></mrow></math>
<br />
<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>tan</mi><mrow><mo>(</mo><mrow><mo>-</mo><mi mathvariant="normal">&#x3b8;</mi></mrow><mo>)</mo></mrow><mo>&#xa0;</mo><mo>=</mo><mo>&#xa0;</mo><mo>-</mo><mi mathvariant="italic">tan</mi><mrow><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo></mrow></math>
<br />
<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>sin</mi><mrow><mo>(</mo><mrow><mfrac><mi mathvariant="normal">&#x3c0;</mi><mn>2</mn></mfrac><mo>&#xA0;</mo><mo>-</mo><mo>&#xA0;</mo><mi mathvariant="normal">&#x3b8;</mi></mrow><mo>)</mo></mrow><mo>&#xa0;</mo><mo>=</mo><mo>&#xa0;</mo><mi>cos</mi><mrow><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo></mrow></math>
<br />
<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>cos</mi><mrow><mo>(</mo><mrow><mfrac><mi mathvariant="normal">&#x3c0;</mi><mn>2</mn></mfrac><mo>&#xa0;</mo><mo>-</mo><mo>&#xa0;</mo><mi mathvariant="normal">&#x3b8;</mi></mrow><mo>)</mo></mrow><mo>&#xa0;</mo><mo>=</mo><mo>&#xa0;</mo><mi>sin</mi><mrow><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo></mrow></math>
<br />
<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>tan</mi><mrow><mo>(</mo><mrow><mfrac><mi mathvariant="normal">&#x3c0;</mi><mn>2</mn></mfrac><mo>&#xa0;</mo><mo>-</mo><mo>&#xa0;</mo><mi mathvariant="normal">&#x3b8;</mi></mrow><mo>)</mo></mrow><mo>&#xa0;</mo><mo>=</mo><mo>&#xa0;</mo><mi>cot</mi><mrow><mo>(</mo><mi mathvariant="normal">&#x3b8;</mi><mo>)</mo></mrow></math>

3. 和差公式

下面的恒等式涉及对两个角的和或差取三角函数:

![三角函数和差公式](/images/003-3.jpg)

4. 二倍角公式

下面的公式可以将二倍角转换为单倍角。

![三角函数和差公式](/images/003-4.jpg)

5. 正弦定理和余弦定理

在已知边长和角度时，求解另一个未知边长或者角度时，可以使用正弦定理和余弦定理。

![正弦定理和余弦定理](/images/003-5.jpg)

![正弦定理和余弦定理](/images/003-6.jpg)
