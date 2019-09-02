# Vista previa de la aplicación

![](docs/ark4News.png) ![](docs/ark4News-categorias.png)

![](docs/ark4News-opciones.png) ![](docs/ark4News-favoritos.png)

Para probar la aplicacion es necesarion regitrarse en la pagina [News API](https://newsapi.org).
Una vez registrados podran obtener un api key en el cual deberan colocarlo en el archivo de los environments del proyecto que se encuentra en src/environments 

~~~js
export const environment = {
  production: false,
  apikey: 'AQUI DEBES PONER TU API KEY',
  apiUrl: 'https://newsapi.org/v2'
};
~~~

