# Introducción

La OFGC (Orquesta Filarmónica de Gran Canaria) tiene a nuestra disposición un amplio abanico de proyectos que se renueva cada mes. Para estar al día con cada uno de estos habría que acudir a su página web oficial. Mi aplicación es una agenda para facilitar el seguimiento de dichas actuaciones en un terminal móvil. El interesado tendrá acceso a la misma lista de eventos que se encuentra en la web y como añadido podrá guardar sus eventos favoritos en una lista dentro de la aplicación, cumpliendo así el proyecto que se me ha encomendado de parte de mi tutor asignado.

# Requisitos del sistema.

	Para utilizar Laravel 9, es necesario cumplir con los siguientes requisitos:

- PHP: Laravel 9 requiere PHP 7.4 o posterior.
- Servidor web: Laravel 9 se puede utilizar con cualquier servidor web que soporte PHP, como Apache o Nginx.
- Base de datos: Laravel 9 soporta varias bases de datos, como MySQL, PostgreSQL y SQLite. Dependiendo del tipo de base de datos que utilices, es necesario instalar el controlador de base de datos correspondiente para PHP.
- Composer: Laravel 9 utiliza Composer para gestionar sus dependencias. Es necesario tener Composer instalado en el sistema para utilizar Laravel.
- Además, se recomienda haber instalado y configurado un entorno de desarrollo para PHP, como XAMPP o Laravel Valet, para facilitar el proceso de instalación y desarrollo con Laravel.

	Para utilizar Ionic, es necesario cumplir con los siguientes requisitos:

- Node.js: Ionic se basa en Node.js y requiere tenerlo instalado para poder utilizarlo. Puedes descargar e instalar la última versión de Node.js desde su sitio web oficial (https://nodejs.org/).

- npm: npm es el administrador de paquetes de Node.js y viene incluido con la instalación de Node.js. Es necesario tener npm instalado para poder utilizar Ionic.

- Angular CLI: Ionic utiliza Angular como marco de desarrollo y requiere tener Angular CLI instalado para crear y gestionar proyectos. Puedes instalar Angular CLI ejecutando el siguiente comando en tu terminal:

		npm install -g @angular/cli
		
- Cordova: Cordova es un marco de aplicaciones móviles que permite a Ionic crear aplicaciones móviles nativas para diferentes plataformas. Es necesario tener Cordova instalado para poder utilizar Ionic. Puedes instalar Cordova ejecutando el siguiente comando en tu terminal:

		npm install -g cordova

- Ionic CLI: Por último, es necesario tener la CLI de Ionic instalada para poder crear y gestionar proyectos de Ionic. Puedes instalar la CLI de Ionic ejecutando el siguiente comando en tu terminal:

		npm install -g ionic

# Para iniciarlo.
		
1. Para ejecutar el backend:

		composer require laravel/sanctum
		php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
		php artisan serve
		
2. Para ejecutar el frontend:
	
		npm install
		ionic serve
		
3. Para migrar las tablas a la base de datos:
	
		php artisan migrate
		
# Requisitos de instalación.

- Requisitos:
	- Visual Studio Code (Se recomienda la extensión oficial de Ionic).
	- MySql Workbench.
	- Postman.

# Modelos

Mi proyecto requiere de tres entidades para ser funcional. La tercera entidad es un registro que nace de la relación de muchos a muchos entre los eventos y los usuarios, tal como muestra el siguiente modelo E-R:

![er_con_fondo_blanco](https://user-images.githubusercontent.com/96262947/207350862-44aceae5-dc2c-4e75-b019-f146aed90240.png)

La tabla de los eventos recoge la información pertinente de estos, mientras que la tabla usuario hace lo propio con los datos de las personas que van a usar la aplicación. La tabla intermedia es un registro que relaciona los usuarios con los eventos. Lo que hace necesaria esta relación es la característica que tiene cada usuario de poder confeccionar su propia lista de eventos en la aplicación.
        Para visualizar mejor las conexiones con la tabla intermedia, tenemos el UML:

![uml_con_fondo_blanco](https://user-images.githubusercontent.com/96262947/207351645-f05f5a22-6b99-47cb-bf71-bdf27469ca3c.png)

Cabe destacar que la tabla registro solo está formada, además de por su clave principal, por dos claves foráneas a modo de unión entre la tabla de los usuarios y la de los eventos que se van a emparejar en el registro.

He aquí el modelo relacional resultante:

![relacional](https://user-images.githubusercontent.com/96262947/207352342-43a56183-c293-43c2-a3a5-649cd57ae9ab.png)

Evento (atributos que tiene cada evento):

	- id_evento: Clave principal que identifica a cada evento.

	- Nombre: Nombre del evento.

	- Tipo: Tipo del evento.

	- Lugar: Lugar del evento.

	- Fecha: Fecha del evento.

	- Horario: Horario del evento.

	- Imagen: Imagen del evento (puede ser nula).
	
	- Director: Director del evento (Está asociado al id de la tabla Director).

Director (atributos que tiene cada director):

	- id_director: Clave principal que identifica a cada director.

	- Apodo: Apodo artístico del director.

	- Imagen: Imagen del director.
	
Usuario (atributos que tiene cada usuario):

	- id_usuario: Clave principal que identifica a cada usuario.

	- Alias: Alias del usuario.

	- Foto: Imagen del usuario.
	
Registro (atributos que tiene el registro entre Evento y Usuario):

	- fk_evento: Clave foránea que relaciona la tabla Evento.
	
	- fk_usuario: Clave foránea que relaciona la tabla Usuario.

Si se quiere importar manualmente la BBDD, he dejado el archivo del script en una carpeta aparte llamada Database.

# Casos de uso.

![image](https://user-images.githubusercontent.com/96262947/207384578-eb77c5c3-138a-4480-9a76-996da03c160c.png)

# Figma (orientativo).

https://www.figma.com/file/OJrWtxJKa0ffdyPAAYJAF0/Untitled?t=ISRTa8GFNUw6HkGU-0

# Paleta.

He usado los colores de la web de la OFGC, que son el azul turquesa, marrón y el blanco como tonalidades predominantes.

# Usabilidad y accesibilidad.

Vamos a dividir este apartado en varios puntos.

- La aplicación es fácil de entender: Es una simple agenda en la que se pueden agregar, modificar, eliminar y consultar eventos. Está planteada para que se pueda acceder desde un simple login donde hay que indicar el correo y la contraseña. Ambos campos tienen validaciones. Respecto al correo, basta con que tenga un "@". La contraseña tiene que contener como mínimo una letra minúscula, una letra mayúscula y algún dígito, esto se hace para evitar que se usan contraseñas débiles. Cabe recordar que la contraseña es encriptada en base 64 al llegar al backend. 
- Las opciones sensibles de ser pulsadas por error cuentan con un mensaje de confirmación. De momento, ese mensaje es una ventanita que se te abre en Windows. Si se le da a cancelar será como si nada hubiera pasado y si se acepta se reciba una pequeña animación a modo de feedback para que el usuario entienda que la acción ha sido efectuada con éxito. Por ejemplo, al pulsar en el botón de "cerrar sesión" se depliega una animación con un tick verde.
- La navegación es a gusto del usuario. Se puede navegar a través de un stacknavigation (los botones clásicos "volver" y las flechitas hacia atrás), un sidemenu (en la pantalla principal hay que deslizar el dedo por la pantalla para desplegar un simple menú con varias rutas) y los botones del tab bar clásicos de cualquier móvil.
- Los campos a rellenar tienen un placeholder, o en su defecto un cartel, que indica claramento que tipo de dato hay que introducir. Es difícil que un usuario se pueda confundir, y de ser así, las validaciones y sus respectivos mensajes harán su trabajo.
- Los iconos son representativos de la función a desarrollar. Por ejemplo el icono del perfil es inconfundible y una vez dentro, la organización en limpia y ordenada con más iconos representativos y texto de acompañamiento.
- A nivel de código, es importante recalcar que se usan "alt" (texto informativo opcional de cada elemento) para añadir más claridad al código y hacer más sencillo su escalado.
- El tamaño de la letra y los colores son agradables a la vista y dan una buena sensación de empaque al proyecto. 
	
# Pila tecnológica.

	- Backend: Laravel 9 (con el ORM Eloquent perfectamente implementado).
	- Frontend: Ionic (con Angular en su última versión).
	
# Comparativa entre dos tecnologías similares del backend y del frontend.

En el frontend compararé Ionic y Angular "puro". Mi elección proviene de haber usado ambas tecnologías en este curso. Además, pese a haber usado Ionic basado en Angular en este proyecto, he pecado de usar algunos elementos propios de Angular "crudo" por estar más familiarizados con ellos. Por ejemplo, el componente de index lo cree basándome en Angular y luego lo adapté a la estructura de Ionic. Sin más preámbulos, esta es mi disertación sobre ambas tecnologías:

1. Ionic es un framework de desarrollo de aplicaciones móviles basado en HTML, CSS y JavaScript, mientras que Angular es un framework de desarrollo web basado en TypeScript. Ambas herramientas están diseñadas para facilitar el desarrollo de aplicaciones y proporcionar una estructura sólida y un conjunto de herramientas para mejorar la productividad del desarrollador.

2. Una de las principales diferencias entre Ionic y Angular es el enfoque. Ionic está diseñado específicamente para el desarrollo de aplicaciones móviles y proporciona un conjunto de componentes y herramientas que facilitan la creación de aplicaciones móviles nativas y híbridas. Angular, por otro lado, es un framework de desarrollo web general y se puede utilizar para crear aplicaciones web, aplicaciones móviles híbridas y aplicaciones de escritorio con Electron.

3. Otra diferencia importante es la forma en que ambos frameworks manejan la interfaz de usuario. Ionic utiliza componentes de interfaz de usuario basados en HTML y CSS para crear la interfaz de usuario de la aplicación, mientras que Angular utiliza su propio lenguaje de plantillas basado en HTML y su propio conjunto de componentes de interfaz de usuario. Esto significa que Angular puede proporcionar un mayor control sobre la interfaz de usuario y una mejor integración con la lógica de negocio de la aplicación, mientras que Ionic es más fácil de aprender y utilizar para aquellos familiarizados con el desarrollo web tradicional.

4. En términos de rendimiento, Angular y Ionic son muy similares. Ambas herramientas utilizan tecnologías avanzadas para optimizar el rendimiento de la aplicación y proporcionar una experiencia fluida para el usuario final. Sin embargo, Angular puede proporcionar un rendimiento ligeramente mejor en aplicaciones más grandes y complejas debido a su enfoque en la optimización de rendimiento y su mayor control sobre la interfaz de usuario.

En resumen, Ionic es una buena opción para aquellos que buscan una herramienta fácil de usar y rápida para el desarrollo de aplicaciones móviles híbridas y nativas, mientras que Angular es una opción más robusta y completa para aquellos que buscan un framework de desarrollo web más general y con mayor control sobre la interfaz de usuario.

Ahora os compararé Laravel y Django en el backend:

1. Laravel y Django son dos frameworks de desarrollo web populares que se utilizan para la creación de aplicaciones web. Ambas herramientas ofrecen una amplia gama de funcionalidades y herramientas que facilitan el desarrollo y la creación de aplicaciones web de alta calidad. Sin embargo, existen algunas diferencias clave entre ambos frameworks.

2. Uno de los principales diferencias entre Laravel y Django es el lenguaje de programación que utilizan. Laravel está escrito en PHP y se ejecuta en el lado del servidor, mientras que Django está escrito en Python y también se ejecuta en el lado del servidor. Esto significa que los desarrolladores deben tener conocimientos de PHP o Python para trabajar con Laravel o Django, respectivamente.

3. Otra diferencia importante es la forma en que ambos frameworks manejan la base de datos. Laravel utiliza Eloquent, una capa de abstracción de bases de datos que permite a los desarrolladores interactuar con la base de datos de manera sencilla y natural. Django, por otro lado, utiliza ORM (Mapeo de objetos de relación), que permite a los desarrolladores interactuar con la base de datos a través de objetos en lugar de escribir consultas SQL manualmente.

4. En términos de rendimiento, Laravel y Django son muy similares. Ambas herramientas proporcionan un rendimiento sólido y estable para la mayoría de las aplicaciones web. Sin embargo, Django puede tener un ligero rendimiento mejor en aplicaciones más grandes y complejas debido a su enfoque en la optimización de rendimiento y su soporte integrado para el cacheo de la base de datos y el cacheo de la vista.

En resumen, Laravel es una buena opción para aquellos que buscan un framework de desarrollo web potente y fácil de usar basado en PHP, mientras que Django es una opción más robusta y completa para aquellos que buscan un framework de desarrollo web basado en Python con un enfoque en la escalabilidad y la optimización de rendimiento.
	
# Plan de trabajo.

	AED: https://trello.com/b/ZwVcICX0/aed
	DAD: https://trello.com/b/ZwVcICX0/aed
	PGV: https://trello.com/b/qspeAK7K/pgv
	PGL: https://trello.com/b/qspeAK7K/pgv

# Postman

https://documenter.getpostman.com/view/23479374/2s8YzZPe48

# Requisitos de usuario.

Entorno de uso:

1. Mi aplicación está confeccionada para visualizarla en un móvil. Se verá ensanchada en un ordenador.
2. No se recomienda usar el comando ionic serve -l porque da errores por defecto en algunos componentes.

Métodos de acceso:

1. Hay que loguearse para entrar en la aplicación.
2. En caso de no tener cuenta, hay que crearla en su correspondiente interfaz.
3. Si eres un usuario corriente, te tienes que crear la cuenta por ti mismo. Si eres un admin, ya la tienes creada de antemano y solo debes loguearte.

Restricciones:

1. Para modificar la información de los eventos el usuario debe ser administrador.
2. El login atiende a las siguientes validaciones:
	- El correo debe llevar un "@".
	- La contraseña no puede ser corta y tiene que tener al menos un número, letra mayúscula y letra minúscula.
	- En el registro existen las mismas validaciones.

Interfaces y componentes:

1. Login.
2. Registro.
3. Pantalla principal de los eventos.
4. Perfil.
5. Contacto.
6. No hay que olvidarse de que se puede deslizar en la parte derecha para ver el menú, aunque esto es un componente.
7. Otro componente importante es el que permite visualizar la tabla en el menú principal al ser llamado.
	
# Idea final.

	Especialmente esta última semana he sentido la presión de tener el proyecto terminado y no me he sabido organizar bien. Si no llega a ser por la insistencia de mi compañera Eva no hubiera entregado nada. Sobre las tecnologías, me ha sorprendido para bien Laravel en cuanto a lo instuitivo que resulta, pero hay pocos tutoriales de su última versión y eso me ha dificultado mucho el aprendizaje. Los errores en el frontend de Ionic han sido un calvario, hubiera preferido hacerlo en Angular y así disfrutar de la gran comunidad que tiene para resolver dudas. Es una lástima que se me haya corrompido el proyecto a un día de la entrega y no me haya dado tiempo a rehacerlo entero de nuevo. He intentado recuperar lo que he podido.






