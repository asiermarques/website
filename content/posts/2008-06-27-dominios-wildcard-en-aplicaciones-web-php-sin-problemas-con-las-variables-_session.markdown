---
author: asier
comments: true
date: 2008-06-27 04:36:56+00:00
layout: post
link: http://asiermarques.com/2008/dominios-wildcard-en-aplicaciones-web-php-sin-problemas-con-las-variables-_session/
slug: dominios-wildcard-en-aplicaciones-web-php-sin-problemas-con-las-variables-_session
title: Dominios WildCard en aplicaciones web php sin problemas con las variables $_SESSION
wordpress_id: 581
categories:
- Desarrollo Web
- Sistemas
---

Muchos os habréis fijado en servicios web que usan subdominios dinámicos (wildcard) para las cuentas de sus usuarios, como por ejemplo [jaiku](http://asiermarques.jaiku.com/).

Sin embargo, una vez configurados los subdominios dinámicos, tenemos un serio problema y es que, las variables de sesión por defecto se pierden cada vez que ejecutamos la aplicación web desde un subdominio distinto al que hemos utilizado para crear dicha variable de sesión.

Podemos comprobar esto en algunos sitios web que no usan subdominios dinámicos pero, si hacemos login en su www.dirección.com, si después vamos a su dirección.com sin las 'www' nos encontramos con que no hemos iniciado sesión. El problema es similar y tiene la misma solución que en el caso de los wildcard domains.

Voy a explicar cómo solucionar este problema y como hacer funcionar subdominios dinámicos.

Los pasos:

**1 - Configurar el dns**

**2 - Configurar el servidor web**

**3 - Configurar bien el ámbito de las variables $_SESSION** en la aplicación php para que se compartan las variables de sesión entre los subdominios.

**Configurar el dns.**

Basta con crear una entrada tipo host es decir, "A" apuntando a *.tudominio.com . También vale con crear un CNAME * apuntando al registro A del dominio principal ("tudominio.com").

Si hacemos un ping a "loquesea.tudomino.com" debería ya resolver (a menos que tengas capado el tráfico ICMP claro)

**Configurar el servidor web.**

En [Apache httpd](http://httpd.apache.org/), debemos configurar en el vhost de nuestro dominio un [ServerAlias](http://httpd.apache.org/docs/2.0/mod/core.html#serveralias) que atienda a "*.midominio.com"

En [Nginx](http://nginx.net/), debemos configurar en la sección Server un valor [server_name](http://wiki.codemongers.com/NginxHttpCoreModule#server_name) como "*.midominio.com"

En [IIS](http://iis.net), debemos dejar un sitio virtual sin headers y ese es el que atenderá las peticiones de vuestro wildcard dns, es la única forma.

Se ha discutido sobre [este tema en el foro oficial de IIS](http://forums.iis.net/t/1095760.aspx) y según los propios desarrolladores, aunque ha sido demandada durante años, no se piensa implementar dicha funcionalidad por ahora, ni siquiera en IIS7.

Nota: sólo podemos disponer de un sitio web sin headers por servidor web IIS.

**Configurar nuestras variables de $_SESSION en php**

El truco esta en configurar [la directiva ](http://es2.php.net/manual/es/session.configuration.php)**[session.cookie_domain](http://es2.php.net/manual/es/session.configuration.php) **como ".midominio.com"** **(importante el** . **delante del dominio)**.**

Podéis hacerlo en tiempo de ejecución, antes de llamar a session_start(); siempre que tengamos deshabilitado el autoarranque de sesiones en el php.ini (como es lógico y viene por defecto)

    
    ini_set("session.cookie_domain",".midominio.com");
    session_start();


Ahora ya podéis crear servicios web tan útiles [como este](http://esgay.com).
