const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1, // Configura reintentos en caso de fallos
  use: {
    headless: false, // Cambia a true si quieres que las pruebas corran sin mostrar el navegador
    browserName: 'chromium', // Cambia a 'firefox' o 'webkit' si necesitas probar en otros navegadores
    baseURL: 'https://buggy.justtestit.org/', // Cambia a la URL de tu aplicación si es diferente
    screenshot: 'on', // Captura pantallas de las pruebas
    video: 'retain-on-failure', // Graba video si la prueba falla
  },
});
