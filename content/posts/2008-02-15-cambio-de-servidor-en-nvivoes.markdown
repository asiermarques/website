---
author: asier
comments: true
date: 2008-02-15 08:49:20+00:00
layout: post
link: http://asiermarques.com/2008/cambio-de-servidor-en-nvivoes/
slug: cambio-de-servidor-en-nvivoes
title: Cambio de servidor en nvivo.es
wordpress_id: 453
categories:
- Desarrollo Web
- Internet
- Off Topic
- Personal
---

Tras la acogida que está teniendo [nvivo.es](http://www.nvivo.es) (con una media de 10.000 visitas diarias sólo de usuarios en España), plantear los nuevos cambios y ampliaciones tanto en la arquitectura del site como en el proyecto en sí, hemos decidido mudar la plataforma a un servidor dedicado en [ferca](http://ferca.es) que cumpliese con nuestros requisitos, y el cual administraremos nosotros.

El servidor es un **[Dell PowerEdge 1950](http://www1.la.dell.com/content/products/productdetails.aspx/pedge_1950_3) **con 4Gb de Ram y 2 procesadores Intel Low Volt Xeon 5148 de doble núcleo a 2,33GHz.

La tecnología más importante usada en nvivo es la siguiente:

**[Debian](http://debian.org)**. Nos ha parecido una opción cómoda y estable, que podríamos administrar de una forma ágil y cumple con nuestras necesidades.

**[Nginx](http://nginx.net).** Hemos podido comprobar que apache consume demasiados recursos incluso tras adaptar su configuración al tráfico de nuestro sitio, por ello hemos decidido implementar nginx, un servidor web y [reverse proxy](http://en.wikipedia.org/wiki/Reverse_proxy) bastante [más optimizado](http://www.apache-es.org/?p=50) y ligero desarrollado por [Igor Sysoev,](http://sysoev.ru/en/)  que a pesar de estar en beta y contar con muy poca documentación en inglés, está ganando adeptos gracias a su demostrada eficiencia.

Por nuestra experiencia hemos podido comprobar que no es nada dramático implementarlo y su configuración es bastante cómoda e intuitiva. Los cambios se pueden hacer en caliente, sin parar el servicio, tanto en configuración como en actualización del propio binario del servidor.

**[PHP](http://php.net) en [FastCGI.](http://www.fastcgi.com/)** Es requisito para servir aplicaciones php en nginx, y dicho requisito hace que la aplicación se sirva de una forma mucho más potente que si se sirviese en modo cgi normal. Esto es posible ya que trabajando en Fastcgi, no es necesario levantar el proceso cgi de php por cada petición, sino que php se mantiene levantado y responde de inmediato a las peticiones que le llegan desde el servidor.

[**Smarty**](http://smarty.php.net). Además de permitirnos separar la lógica de presentación y el html del resto de capas de la aplicación, juega un papel fundamental tanto en la caché del sitio como en su modularidad.

**[MemCached](http://www.danga.com/memcached/) **y [**eAccelerator**](http://eaccelerator.net/), que hacen posible que nuestra aplicación se ejecute mucho más rápido sin molestar a la base de datos.

[**Mysql 5.0**,](http://mysql.org) próximamente **con [sphinx](http://www.sphinxsearch.com/)** para búsquedas de texto completo.

Ahora lo tenéis [más difícil para perderos un concierto](http://www.nvivo.es) ;)
