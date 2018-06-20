const io = require('socket.io-client');
const socketClient = io.connect('http://localhost:3001'); // Specify port if your express server is not using default port 80

socketClient.on('connect', () => {
  socketClient.emit('npmStop');
    process.exit(0);
});