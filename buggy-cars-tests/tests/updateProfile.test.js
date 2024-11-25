test.describe('Actualizar Perfil de Usuario', () => {
    test('Debería permitir al usuario actualizar sus datos personales', async ({ page }) => {
      // Precondición: Iniciar sesión
      await page.goto('https://buggy.justtestit.org/');
      await page.fill('#username', 'Sam');
      await page.fill('#password', 'RCcj6S.DeTSb.A');
      await page.click('button[type="submit"]');
  
      // Paso 1: Ir a la sección de perfil
      await page.click('text=Profile');
  
      // Paso 2: Actualizar datos
      await page.fill('#firstName', 'NuevoNombre');
      await page.fill('#lastName', 'NuevoApellido');
      await page.fill('#address', 'Nueva Dirección');
      await page.fill('#phone', '1234567890');
      await page.fill('#hobby', 'Correr');
      await page.click('button[type="submit"]');
  
      // Resultado esperado: Perfil actualizado correctamente
      const successMessage = await page.textContent('.alert-success');
      expect(successMessage).toContain('Profile updated successfully');
    });
  });
  