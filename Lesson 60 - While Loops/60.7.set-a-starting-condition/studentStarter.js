function setup() {
  let num = -1

  while (num !== 6) {
    console.log('Nope. Not 6. Roll again.')
    num = Math.floor(random(7))
    console.log(`New number is ${num}`)
  }
  console.log('Done.')
}
