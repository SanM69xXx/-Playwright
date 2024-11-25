const { test, expect } = require('@playwright/test');

test.describe('Registro de Usuario en Buggy Cars', () => {
  test('Debería registrar un nuevo usuario con datos válidos', async ({ page }) => {
    // Precondición: Abrir la página de registro
    await page.goto('https://buggy.justtestit.org/');
    await page.click('text=Register');

    // Paso 1: Completar formulario
    await page.fill('#username', 'usuarioTest');
    await page.fill('#firstName', 'saddd');
    await page.fill('#lastName', 'desss');
    await page.fill('#password', 'ClaveSegura1!');
    await page.fill('#confirmPassword', 'ClaveSegura1!');

    // Paso 2: Enviar formulario
    await page.click('button[type="submit"]');

    // Resultado esperado: Usuario registrado exitosamente
    const successMessage = await page.textContent('.alert-success');
    expect(successMessage).toContain('Registration is successful');
  });
});
