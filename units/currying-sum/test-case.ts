// const viewLog = false //出现问题，设置为true可追踪函数和输出
export const test = sum => {
  it('空调用', async () => {
    expect(sum()).toBe(0)
  })

  it('一次调用', async () => {
    expect(sum(10)()).toBe(10)
    expect(sum(10, 20)()).toBe(30)
  })

  it('多次调用', async () => {
    expect(sum(1)(2)(3)()).toBe(6)
    expect(sum(1)(2, 3)(4, 5)()).toBe(15)
  })
}
