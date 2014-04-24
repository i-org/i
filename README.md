爱编 I
=======

![i-logo-min](document/i-logo-small.png)

**爱编 Open Source Internationl Programing Language**
--------------------------------------

> 惠,爱也。——《尔雅》


编程语言世界通用化

1. 使用本土语言编程
2. 任何语种代码都自动显示为本土语言代码
3. 等效且沟通无障碍

----

### 我们的目标 Ambition： 

让世界上的每个种族、文化背景的人，都可以使用其最熟悉的名词、术语、语法、工具，快速地写出适合自己需求的代码；而且，这些代码在不同的语言环境下的效果都是无差别的。

I programming language explores to program with any idiom and character system in the world.

With your familiar terminology, you can easily write your code, which is neat translated into any race, any religion, any cultrue background... 

### 实例 Example：

本地语言编程，效果等价：

    > print： “天地玄黄”
    > 曰： “天地玄黄”

内文翻译：

    > print： “hello world”
    > print： “天地玄黄”
    > 曰： “hello world”
    > 曰： “天地玄黄”

### 要达成的具体目标 To be fullfilled：

1. 形成一个各种语种的语法规范
2. 有一个可写简单应用的编程语言
3. 不同语种代码简单相互翻译的机制：只需要手动简单翻译变量名即可。内置函数名自动翻译，特定语言的函数名内名显示（如有翻译方案，则自动翻译）！
4. 计划初期实现中、英、佛、道以及发起者版

### 远期目标 Perspective：

1. 形成一整套覆盖全语种的语法标准，作为其他语言支持国际化编程的参考。
2. 目的在促进现存的各编程语言注重国际化，跨语种的支持。


### 我们需要 We Need Help：

1. 更多的合作者：包括编程人员参与程序实现，各种语言和文化背景精通者参与翻译。

2. 更多的意见建议者

3. 更多的宣传者，学习者

### 背景 Background：
现有编程语言的不足：

1. **学习效率不足**：非母语的编程语言，对学习者非常的不友好！曾见过一个人，母语学习通链（common lisp），仅仅3周看完一本实战，2月变成自己拿手工具。而作为非母语的学习者，则很难有三周能够搞定的，更何况还要应付各种蛋疼的翻译。

2. **编写效率**：

    1. 因为输入设备演进带来的问题：
    这绝大部分是英文字母固有的问题，在小键盘平台上，英文键盘输入困难（字母多，键盘小，易出错——个人曾经用手机写码三天，深受其害，效率还不到平时一成）、手写识别率低，大大影响到输入的效率。
    另外，原有的编程语言没有考虑到新的输入设备，使用了一些不太好适应新输入设备的语法设定，比如python使用缩进，在手写系统里，很难有效区分。

    2. 制约生产力形成：非母语接口名字难于理解，使得对接口不熟悉，影响编写效率。
    比如，我们会经常看到编码的时候，需要不断翻阅英文的接口手册和中英翻译字典，这严重制约了生产效率。

    3. 由于学习效率限制，使得对各种更新，很难保持应有的了解，尤其是非专业领域的人员，从而影响到日常的代码编写。
    也有于学习效率的不足，严重影响使用者接触新领域。

3. **交流障碍**：编程人员之间代码交流，往往需要借用第三方语言——英语，而不是他们自己最熟悉最娴熟的语言，这相当于排斥非英语世界的人，在这个全球文化大交流、大融合的时代，英文中心主义是逆潮流行为。


### 需求：

1. 全民编程时代：编码作为基本现代生活技能，需要更简单、更易掌握的编程语言。
2. 专业领域需要更简单、易掌握的编程语言。
3. 适应更多输入设备的需要

### 设计之初深受链码影响：

1. 快速成型
2. 其基础技术标准完备稳定
3. 需要改进的方面：因为历史原因，用语晦涩，有些规则不统一，比如对矢量和散列表的定位语法不同： ``ELT`` 是 ``矢量名+位置`` ，而 ``GETHASH`` 是 ``位+散列表名`` 。

### 解决方案 Solution：
为了解决上述提到的各种问题和需求，我们的解决方案：

1. 使用母语作为编程语言
2. 统一规则，改进原有语法规则
3. 通过自动翻译，可以不用通过第三方语言，直接实现以语言-语言间的互译。
4. 内建多版本可兼容规则：对同一语种，可用多种版本，比如对于中文，可以有：现代汉语版、文言文版、火星文版、淘宝版、咆哮版、道教版、佛教版等，从而解决本语言现在及将来的历史名词沿革问题。


### 应用方向 Application：

1. 日常简单编程
2. 中介语言，用于沟通其他编程语言
3. 团队项目级快速编码

### 争论 Argument：

以实际成果来证明自己的正确性，而不是靠华美辞藻来证明自己装逼成功！
工作进度就是话语权。


### 组织 Organization： 

尔雅国际化编程语言促进会：一个致力于推动编程语言国际化的组织。

PI18N.org = International Programming Language Stardard Promotion Org


### 注 Notes：

1. 此项目已经设想多年，由于初始设计者本身一直较忙，断断续续积累，直到最近才开立这个项目，让诸位久违了，在此致歉。

2. 此项目尽可能做到说明文字双语甚至多语翻译。



