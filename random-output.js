const { getInput } = require('./helper/input')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


const main = async () => {
  const data = await getInput()
  const randomCaDao = data[getRandomInt(0, data.length - 1)]
  console.log(randomCaDao)
}


main().then(() => { })