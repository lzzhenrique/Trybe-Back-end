const fs = require('fs').promises;

const makeDocs = async () => {
  const files = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const makeTxt = files.map((file, index) => {
    fs.writeFile(`file${index + 1}.txt`, file);
  });

  await Promise.all(makeTxt);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileReading = await Promise.all(
    fileNames.map(file => fs.readFile(file, 'utf-8')) 
  );

  const allContent = fileReading.join(' ');

  fs.writeFile('fileAll.txt', allContent);
};

const main = async () => {
  try {
    const result = await makeDocs();
    console.log(result);
  }catch(err) {
    console.log(err.message);
  };
};

main();