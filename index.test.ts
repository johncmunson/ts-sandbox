import { add } from './index'

describe('add', () => {
  it('computes the sum of two numbers and returns the result', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
