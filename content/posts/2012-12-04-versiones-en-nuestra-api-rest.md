---
title: Versiones en nuestra API REST
date: "2012-12-04 14:57:51+00:00"
template: "post"
draft: false
slug: "/2012/versiones-en-nuestra-api-rest/"
category: "Desarrollo"
tags:
  - "APIs"
description: "Una de las cosas que hay que tener en cuenta cuando hacemos una API es que esta, al igual que otro tipo de aplicaciones web, va a cambiar."
---

Una de las cosas que hay que tener en cuenta cuando hacemos una API es que esta, al igual que otro tipo de aplicaciones web, va a cambiar.

Si la API es pública o es consumida por una gran cantidad de clientes, es casi seguro que muchos de estos clientes queden obsoletos o no sigan al día las actualizaciones que tu equipo vaya haciendo en la misma.

La solución consiste en dar compatibilidad a las versiones anteriores y de alguna forma separar o que el cliente pueda indicar a qué versión está accediendo en cada momento.

Las opciones más habituales para hacer esto serían:


#### **Indicar la versión de la API en la URL del recurso.**


**https://api.dominio.com/v1/recurso/**

Este sería un ejemplo de URL en la que se indica la versión de la API en la misma.

Esta es la opción más aconsejada pero la que a mí personalmente menos me convence ya que los clientes que quisieran estar actualizados a la última versión, deberían modificar las rutas de sus llamadas al servicio constantemente.


#### **Indicar como parámetro la versión de la API**


**https://api.dominio.com/recurso/?v=1**

Este tipo de opción se usa por ejemplo en la API de YouTube.

Yo personalmente prefiero indicar como parámetros opciones para filtrar o tratar la información del recurso solicitado. Por ejemplo, paginaciones, órdenes, búsquedas, especificar información parcial etc.


#### **Indicar como header la versión de la API**


**https://api.dominio.com/recurso/ **
**"API version": 1**

Esta opción es la que más me convence, ya que no se ensucia la URL y si la aplicación cliente tiene las llamadas centralizadas en un único punto no debería ser problema añadir un header extra indicando la versión del API.

Después en el servidor podremos separar las versiones de las APIs en distintos servidores web o aplicaciones mediante un servidor proxy HTTP como Varnish que lea el header del request y sirva la versión de la API solicitada de forma transparente.

En javascript por ejemplo tendríamos el siguiente código para añadir un header http a nuestra llamada AJAX.

```

var request = new XMLHttpRequest();
request.open("GET", "https://api.dominio.com/recurso/", false);
request.setRequestHeader("API version", "1");
request.send();

```

En jQuery se añadiría el header de la siguiente forma.

```

$.ajax(
  "https://api.dominio.com/recurso/",
  {"headers": {"API version": "1"}}
);

```

En cualquier caso, se elija la opción que se elija es importante tener en cuenta que nuestra API puede cambiar en el futuro y facilitar la vida a los desarrolladores que programen los clientes de la misma siempre es una buena práctica.
