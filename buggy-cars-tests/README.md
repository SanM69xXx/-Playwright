Buggy Cars Testing Project
Este proyecto contiene pruebas automatizadas realizadas con el framework Playwright para la página Buggy Cars Rating. El objetivo es validar funcionalidades clave de la aplicación a través de historias de usuario específicas.

Estructura del Proyecto
perl

buggy-cars-tests/
├── tests/ # Carpeta con los archivos de prueba
│ ├── register.test.js # Pruebas relacionadas con el registro de usuarios
│ ├── updateProfile.test.js # Pruebas relacionadas con la actualización del perfil
│ └── voteCar.test.js # Pruebas relacionadas con la votación de autos
├── playwright.config.js # Archivo de configuración de Playwright
├── suit-de-pruebas.xlsx # Archivo con la suite de pruebas detalladas
├── README.md # Archivo con la documentación del proyecto
├── package.json # Archivo de configuración del proyecto Node.js
└── package-lock.json # Archivo de bloqueo de dependencias de Node.js
Requisitos Previos
Antes de ejecutar este proyecto, asegúrate de tener instalados:

Node.js (versión 16 o superior)
NPM (incluido con Node.js)
Una conexión a internet para instalar las dependencias
Instalación
Sigue estos pasos para instalar y configurar el proyecto:

Clona el repositorio:
bash

git clone <URL-del-repositorio>
Navega a la carpeta del proyecto:
bash

cd buggy-cars-tests
Instala las dependencias:
bash

npm install
Configura Playwright para instalar los navegadores necesarios:
bash

npx playwright install
Ejecución de Pruebas
Para ejecutar todas las pruebas, usa el siguiente comando:

bash

npx playwright test
Ejecución de pruebas específicas:
Para ejecutar una prueba en particular:

bash

npx playwright test tests/register.test.js
Para ejecutar en un navegador específico (por ejemplo, Firefox):

bash

npx playwright test --project=firefox
Generar reportes:
Para generar un reporte en HTML:
bash

npx playwright show-report
Contenido de las Pruebas

1. Registro de Usuario (register.test.js):
   Valida que los usuarios puedan registrarse exitosamente en la página. Los criterios de aceptación incluyen:

Todos los campos requeridos deben estar presentes.
La contraseña debe cumplir con los requisitos (6 caracteres mínimos, al menos una mayúscula y un carácter especial).
Un usuario solo puede registrarse una vez. 2. Actualización de Perfil (updateProfile.test.js):
Verifica que los usuarios puedan actualizar su perfil, con criterios como:

Campos obligatorios: nombre y apellido.
Contraseña con 8 caracteres mínimos (incluyendo una mayúscula, un carácter especial y un número).
Los campos no pueden quedar vacíos. 3. Votación de Autos (voteCar.test.js):
Prueba la funcionalidad de votación, incluyendo:

Solo los usuarios autenticados pueden votar.
Un usuario solo puede votar una vez por cada auto.
La opción de dejar un comentario al votar.
Incremento en el contador de votos tras una votación.
Archivo de Configuración
El archivo playwright.config.js contiene configuraciones clave, como:

URL base:https://buggy.justtestit.org/
Modo headless: Las pruebas se ejecutan con el navegador visible para depuración (se puede cambiar a headless: true).
Captura de pantallas y grabación de video: Habilitados en caso de fallos.
Ejemplo de configuración:

javascript
Copiar código
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
testDir: './tests',
retries: 1,
use: {
headless: false,
baseURL: 'https://buggy.justtestit.org/',
screenshot: 'on',
video: 'retain-on-failure',
},
});
Suite de Pruebas
El archivo suit-de-pruebas.xlsx documenta los casos de prueba, incluyendo:

ID de la prueba
Descripción
Prerrequisitos
Pasos
Resultados esperados y obtenidos
Tipo de prueba y estado
