// proxy
export function sum(...args) {
  if (!args.length) {
    return 0
  }

  let result = args.reduce((acc, n) => acc + n)

  const proxy = new Proxy(() => {}, {
    apply(receiver, ctx, args) {
      if (args.length) {
        result += args.reduce((acc, n) => acc + n)
        return proxy
      }
      return result
    },
  })
  return proxy
}

// ##################################################

// // sum
// const sumHandler = {
//   result: 0,
//   apply(target, thisBinding, nums) {
//     // console.log(target, thisBinding, this)
//     if (nums.length > 0) {
//       this.result += target(nums)
//       return thisBinding.bind(thisBinding)
//     } else {
//       const result = this.result
//       this.result = 0
//       return result
//     }
//   }
// }

// function sum_(nums) {
//   return nums.reduce((acc, num) => acc + num, 0)
// }

// const sumProxy = new Proxy(sum_, sumHandler)

// export const sum = sumProxy.bind(sumProxy)
