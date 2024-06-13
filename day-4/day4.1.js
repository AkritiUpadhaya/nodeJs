const _= require('lodash')
const items=[1,[2,[3]]]
const newItems= _.flatMapDeep(items)
console.log(newItems)