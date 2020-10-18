type Middleware = () => void

export const compose = (middlewares: Middleware[]) => {
  return middlewares
  .reduceRight((composed, middleware) => {
    // 每次的 next 实际上是已经组合的后续的所有 middleware 的组合
    // composed 即 middleware 的参数 next
    return () => {
      return Promise.resolve(middleware(composed))
    }
  }, () => Promise.resolve()) // async 将同步、异步的函数都转为异步
}

// Promise 可以使用 async 代替, 见 functional/reduce.ts

