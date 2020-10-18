import { test  } from '../test-case';

describe('currying-sum', () => {
  describe('Currying Sum with recursive', () => {
    const { sum } = require('../recursive')
    test(sum)
  })

  describe('Currying Sum with proxy', () => {
    const { sum } = require('../proxy')
    test(sum)
  })
})
