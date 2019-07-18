import  { say, sum } from './lib/utils'

say('ok')

console.log('sum 1  2 3 4 :', sum(1,2,3,4))

let a = [1,2,3]
if (Array.isArray(a)) {
  consolog('yes')
}

function *gen() {
  yield 1
}
let b = gen()
for (let val of b) {
  console.log(val)
}