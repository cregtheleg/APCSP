let s
let string = 'Will is a Little Weird    '

// Check Length
console.log(string.length)

// Conversion
let num = 10
num = Number(num)
console.log(typeof num)

num = num.toString()
console.log(typeof num)

console.log(num)

// Searching
s = string.search('l')
console.log(s)

s = string.startsWith('Z')
console.log(s)

s = string.includes('L')
console.log(s)

// Modifying
s = string.toLowerCase()
console.log(s)

s = string.toUpperCase()
console.log(s)

s = string.concat(' and Craigor is Superior')
console.log(s)

s = string.slice(3, 18)
console.log(s)

s = string.trim()
console.log(s)