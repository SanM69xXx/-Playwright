test.describe('Votar por Autos', () => {
    test('Debería permitir votar por un auto y dejar un comentario', async ({ page }) => {
      // Precondición: Iniciar sesión
      await page.goto('https://buggy.justtestit.org/');
      await page.fill('#username', 'usuarioTest');
      await page.fill('#password', 'ClaveSegura1!');
      await page.click('button[type="submit"]');
  
      // Paso 1: Seleccionar un auto
      await page.click('text=Popular Make');
      await page.click('text=Model XYZ');
  
      // Paso 2: Votar y dejar comentario
      await page.fill('#comment', 'Auto excelente');
      await page.click('button[type="vote"]');
  
      // Resultado esperado: Voto registrado con éxito
      const successMessage = await page.textContent('.alert-success');
      expect(successMessage).toContain('Thank you for your vote');
    });
  });
  