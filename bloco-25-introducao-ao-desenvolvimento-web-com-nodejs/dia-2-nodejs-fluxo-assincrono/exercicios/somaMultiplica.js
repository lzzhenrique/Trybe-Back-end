const MIN_LIMIT = 50;

const cacl = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject('Informe apenas números');
    };
      const result = (num1 + num2) * num3;
      if(result < MIN_LIMIT) {
        return reject('Valor abaixo do esperado');
      };
      resolve(result);
  });
};

cacl(10,10,10)
.then(resp => console.log(resp))
.catch(err => console.log(err))