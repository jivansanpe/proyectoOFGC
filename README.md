# OFGC APP

# Introducción

La OFGC (Orquesta Filarmónica de Gran Canaria) tiene a nuestra disposición un amplio abanico de proyectos que se renueva cada mes. Para estar al día con cada uno de estos habría que acudir a su página web oficial. Mi aplicación es una agenda para facilitar el seguimiento de dichas actuaciones en un terminal móvil. El interesado tendrá acceso a la misma lista de eventos que se encuentra en la web y como añadido podrá guardar sus eventos favoritos en una lista dentro de la aplicación, cumpliendo así el proyecto que se me ha encomendado de parte de mi tutor asignado.

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
		
# Guía de instalación.

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

# Usabilidad y accesibilidad.

He usado los colores de la web de la OFGC, que son el azul turquesa, marrón y el blanco como tonalidades predominantes.

	- La aplicación es sencilla. Es una agenda básica donde se insertan, editan y eliminan eventos.
	- Esta hecha para verse en móvil. He intentado que no de mucho miedo en versión ordenador, pero debería verse en tamaño móvil.
	- Se puede navegar tanto con los botones del móvil como con la barra de navegación lateral o los botones de la aplicación.
	- El diseño es minimalista, pero con buen gusto (aunque esté mal que lo diga yo).
	- Los colores son fáciles de distinguir.
	- La fuente y su tamaño son los adecuados para no forzar la vista.
	
# Pila tecnológica.

	- Backend: Laravel 9 (con el ORM Eloquent perfectamente implementado).
	- Frontend: Ionic (con Angular en su última versión).
	
# Plan de trabajo.

	AED: https://trello.com/b/ZwVcICX0/aed
	DAD: https://trello.com/b/ZwVcICX0/aed
	PGV: https://trello.com/b/qspeAK7K/pgv
	PGL: https://trello.com/b/qspeAK7K/pgv
	
# Idea final.

	Especialmente esta última semana he sentido la presión de tener el proyecto terminado y no me he sabido organizar bien. Si no llega a ser por la insistencia de mi compañera Eva no hubiera entregado nada. Sobre las tecnologías, me ha sorprendido para bien Laravel en cuanto a lo instuitivo que resulta, pero hay pocos tutoriales de su última versión y eso me ha dificultado mucho el aprendizaje. Los errores en el frontend de Ionic han sido un calvario, hubiera preferido hacerlo en Angular y así disfrutar de la gran comunidad que tiene para resolver dudas.





