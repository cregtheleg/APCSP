function setup() {
  let num = -1
  while (num !== 6) {
    num = Math.floor(random(7))
    console.log(`Number is: ${num}`)
  }
  console.log('Done.')
}
