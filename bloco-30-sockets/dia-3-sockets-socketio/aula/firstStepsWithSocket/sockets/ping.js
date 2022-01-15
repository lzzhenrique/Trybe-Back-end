let count = 0;

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Hello fellow user!')
    socket.id = count+=1;

    socket.emit('ola', `Luiz${socket.id}!!! Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo e cafezin :)`);

    socket.on('ping', () => {
      console.log(`Luiz${socket.id} emitiu um ping!!`);
      io.emit('pong', `Luiz${socket.id} enviou um ping!`);
    });
  })

  io.on('end', () => {
    count = 0;
  })
};