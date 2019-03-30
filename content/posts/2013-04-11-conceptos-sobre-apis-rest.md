---
title: Conceptos sobre APIs REST
date: "2013-04-11 13:48:22+00:00"
template: "post"
draft: false
slug: "/2013/conceptos-sobre-apis-rest/"
category: "Desarrollo"
tags:
  - "Desarrollo web"
  - "APIs Web"
description: "REST nos permite crear servicios y aplicaciones que pueden ser usadas por cualquier dispositivo o cliente que entienda HTTP, por lo que es increíblemente más simple y convencional que otras alternativas que se han usado en los últimos diez años como SOAP y XML-RPC."
---

En esta entrada voy a resumir los conceptos más importantes que he tratado en mis ponencias sobre REST.


### ¿Qué es REST?


[REST, REpresentational State Transfer](http://es.wikipedia.org/wiki/Representational_State_Transfer), es un tipo de arquitectura de desarrollo web que se apoya totalmente en el estándar HTTP.

REST nos permite crear servicios y aplicaciones que pueden ser usadas por cualquier dispositivo o cliente que entienda HTTP, por lo que es increíblemente más simple y convencional que otras alternativas que se han usado en los últimos diez años como SOAP y XML-RPC.

REST se definió en el 2000 por Roy Fielding, coautor principal también de la especificación HTTP. Podríamos considerar REST como un framework para construir aplicaciones web respetando HTTP.

Por lo tanto REST es el tipo de arquitectura más natural y estándar para crear APIs para servicios orientados a Internet.

Existen tres niveles de calidad a la hora de aplicar REST en el desarrollo de una aplicación web y más concretamente una API que se recogen en un modelo llamado **[Richardson Maturity Model](http://martinfowler.com/articles/richardsonMaturityModel.html)** en honor al tipo que lo estableció, Leonard Richardson padre de la [arquitectura orientada a recursos](http://en.wikipedia.org/wiki/Resource-oriented_architecture). Estos niveles son:



	
  1. Uso correcto de URIs

	
  2. Uso correcto de HTTP.

	
  3. Implementar Hypermedia.


Además de estas tres reglas, **nunca se debe guardar estado en el servidor**, toda la información que se requiere para mostrar la información que se solicita debe estar en la consulta por parte del cliente.

Al no guardar estado, REST nos da mucho juego, ya que podemos escalar mejor sin tener que preocuparnos de temas como el almacenamiento de variables de sesión e incluso, podemos jugar con distintas tecnologías para servir determinadas partes o recursos de una misma API.


### Nivel 1: Uso correcto de URIs


Cuando desarrollamos una web o una aplicación web, las URLs nos permiten acceder a cada uno de las páginas, secciones o documentos del sitio web.

Cada página, información en una sección, archivo, cuando hablamos de REST, los nombramos como **recursos**.

El recurso por lo tanto es la información a la que queremos acceder o que queremos modificar o borrar,** independientemente de su formato**.

Las URL, Uniform Resource Locator , son un tipo de URI, Uniform Resource Identifier, que además de permitir **identificar de forma única el recurso**, nos permite localizarlo para poder acceder a él o compartir su ubicación.

Una URL se estructura de la siguiente forma:

    
    {protocolo}://{dominio o hostname}[:puerto (opcional)]/{ruta del recurso}?{consulta de filtrado}


Por ejemplo, [/2013/conceptos-sobre-apis-rest/](/2013/conceptos-sobre-apis-rest/), sería la URL para visualizar este artículo.

Existen varias reglas básicas para ponerle nombre a la URI de un recurso:



	
  * Los nombres de URI no deben implicar una acción, por lo tanto debe evitarse usar verbos en ellos.

	
  * Deben ser únicas, no debemos tener más de una URI para identificar un mismo recurso.

	
  * Deben ser independiente de formato.

	
  * Deben mantener una jerarquía lógica.

	
  * Los filtrados de información de un recurso no se hacen en la URI.


**Las URIs no deben implicar acciones y deben ser únicas**

Por ejemplo, la URI _**/facturas/234/editar**_ sería incorrecta ya que tenemos el verbo editar en la misma.

Para el recurso factura con el identificador 234, la siguiente URI sería la correcta, independientemente de que vayamos a editarla, borrarla, consultarla o leer sólo uno de de sus conceptos: **/facturas/234**

**Las URIs deben ser independientes de formato**

Por ejemplo, la URI **/facturas/234.pdf** no sería una URI correcta, ya que estamos indicando la extensión pdf en la misma.

Para el recurso factura con el identificador 234, la siguiente URI sería la correcta, independientemente de que vayamos a consultarla en formato pdf, epub, txt, xml o json: **/facturas/234**

**Las URIs deben mantener una jerarquía lógica**

Por ejemplo, la URI **/facturas/234/cliente/007 **no sería una URI correcta, ya que no sigue una jerarquía lógica.

Para el recurso factura con el identificador 234 del cliente 007, la siguiente URI sería la correcta: **/clientes/007/facturas/234**

**Filtrados y otras operaciones.**

Para filtrar, ordenar, paginar o buscar información en un recurso, debemos hacer una consulta sobre la URI, utilizando parámetros HTTP en lugar de incluirlos en la misma.

Por ejemplo, la URI **/facturas/orden/desc/fecha-desde/2007/pagina/2** sería incorrecta ya que el recurso de listado de facturas sería el mismo pero utilizaríamos una URI distinta para filtrarlo, ordenarlo o paginarlo.

La URI correcta en este caso sería:

**/facturas?fecha-desde=2007&orden=DESC&pagina=2**


### Nivel 2: HTTP


Conocer bien HTTP no es opcional para un desarrollador web al que le importe su trabajo. Aunque el [RFC](http://www.w3.org/Protocols/rfc2616/rfc2616.html) es sencillo de leer, si estás interesado en aprender bien las bases de este protocolo es muy recomendable [la guía de O'Reilly sobre el mismo](http://shop.oreilly.com/product/9781565925090.do).

Para desarrollar APIs REST los aspectos claves que hay que dominar y tener claros son:



	
  * Métodos HTTP

	
  * Códigos de estado

	
  * Aceptación de tipos de contenido


**Métodos.**

Como hemos visto en el anterior nivel, a la hora de crear URIs no debemos poner verbos que impliquen acción, aunque queramos manipular el recurso.

Para manipular los recursos, HTTP nos dota de los siguientes métodos con los cuales debemos operar:



	
  * GET: Para consultar y leer recursos

	
  * POST: Para crear recursos

	
  * PUT: Para editar recursos

	
  * DELETE: Para eliminar recursos.

	
  * PATCH: Para editar partes concretas de un recurso.


Por ejemplo para un recurso de facturas.

**GET /facturas** Nos permite acceder al listado de facturas

**POST /facturas** Nos permite crear una factura nueva

**GET /facturas/123** Nos permite acceder al detalle de una factura

**PUT /facturas/123** Nos permite editar la factura, sustituyendo la totalidad de la información anterior por la nueva.

**DELETE /facturas/123** Nos permite eliminar la factura

**PATCH /facturas/123** Nos permite modificar cierta información de la factura, como el número o la fecha de la misma.

Quizá debido al desconocimiento o el soporte de ciertos navegadores, los desarrolladores web han usado, durante los últimos años, únicamente los métodos GET Y POST para realizar todas estas acciones. Si trabajamos con REST, esto sería un error de base y puede darnos problemas incluso a la hora de nombrar nuestros recursos, obligándonos a poner verbos en las URLs.

**Códigos de estado.**

Uno de los errores más frecuentes a la hora de construir una API suele ser el reinventar la rueda creando nuestras propias herramientas en lugar de utilizar las que ya han sido creadas, pensadas y testadas. La rueda más reinventada en el desarrollo de APIs son los códigos de error y códigos de estado.

Cuando realizamos una operación, es vitar saber si dicha operación se ha realizado con éxito o en caso contrario, por qué ha fallado.

Un error común sería por ejemplo:

```
Petición
========
PUT /facturas/123

Respuesta
=========
Status Code 200
Content:
{
  success: false,
  code:    734,
  error:   "datos insuficientes"
}
```

En este ejemplo se devuelve un código de estado 200, que significa que la petición se ha realizado correctamente, sin embargo, estamos devolviendo en el cuerpo de la respuesta un error y no el recurso solicitado en la URL.

Este es un error común que tiene varios inconvenientes:



	
  * No es REST ni es estándar.

	
  * El cliente que acceda a este API debe conocer el funcionamiento especial y cómo tratar los errores de la misma, por lo que requiere un esfuerzo adicional importante para trabajar con nosotros.

	
  * Tenemos que preocuparnos por mantener nuestros propios códigos o mensajes de error, con todo lo que eso supone.


HTTP tiene un abanico muy amplio que cubre todas las posibles indicaciones que vamos a tener que añadir en nuestras respuestas cuando las operaciones han ido bien o mal.

[Es imperativo conocerlos y saber cuándo utilizarlos](http://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP), independientemente de que desarrolles siguiendo REST.

El siguiente ejemplo sería correcto de la siguiente forma:

```
Petición
========
PUT /facturas/123

Respuesta
=========
Status Code 400
Content:
{
  message: "se debe especificar un id de cliente para la factura"
}
```

**Tipos y formatos de contenido.**

Cuando hablamos sobre URLs, vimos también que no era correcto indicar el tipo de formato de un recurso al cual queremos acceder o manipular.

HTTP nos permite especificar en qué formato queremos recibir el recurso, pudiendo indicar varios en orden de preferencia, para ello utilizamos el header **Accept**.

Nuestra API devolverá el recurso en el primer formato disponible y, de no poder mostrar el recurso en ninguno de los formatos indicados por el cliente mediante el header Accept, devolverá el código de estado **HTTP 406**.

En la respuesta, se devolverá el header **Content-Type**, para que el cliente sepa qué formato se devuelve, por ejemplo:

```
Petición
========
GET /facturas/123
Accept: application/epub+zip , application/pdf, application/json

Respuesta
=========
Status Code 200
Content-Type: application/pdf
```

En este caso, el cliente solicita la factura en epub comprimido con ZIP y de no tenerlo, en pdf o json por orden de preferencia. El servidor le devuelve finalmente la factura en pdf.


### Nivel 3: Hypermedia.


A pesar de lo que nos pueda inducir a pensar el término retrofuturista **Hypermedia**, el concepto y la finalidad que busca describir es bastante sencillo:** conectar mediante vínculos las aplicaciones clientes con las APIs**, permitiendo a dichos clientes despreocuparse por conocer de antemano del cómo acceder a los recursos.

Con Hypermedia básicamente añadimos información extra al recurso sobre su conexión a otros recursos relacionados con él.

Aquí tenemos un ejemplo:

```
<pedido>
 <id>666</id>
 <estado>Procesado</estado>
 <links>
   <link rel="factura">
       http://example.com/api/pedido/666/factura
   </link>
 </links>
</pedido>
```

En este ejemplo vemos cómo indicar en un xml que representa un pedido, el enlace al recurso de la factura relacionada con el mismo.

Sin embargo, necesitamos que el cliente que accede a nuestra API entienda que esa información no es propia del recurso, sino que es información añadida que puede utilizar para enlazar el pedido con la factura.

Para ello conseguir esto, debemos utilizar las cabeceras Accept y Content-Type, para que tanto el cliente como la API, sepan que están hablando hypermedia.

Por ejemplo:

```
Petición
========
GET /pedido/666
Accept: application/nuestra_api+xml, text/xml

Respuesta
=========
Status Code: 200
Content-Type: application/nuestra_api+xml
Content:

<pedido>
 <id>666</id>
 <estado>Procesado</estado>
 <links>
   <link rel="factura">
        http://example.com/api/pedido/666/factura
   </link>
 </links>
</pedido>
```

Como vemos, el cliente solicita el formato **application/nuestra_api+xml** de forma preferente al formato text/xml. De esta forma, le indica al servicio web, que entiende **su formato** **hypermedia** y puede aprovecharlo.

El servicio web por lo tanto, como implementa hypermedia, le devuelve la información de recurso y la información de hypermedia que puede utilizar el cliente.

Hypermedia es útil por ejemplo para que el cliente no tenga que conocer las URLs de los recursos, evitando tener que hacer mantenimientos en cada uno de los mismos si en un futuro dichas URLs cambian ([cosa que no debería pasar](http://www.w3.org/Provider/Style/URI.html)). También es útil para automatizar procesos entre APIs sin que haya interacción humana.


### Conclusión


Como hemos visto, los principios básicos para construir APIs REST se basan en conocer sobre todo HTTP, algo que no es opcional para un desarrollador web.
