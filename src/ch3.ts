const main = () => {
  let a = [1, 2, 3] // a: number[]

  var b = ['a', 'b'] // b: string[]
  let c: string[] = ['a', 'b'] // c: string[]

  let d = [1, 'a'] // d: (string | number)[]
  const e = [2, 'b'] // e: (string | number)[]

  let f = ['red'] // f: string[] (We have initialized the array with a string).
  f.push('blue') // f: string[]
  f.push(true) // Argument of type 'boolean' is not assignable to parameter of type 'string'.

  let g = [] // g: any[] (We have not initialized the array with element).
  g.push(1) // g: any[]
  g.push('red') // g: any[]

  let h: number[] = [] // h: number[]
  h.push(1) // h: number[]
  h.push(2) // h: number[]

  function buildArray() {
    let a = [] // a: any[]

    a.push(1) // a: any[]
    a.push('a') // a: any[]
    return a // a: number[] (Typescript finally deduce the type of the array)
  }

  let arr = buildArray()
  arr.push(true) // Argument of type 'boolean' is not assignable to parameter of type 'number'.

  let readOnlyArr: readonly number[] = [1, 2, 3]
  let newArr = readOnlyArr.concat([4]) // this is not readonly.

  const neverReturn: () => never = () => {
    throw new Error('Error')
  }

  const neverReturn2: () => never = () => {
    while (true) {
      // ...
    }
  }

  const returnVoid: () => void = () => {
    let a = 1
    let b = 2
  }
}
