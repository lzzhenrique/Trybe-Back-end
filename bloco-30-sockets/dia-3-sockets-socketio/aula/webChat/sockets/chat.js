let count = 0;

module.exports = (io) => io.on('connection', (socket) => {

  socket.broadcast.emit('serverMessage', `Iiiiiirraaaa! Segura que o corno ${socket.id} acabou de se conectar :D`);

  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `Xiii! ${socket.id} acabou de se desconectar! :(`);

    count = 0;
  });

  socket.on('clientMessage', (message) => {
    console.log(`Mensagem ${message}`);

    io.emit('serverMessage', `Luiz ${socket.id}:             ${message}`);
  });
});