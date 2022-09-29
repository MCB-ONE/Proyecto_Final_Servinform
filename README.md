# APP SERVIFORM
<img src="logos/logo-facturapp-180x100.svg" width="180">

**Tabla de contenidos**

- [APP SERVIFORM](#app-serviform)
  - [Descripción del proyecto](#descripción-del-proyecto)
  - [Estructura](#estructura)
  - [Funcionalidades detalladas](#funcionalidades-detalladas)
  - [Teconologías utilizadas](#teconologías-utilizadas)


Descripción del proyecto
------------
Aplicación web para gestión de facturas desarrollada en .Net 6 y Angular 14. Gracias a un panel de administración el usuario puede generar y visualizar facturas en PDF para cada empresa con la que trabaja, así como facilitar la gestión de todo su sistema de facturación.

Estructura
------------

* Panel de administración: Parte FrontEnd del proyecto desarrollada con la versión 16 de Angular JS. Permite al usuario gestionar todos los datos de la aplicación de forma visual, ordenada, intuitiva y segura.
* API Rest: Parte BackEnd de la aplicación que se encarga de la persistencia de los datos y sus operaciones correspondientes. Desarrollado en .NET.

Funcionalidades detalladas
------------
**1. Seguridad basada en roles:** 
*   Los usuarios pueden tener el rol de usuario o de administrador. Un administrador puede acceder a todos los apartados de la aplicación y puede gestionar todos los usuarios, empresas y facturas con sus correspondientes lineas de factura.
*  Los usuario no administradores solo pueden gesionar aquellas empresas que esta´n relacionadas con el mismo.

**2. Usuarios no administradores:**
*   Cada usuario gestiona una serie de empresas. Y solo él y el administrador pueden acceder y gestionar las facturas de dichas empresas. 
*  Cada empresa puede tener su colección de facturas asociadas.
   *  Cada Factura tendrá una serie de Lineas de factura.
   *  El usuario puede visualizar una tabla con el listado de las facturas. 
   *  El usuario puede filtrar, búscar y ordenar las facturas.
   *  EL usuario puede generar un PDF con los datos de la empresa, la factura y las lineas de factura con todos los detalles de facturación.
   *  Se incluye el almacenamiento del pdf y la factura servicio web para su posterior gestión.

**3. Testing y documentación:**
TODO: Desarrollar explicación
* Documentación que recoje toda la información de la aplicación mediante las herramientas de gestión documental adecuada para cada framework, tanto backend como frontend.
* Se ha generado una suit de testing para frontend y backend con pruebas unitarias y pruebas de integración.


Teconologías utilizadas
------------
  <img src="logos/logo-angular.svg" height="28">
  <br>
  <img src="logos/logo-net.svg" height="28" >
  <br>
  <img src="logos/logo-sql.svg" height="28" >