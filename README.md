# KontesaFilms React App

![logo Kontesa Films ](https://i.postimg.cc/nr55zj3D/Logo-Kontesa-Films.png)

## Table of contents
  - [Tech Stack🛠](#Tech-Stack)
  - [Requisitos🥑](#Descripcion-y-usabilidad)
  - [Rutas🥨](#Rutas-de-la-web)
  - [Store⛩](#Store)
  - [Comandos utiles](#Comandos-utiles)
  - [Bases de datos🔗](#Bases-de-datos)
  - [Como instalarlo 🥷](#Instalacion)
  - [Tareas Pendientes 🧙](#Tareas-pendientes)
  - [Autor🤘](#Autor)
  - [Como Ayudar🤝](#Como-ayudar)
  - [Agradecimientos💖](#Agradecimientos)

# Tech Stack 🛠

Se han utilizado las siguientes tecnologías: <br/><br/><br/>
<code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code> <code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"></code> <code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code> <code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code> <code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png"></code>
<code><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a></code> <br/><br/><br/>
Además se ha hecho uso de las siguientes librerías/herramientas/tecnologías para el desarrollo del proyecto:

-  Entorno: `Nodejs` 
-  ODM: `Mongoose`
-  Librería de estilos: `TailwindCss` 
-  Librería para visualizar estados del store `redux-devtools-extension`, 
-  Herramienta de despliegue de proyecto Front: `AWS`.

# Descripción y usabilidad 🥑

Segundo proyecto de React en el que nos piden desde la academia realizar una página web con react, dónde haya un catalogo de peliculas, puedas alquilarlas, y te puedas registrar como usuario para poder interactuar con la web. He intentado implementar la reutilización de componentes, añádir un reducer(por falta de tiempo no han sido mas) para gestionar los estados globales e incluso para guardar información como peliculas y datos de usuario. Me he iniciado a usar tailwind como libreria de clases css y he mezclado las clases css puras con tailwind ya que no conseguía el resultado visual que quería. Tamién he seguido la filosofía ágil Kanban mediante Trello para organizarme y definir los objetivos del proyecto, tareas pendientes, tareas en curso y objetivos extra.
Puedes acceder a la web a través de [www.kontesaFilms.geeks](https://master.d3ncme2vjlqh4n.amplifyapp.com/) y el funcionamiento de la web es el siguiente:
- La pagina inicial es **Home**,en la ruta `/` dónde hay una previsualización del catálogo de peliculas y su detalle, para que posibles usuarios puedan ver que peliculas tenemos y así poder suscribirse, en la misma vista hay dos botones de register y login en el header.
- Register está en la ruta `/register` dónde cualquier persona puede registrarse con tan solo el nombre, el email y una contraseña, cabe añadir que la contraseña se heashea para la seguridad del usuario. Por defecto el usuario registrado tendrá el role de `client`, una vez registrado se redirecciona al login.
- Login está en la ruta `/login` dónde el usuario tiene que introducir su email y su password para poder acceder a la aplicación, si todavía no se ha registrado hay un enlace que redirecciona al registro. Una vez que ha hecho login, se redirecciona al home para poder visualizar las peliculas
- Una vez hecho login, y estando en Home se puede ver el catalogo de peliculas que ya están filtradas por categorias, y se habilita en el header nuevos botones de redirección como `MOVIEFILTER`, dónde puedes filtrar las peliculas, `MYRENTS`, dónde puedes ver que peliculas has alquilado y la información de los alquileres de cada usuario, y el botón logout.
- En `MOVIEFILTER` es para filtrar películas de forma ágil, en la ruta `/search` hay una barra de búsqueda y un selector de busqueda, dónde te permite filtrar por id de la pelicula, titulo, genero y actor, no es necesario hacer la búsqueda exacta, ya van saliendo las coincidencias mientras realizas la búsqueda.
- En `MYRENTS` se puede visualizar un grid con todos los alquileres de cada usuario, en la ruta `/rents/byuser/:id`, dónde te sale la información del titulo de la pelicula, cuando se ha alquilado,el precio y la fecha de devolución.
- Adicionalmente he añadido un pequeño `DASHBOARD` solo para usuarios con role **Admin** para que puedan ver más facilmente toda la información de los usuarios, peliculas y alquileres de toda la aplicación.y un contator del total de cada una de ellas.

# Rutas de la web ⛩

```
<ErrorComponent>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/rents/byuser/:id" element={<Rents />}></Route>
            {admin && <Route path="/dashboard" element={<Dashboard />}></Route>}
            <Route path="/search" element={<Search />}></Route>
          </Routes>
          <Footer />
          {loading && <Loading />}          
          {popupState.visible && <PopUp />}
        </BrowserRouter>
      </ErrorComponent>
```
He añadido un componente Loading, que se muestra en momentos puntuales dónde realizo algun fetch al api, y un popup que se muestra en varias interacciones con el sistema, dónde sale espontaneamente y se cierra al cabo de 3 segundos, ambos componentes son hooks muy sencillos con el fin de practicarlos, y reutilizarlos ahorrando código.
El componente ErrorComponent se ha añadido ya que no conseguía visualizar bien los errores que sucedían dentro de los componentes, y gracias a ello muestra en el front el error.

## Store

```
const initialState = {
  admin: false,
  logged: false,
  tokenInfo: {
    token: "",
    id: "",
    role: "",
  },
  movies: undefined,
  popup: { visible: false, text: "" },
  loading: false,
};
```
Aquí muestro el contenido del store dónde por falta de tiempo no he podido dividirlo en más reductores y así tenerlo mejor organizado, podemos ver que existen estados para saber si el usuario es admin, si esta logeado, la información guardada del token, el id y el role. He guardado las peliculas en movies para no tener que hacer más que un fetch al api, y asi hacer la app más rápida.El popup con dos claves de visibilidad y el texto a mostrar y por último el loading.
Hay un archivo de typesVar dónde guardo los strings del type al realizar un dispatch y asi minimizar errores, y además otro archivo dónde guardo una sencilla funcion para crear las actions de manera más fácil y evitar código que muestro a continuación:
```
const actionCreator = (type, payload) => {
    return payload ? { type, payload } : { type };
  };
  
  export default actionCreator;
```

Y por último he centralizado todas las funciones que atacan al API en un objeto, dónde cada clave es una función.

# Base de datos 🔗

Se ha utilizado la base de datos no relacional MongoDB con el ODM Mongoose, y Mongo Atlas para tener la base de datos en la nube y así trabajar desde cualquier lugar. 
* Robo 3T se ha utilizado para UI de la base de datos

Para poder mostrar contenido de varios modelos he utilizado el .populate, dónde muestra información relacionada de otros modelos, siendo imprescindible añadir en dichos modelos la referencia a los ajenos. Ejemplo de populate en el backend:

` const rentFound = await Rent.find({ idUser: req.params.id }).populate(["idUser","idMovie"])`

# Comandos útiles 👀

`npm run start`  // Ejecuta la app de react en localhost:3000

# Instalación 🥷

Para poder modificar el proyecto o visualizar el código:
- Clonar o forkear el repositorio si deseas, **Alejandro:** _(https://github.com/AlexMonPe/KontesaFilms.git)_, 
- Instalar React y Tailwind: `npm i create-react-app tailwind-app && cd tailwind-app o  _npm install_ para cargar las dependencias del package.json
- Puedes utilizar mi api subido a heroku, la doc está en _(https://github.com/AlexMonPe/apiRestfullMovies)_
- `devToolsEnhancer` // Instalando la extensión de chrome reduxDevTools para visualizar los estados de redux


# Tareas pendientes 🧙

  - [ ] Hacer validaciones
  - [ ] Mejorar y añadir más componentes y clases de TailWind CSS
  - [ ] Documentar con swagger.
  - [ ] Hacer un carrito de alquileres y pasarela de pago
  - [ ] Añadir sass
  - [ ] Responsive.

# Autor 🤟

*  const [Alejandro,setAlejandro] = useState(https://github.com/AlexMonPe) 🥇

# Como ayudar 🤝
  
  - Si deseas colaborar con éste proyecto u otro no dudes en contactar conmigo o solicitar una pull request.
  - Mi correo electrónico es  _alex_bcn10@hotmail.es_
  - Cualquier aporte se recompensa con una cerveza o café.
  - Repositorio público con código libre con el fin de seguir promoviendo compartir conocimientos y ayudar a otros programadores.

# Agradecimientos 💖

  * A Gonzalo, que se esfuerza día a día para que seamos mejores programadores.
  * Enorme agradecimiento a Pablo, por paciencia y dedicación y su clara vocación a ayudar a los demas.
  * A nuestros compañeros que siempre estan dispuestos a ayudar como un equipo de remo.
  * Mi compañero Mihai que me ayuda a mejorar día a día con su perspectiva y sus buenas pácticas.

## License

GNU General Public License v3.0
