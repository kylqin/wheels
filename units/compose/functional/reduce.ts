type Middleware = () => void

export const compose = (middlewares: Middleware[]) => {
  return middlewares
  .reverse() // 倒序, 每次的 next 实际上是已经组合的后续的所有 middleware 的组合
  .reduce((composed, middleware) => {
    // composed 即 middleware 的参数 next
    return async () => {
      await middleware(composed)
    }
  }, async () => {}) // async 将同步、异步的函数都转为异步
}

