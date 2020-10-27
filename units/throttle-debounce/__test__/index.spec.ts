import { throttle, debounce } from '../'

describe('add', () => {
  it('节流throttle', (done) => {
    // 定义一个 Mock 函数
    const mockFn = jest.fn()

    // 封装为节流函数
    const fn = throttle(mockFn, 10)

    fn(1)
    fn(2)

    setTimeout(() => {
      const calls = mockFn.mock.calls

      // 断言 mock 函数只调用了一次
      expect(calls.length).toBe(1)

      // 并且是第一次, 根据参数
      expect(calls[0][0]).toBe(1)

      done()
    }, 50)
  })

  it('防抖debounce', (done) => {
    const mockFn = jest.fn()

    // 封装为防抖函数
    const fn = debounce(mockFn, 10)

    fn(1)
    fn(2)

    setTimeout(() => {
      const calls = mockFn.mock.calls

      // 断言 mock 函数只调用了一次
      expect(calls.length).toBe(1)

      // 并且是最后一次，根据参数
      expect(calls[0][0]).toBe(2)

      done()
    }, 50);
  })
})
