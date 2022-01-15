const fs = require('fs').promises;
const simpsonsText = ('simpson.json');

const familySimpson = async (filename) => {
  const readFile = await fs.readFile(filename);
  const convertFile = JSON.parse(readFile);
  const findFamily = convertFile.filter((simpso) => [1, 2, 3, 4].includes(parseInt(simpso.id)));
  const simpsonsFamily = await fs.writeFile('./simpsonsFamily.json', JSON.stringify(findFamily));
  return simpsonsFamily;
};

const main = async () => {
  try {
    const result = await familySimpson(simpsonsText);
    console.log(result);
  }catch(err) {
    console.log(err);
  };
};

main();