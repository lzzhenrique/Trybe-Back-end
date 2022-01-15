const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('./top-secret.txt');

const form = new FormData();
console.log(form);
form.append('file', stream);

const formHeaders = form.getHeaders();
console.log(formHeaders);

axios
  .post('http://localhost:3000/files/upload', form, {
    headers: {
      ...formHeaders
    },
  })
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => {
    console.log(error);
  });

