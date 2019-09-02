# Vista previa de la aplicación

![](docs/ark4News.png) ![](docs/ark4News-categorias.png)

![](docs/ark4News-opciones.png) ![](docs/ark4News-favoritos.png)

Para probar la aplicación es necesario registrarse en la página [News API](https://newsapi.org).
Una vez registrados podrán obtener un api key, en el cual deberán colocarlo en el archivo de los environments del proyecto que se encuentra en src/environments/environments.ts 

~~~js
export const environment = {
  production: false,
  apikey: 'AQUI DEBES PONER TU API KEY',
  apiUrl: 'https://newsapi.org/v2'
};
~~~

luego debera instalar las dependencias de node utilizando el siguente comando en la terminal apuntando al proyecto

~~~
npm install
~~~

La aplicación esta hecha utilizando el framework Ionic junto con Angular por lo tanto para levantar el servidor se debe utilizar el siguente comando dentro de la terminal ubicada en el proyecto

~~~bash
ionic serve
~~~

En caso de tener duda alguna le aconsejo leer la documentación de [Ionic Framework](https://ionicframework.com/)



