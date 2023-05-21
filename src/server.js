function startServer() {
  console.log('Server is running');
}

function stopServer() {
  console.log('Server is not running');
}

const condition = 'hello wrld';

if (condition === 'hello world') {
  startServer();
} else {
  stopServer();
}

module.exports = {
  startServer,
  stopServer,
};
