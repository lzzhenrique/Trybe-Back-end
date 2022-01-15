const approveNumb = (numb) => {
  if(numb > 0) {
    return 'Positivo'
  } else if (numb < 0) {
    return 'Negativo'
  } else {
    return 'Neutro'
  }
};

approveNumb();

module.exports = approveNumb;