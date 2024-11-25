const { test, expect } = require('@playwright/test');

test('Registro exitoso en Buggy Cars', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.click('text=Register'); // Selecciona el botón de registro
  await page.fill('#username', 'testuserr'); // Rellena el nombre de usuario
  await page.fill('#firstName', 'Test'); // Rellena el nombre
  await page.fill('#lastName', 'User'); // Rellena el apellido
  await page.fill('#password', 'Test@1234'); // Rellena la contraseña
  await page.fill('#confirmPassword', 'Test@1234'); // Confirma la contraseña
  await page.click('button[type="submit"]'); // Envía el formulario
  await expect(page).toHaveText('Registration is successful'); // Verifica el mensaje de éxito
});
