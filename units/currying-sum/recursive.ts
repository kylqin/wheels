// Note: 函数是一等对象
// 1. 函数做参数
// 2. 返回函数
// 2.x 函数调用自身（递归）
// 2.x 函数返回自身

export const sum = (...args) => {
  if (!args.length) {
    return 0
  }

  let result = args.reduce((acc, n) => acc + n)

  return function realSum (...args) {
    if (args.length) {
      result += args.reduce((acc, n) => acc + n)
      // 在函数中返回自己
      return realSum
    } else {
      return result
    }
  }
}

// ##################################################

// Use arguments and arguments.callee
// export function sum () {
//   if (!arguments.length) {
//     return 0
//   }

//   let result = [].slice.apply(arguments).reduce((acc, n) => acc + n)

//   return function realSum () {
//     if (arguments.length) {
//       result += [].slice.apply(arguments).reduce((acc, n) => acc + n)
//       return arguments.callee
//     } else {
//       return result
//     }
//   }
// }
