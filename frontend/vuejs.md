
# Vue.js

## Reactivity

The reactivity or two-way binding of Vue.js is based on `Object.defineProperty` and the setter/getter mechanism of JavaScript.

![](https://image-static.segmentfault.com/288/540/2885406330-5adfe896c01b0_articlex)

Initially， Vue.js will setup getters/setters for items in `$data`, and then collect all the referred item during the rendering. If any of the watched items is changed, it will trigger an update.

## References

  * [面试问题：Vuejs如何实现双向绑定](https://segmentfault.com/a/1190000016884795)
  
 
