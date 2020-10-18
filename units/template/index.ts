export const compile = (template: string) => {
  // 1. {{ exp }} 变为 ${exp}
  template = template.replace(/\{\{([^}]+)\}\}/g, (_:any, exp: string) => {
    exp = exp.trim()
    return '${' + exp + '}'
  })


  // 2. 使用 with(context) 语法, 构造函数体
  let head = 'let str = "";\n with(obj){\n str+=`'

  // 3. {% exp %} 变为 `
  // exp
  // str+=`
  // {% exp-start %} 和 {% exp-end %} 是成对出现的，它们构成一个完整的 循环、判断等表达式。
  // 在处理这种表达式时，使用 str += ` 的方式连接后面的内容
  template = template.replace(/\{\%([^%]+)\%\}/g, (_: any, exp: string) => {
    return '`\n' + exp + '\nstr+=`'
  })

  // 4. 尾部
  let tail = '`}\n return str;'

  // console.log(`==========render=========`)
  // console.log(head + template + tail);

  const render = new Function('obj', head + template + tail) as (context: { [key: string]: any }) => string
  // return ctx => { console.log('"' + render(ctx) + '"'); return render(ctx) }
  return render
}
