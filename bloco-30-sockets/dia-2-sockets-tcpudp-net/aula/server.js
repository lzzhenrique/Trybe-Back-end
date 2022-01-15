const net = require('net');

const server = net.createServer((socket) => {
  console.log('Um cliente conectou');

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });

  socket.on('data', (data) =>{
    console.log(data);
    console.log(`O cliente disse ${data.toString()}`);
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080!');
});