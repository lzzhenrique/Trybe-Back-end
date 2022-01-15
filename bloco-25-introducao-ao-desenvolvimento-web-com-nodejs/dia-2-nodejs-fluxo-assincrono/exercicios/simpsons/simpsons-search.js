const fs = require('fs').promises;
const simpsonsText = ('simpson.json');

  const readSimpsons = async (filename, charID) => {
    const read =  await fs.readFile(filename);
    const result = JSON.parse(read);
    const chosenSimpson = result.find(({id}) => parseInt(id, 10) === charID);
    
    if(!chosenSimpson) {
      throw new Error('Xabu detectado, seu id nao foi encontrado :)');
    }

    return chosenSimpson;
};

  const main = async () => {
    try {
      const simpsons = await readSimpsons(simpsonsText, 1);
      console.log(simpsons);
    } catch(err) {
      console.log(err.message);
    };
};

main();