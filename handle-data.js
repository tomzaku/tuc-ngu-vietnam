const { getInput } = require('./helper/input')

const main = async () => {
  const data = await getInput()
  const removedUnusedLines = data.filter(item => item.length > 10)
  const cleanedCaDaos = removedUnusedLines.map((line) => {
    return line.match(/(\d*)(\.*)( *)(.*)/)[4]
  })
  cleanedCaDaos.forEach(line => console.log(line))
}

main().then(() => { })