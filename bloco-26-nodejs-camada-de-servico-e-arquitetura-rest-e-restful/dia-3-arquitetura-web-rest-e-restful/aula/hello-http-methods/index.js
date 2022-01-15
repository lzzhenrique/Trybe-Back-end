const axios = require('axios').default;
const API_TOKEN = 'tortaunnnnnpraesquerda275811545484';

const headers = { Authorization: API_TOKEN };

const body = {
  name: 'tryber',
  email: 'tryber@betrybe.com',
  password: 'trybe',
}

axios.post('https://postman-echo.com/post?param1=teste', body, { headers })
.then((response) => {
  return response.data;
})

.then((data) => {
  console.log(data);
})

.catch((errorOrResponse) => {
  if(errorOrResponse.status) {
    return console.error(`Request failed with status ${errorOrResponse.status}`)
  };

  console.error(errorOrResponse);

});