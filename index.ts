import dotenv from 'dotenv'

dotenv.config()

export const add = (a: number, b: number) => a + b

console.log(add(1, 2))
