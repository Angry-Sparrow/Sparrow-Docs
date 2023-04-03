---
slug: react setState
title: react setState & re-render
authors: [Angry-Sparrow]
tags: [React, setState]
---

---info
- 将了解到：
    - setState 更新机制；
    - state update & render 之间的关系；
    - 如何却别使用 setState(newState) & setState(function)
    - how objects update
---

**A state variable’s value never changes within a render（状态变量的值在渲染中从不更改）**，even if its event handler's code is asynchronous.

## [Recap](https://beta.reactjs.org/learn/state-as-a-snapshot#recap)

React stores state outside of your component, as if on a shelf.


After the event handler completes, React will trigger a re-render. During the re-render, React will process the queue. Updater functions run during rendering, so updater functions must be pure and only return the result. Don’t try to set state from inside of them or run other side effects. In Strict Mode, React will run each updater function twice (but discard the second result) to help you find mistakes.


## Update Objects

**Treat state as read-only**

## Handle Nested Object
npm: use-immer

## Update Array

However, even if you copy an array, you can’t mutate existing items inside of it directly. This is because copying is shallow—the new array will contain the same items as the original one. So if you modify an object inside the copied array, you are mutating the existing state. For example, code like this is a problem.

```js
const nextList = [...list];
nextList[0].seen = true; // Problem: mutates list[0]
setList(nextList);
```

[how to avoid](https://beta.reactjs.org/learn/updating-arrays-in-state#updating-objects-inside-arrays)

**reasons:**
数组中的每个对象元素都是单独的值，数组 index 指向对应的元素值。
因此在更新数组中的[index]嵌套对象时，实际更新的是指向该index上的元素值。
所以需要当心另一不期望修改的数组的同一元素也被更改。
有点类似于 C 指针的概念。

善用 map

**Keywords:** batching
