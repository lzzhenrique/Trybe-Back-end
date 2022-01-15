const fs = require('fs').promises;
const simpsonsText = ('simpson.json');

  const readSimpsons = async (filename) => {
    const read =  await fs.readFile(filename);
    return JSON.parse(read)
};

  const main = async () => {
    try {
      const simpsons = await readSimpsons(simpsonsText);
      simpsons.map(({ id, name}) => {
        console.log(`${id} -> ${name}`)
      })
    } catch(err) {
      console.log(err);
    };
};

main();