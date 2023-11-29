Para llevar a cabo las pruebas automatizadas de los servicios REST de PetStore, asegúrate de que Node JS esté instalado en tu sistema. Si necesitas instalar Node JS, visita la página de descargas en nodejs.org para obtener la versión más reciente.

Una vez que tengas Node JS, abre tu terminal y sigue estos pasos:
1. Dirígete al directorio del proyecto con el comando: cd ruta_al_directorio_del_proyecto
2. Instala las dependencias necesarias ejecutando: npm install
3. A continuación, instala Cypress utilizando: npx cypress install
4. Finalmente, inicia la ejecución de las pruebas con: npx cypress run --spec "cypress/e2e/*"


