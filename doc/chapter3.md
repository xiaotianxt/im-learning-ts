# Chapter 3 类型全解

### 3.2.10 数组

作者给出了[若干例子](../src/ch3.2.10.ts). 特别关注 g 因为初始化并没有声明类型，直到离开块作用域之后才会确定一个类型。


### 3.2.11 只读数组和元组

对 readonly 类型数组使用 concat, map, filter 等方法生成的新数组并不会是 readonly，除非显示声明。

### 3.2.12 null、undefined、void 和 never

void 和 never 都是函数返回类型。void 类比 c，never 指函数永远不会返回。never 类型可以认为是任何其他类型的子类型。

### 3.2.13 枚举

反向映射（反向查找）：TypeScript 支持通过值访问，也支持通过键访问，二者等价。如：

```TypeScript
enum Language = {
  English,
  Chinese = 100,
  Japanese
}

const lan1: Language = Language.English
const lan2: Language = Language[0]
assert(lan1 === lan2)
```

但是 const enum 并不支持反向查找，行为与常规的 JavaScript 对象很像（也就是只能使用键查找）。

const enum 不会生成任何 JavaScript 代码，而是在调用的时候将枚举成员所在的位置内插对应的值，因此如果代码经过迭代修改了 const enum 定义，很可能会导致安全问题（同一个值代表不同的枚举成员）。

作者并不建议使用 const enum，甚至是 enum。如果使用 enum，建议使用字符串值。