const fs = require('fs').promises;
const simpsonsText = ('simpson.json');

const deleteSimpson = async (filename) => {
  const read =  await fs.readFile(filename);
  const result = JSON.parse(read);
  const chosenSimpsons = result.filter(({id}) =>  parseInt(id, 10) !== 6 && parseInt(id, 10) !== 10);
  const reWriteFile = await fs.writeFile(filename, JSON.stringify(chosenSimpsons));
  return read.toString();
}


const main = async () => {
  try {
    const result = await deleteSimpson(simpsonsText);
    console.log(result)
  }catch(err) {
    console.log(err)
  }
}

main();