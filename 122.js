let a=[1,2,3,3,3]
let b=[1,2,3,45]
let missing=b.filter((e)=> !a.includes(e))

console.log(missing)

