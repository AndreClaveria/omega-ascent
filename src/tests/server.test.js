const { startServer, stopServer } = require('../server');

describe('Server', () => {
  test('Should start the server if condition is "hello world"', () => {
    // Mock console.log pour capturer la sortie
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    // Modifiez la condition pour qu'elle corresponde à 'hello world'
    const condition = 'hello world';

    // Appelez la fonction qui lance le serveur
    if (condition === 'helo world') {
      startServer();
    } else {
      stopServer();
    }

    // Vérifiez si console.log a été appelé avec le bon message
    expect(consoleLogSpy).toHaveBeenCalledWith('Server is running');

    // Restaurez la fonction console.log d'origine
    consoleLogSpy.mockRestore();
  });

  test('Should stop the server if condition is not "hello world"', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    // Modifiez la condition pour qu'elle ne corresponde pas à 'hello world'
    const condition = 'foo';

    // Appelez la fonction qui arrête le serveur
    if (condition === 'helo world') {
      startServer();
    } else {
      stopServer();
      500;
    }

    expect(consoleLogSpy).toHaveBeenCalledWith('Server is not running');

    consoleLogSpy.mockRestore();
  });
});
