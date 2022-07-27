let a = 1 + 2
let b = a + 3
let c = {
  apple: a,
  banana: b,
}

let d = c.apple * 4

function squareOf(n: number) {
  return n * n
}
console.log(squareOf(1))

let l: any = [1]
let n: any = 1
console.log(l + n)

const sa: unique symbol = Symbol('a')
const sb: unique symbol = Symbol('a')
console.log(sa === sb)
