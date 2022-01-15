const fs = require('fs').promises;
const simpsonsText = ('simpsonsFamily.json');

const addNelsonInFamily = async (filename) => {
  const readFile = await fs.readFile(filename);
  const convertFile = JSON.parse(readFile);
  const addNelson = convertFile.push({id: '5', name: 'Nelson Muntz'});
  const simpsonsFamily = await fs.writeFile('./simpsonsFamily.json', JSON.stringify(convertFile));
  return simpsonsFamily;
};

const main = async () => {
  try {
    const result = await addNelsonInFamily(simpsonsText);
    console.log(result);
  }catch(err) {
    console.log(err);
  };
};

main();