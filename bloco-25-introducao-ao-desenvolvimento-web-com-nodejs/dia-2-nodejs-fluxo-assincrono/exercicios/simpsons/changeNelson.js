const fs = require('fs').promises;
const simpsonsText = ('simpsonsFamily.json');

const addNelsonInFamily = async (filename) => {
  const readFile = await fs.readFile(filename);
  const convertFile = JSON.parse(readFile);
  const removeNelson = convertFile.filter(({id}) => parseInt(id, 10) !== 5 );
  const addMaggie = removeNelson.push({id: '5', name: 'Maggie Simpson'});
  const simpsonsFamily = await fs.writeFile('./simpsonsFamily.json', JSON.stringify(removeNelson));
  return true;
};

const main = async () => {
  try {
    const result = await addNelsonInFamily(simpsonsText);
    console.log(result);
  }catch(err) {
    console.log(err.message);
  };
};

main();