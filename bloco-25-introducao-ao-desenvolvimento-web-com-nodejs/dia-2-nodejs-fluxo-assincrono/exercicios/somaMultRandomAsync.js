const MIN_LIMIT = 50;

const cacl = (num1, num2, num3) => {

  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject('Informe apenas números');
    };
    
      const result = (num1 + num2) * num3;

      result < MIN_LIMIT 
      ? reject('Valor abaixo do esperado') 
      : resolve(result)
  });
};

const randomGenerator = async () => {
  let RNG = [];
  for (let index = 0; index <= 2; index += 1) {
    RNG.push((Math.floor(Math.random() * 1 + 1)));
  };
  
  try {
    const result = await cacl(...RNG);
    console.log(result);
  } catch(err) {
    console.log(err)
  };
};

randomGenerator();