---
author: asier
comments: true
date: 2011-09-30 21:24:40+00:00
layout: post
link: http://asiermarques.com/2011/jugando-con-ips-y-redes-en-php/
slug: jugando-con-ips-y-redes-en-php
title: Jugando con ips y redes en php
wordpress_id: 1978
categories:
- Desarrollo Web
---

Por la naturaleza de mi entorno profesional, lidio con conceptos de IT y redes en mi día a día que me ayudan a tener frescos conceptos que aprendí hace ya algún tiempo cursando el temario del programa [CCNA](http://www.cisco.com/web/learning/netacad/course_catalog/CCNAexploration.html) de Cisco y del [MCSE](http://www.microsoft.com/learning/en/us/certification/mcse.aspx) de Microsoft.

Concretamente en el área de redes, es muy útil saber cómo hacer subredes o saber a qué red pertenece una ip en concreto haciendo operaciones AND binarias con las máscaras y direcciones a evaluar.


### Refresco de conceptos


Las direcciones ip se clasifican en lo que llamamos "clases de red" según el número de hosts que dichas redes puedan soportar (siendo un host un ordenador, impresora o cualquier cacharro que conectemos a dicha red).

Usamos comúnmente las siguientes clases de red:



	
  * Clase C, la más común, que puede tener hasta 254 dispositivos host conectados.

	
  * Clase B, que puede tener hasta 65.534 dispositivos host conectados.

	
  * Clase A, que puede tener hasta 16.777.214 dispositivos host conectados.


Para saber de qué clase es una red o una dirección ip, usamos [máscaras de red](http://es.wikipedia.org/wiki/M%C3%A1scara_de_red). Las máscaras de red se componen de 4 fracciones y en cada una podemos rellenar hasta 8bits.

En una dirección de clase C tendremos un total de 24bits, en binario podríamos expresarla entonces como 11111111.11111111.11111111.00000000 (24bits = 8bits + 8 bits +8bits + 0bits) y en decimal como 255.255.255.0 .

No necesitamos escribir la máscara completa para indicar que la ip 192.168.1.2 es de clase C por ejemplo, bastaría con indicar al final de la misma que su máscara tiene 24bits de la siguiente forma: 192.168.1.2/24 .

En el resto de clases, tendríamos 8bits para las redes de clase A y 16bits para las de clase B.

Sin embargo, aunque en entornos domésticos o de mediana empresa se usen estas clases de red para crear las redes a las cuales se conecten los ordenadores, servidores e impresoras de la organización, en una empresa que provee servicios de internet o que tiene muchos departamentos, le es muy útil poder partir esas redes en subredes.

Hay escenarios en los que nos interesa tener varias subredes con un número concreto de equipos en cada una de ellas. De esta forma aislamos a qué recursos puede acceder uno o varios equipos de una determinada subred.

Para hacer subredes lo que se suele hacer es usar máscaras de red personalizadas. Por ejemplo, si tenemos la ip 192.168.129.3/18, tal y como hemos visto antes sabemos que su máscara de red tiene 18bits, es decir en binario 11111111.11111111.11000000.00000000 y en decimal 255.255.192.0. Ahora bien, al no tener una máscara de 16bits o de 24, ya que tenemos una fracción de las 4 sin rellenar totalmente por bits en la máscara de subred, no podríamos decir que esa ip pertenece a la red 192.168.129.0/24, ya que esta sería una dirección de red de clase C y la nuestra no pertenece a esa clase.

Para saber a qué dirección de red pertenece tenemos que hacer una operación AND a nivel de bits binarios entre la dirección ip y su máscara de red.

En este caso la operación quedaría así:

![Operación con ips](http://asiermarques.com/wp-content/uploads/2011/09/and-ips.jpg)

Al final deducimos que la dirección de red a la que pertenece la ip 192.168.129.3 es 192.128.0.0.

También podemos realizar operaciones para saber la cantidad de dispositivos que se pueden conectar a una determinada red o calcular una red que pueda albergar un determinado número de equipos.

Para calcular el número de dispositivos usamos la función **2**x** -2 **donde X es la cantidad de bits disponibles en una subred es decir, el número de ceros que quedan al final de la misma. En la máscara de 18 bits que hemos usado en el ejemplo (11111111.11111111.11000000.00000000) serían 14 los bits disponibles (32bits posibles totales - 18 que estamos usando). 

Aplicando la fórmula nos daría un total de 16.382 cacharros que podríamos conectar a nuestra red.


### Utilizando php para realizar estos cálculos.


En php disponemos de una serie de funciones y operadores que nos hacen muy sencillo realizar cálculos de este tipo y automatizar este trabajo que de hacerlo manual nos haría consumir tiempo y estaría propenso a errores.

En este escenario utilizaremos tan sólo dos cosas:



	
  * La función **[ip2long](http://php.net/manual/es/function.ip2long.php)** para pasar una dirección ip separada por puntos a su representación numérica para poder realizar operaciones posteriores con ella.

	
  * La función **[decbin](http://es.php.net/manual/es/function.decbin.php)**, para pasar de decimal a binario.

	
  * El operador bitwise **&** que es el que realizará la **operación AND** a nivel binario.


Volviendo al anterior ejemplo, podemos saber a qué dirección de red pertenece la ip 192.168.129.3/18 de la siguiente forma:

[code language="php"]

$ip_en_binario        = decbin( ip2long( "192.168.129.3" ) );

$mascara_en_binario   = decbin( ip2long( "255.255.192.0" ) );

$resultado_en_binario = $ip_en_binario & $mascara_en_binario;

echo long2ip( bindec( $resultado_en_binario ) );

[/code]

Tal y como esperábamos, el resultado que nos devuelve este script es 192.168.128.0, que es la dirección de red a la que pertenece la ip 192.168.129.3/18.

Con este sencillo ejemplo vemos el juego que le podemos sacar a todo esto.

Por un lado se ve de forma clara que si queremos saber a qué red pertenece una ip dada de todas las que tenemos en nuestra empresa, las cuales almacenamos en una base de datos, bastaría con pasar a binario cada ip y compararla al resultado de la operación efectuada en el ejemplo.

Pero lo realmente útil es saber que podemos guardar en base de datos la dirección directamente en binario, ahorrando un espacio importante en la tabla al evitarnos usar un campo tipo texto (clave para el rendimiento con índices en motores como inndb de mysql) y realizar directamente la búsqueda contra el registro que necesitemos.

También podríamos conocer muy fácilmente con la formula que hemos visto antes, el número de equipos que puedo conectar a una red seleccionada y en base a las ips que podríamos tener registradas, los "huecos" e ips disponibles para los equipos nuevos que tenga que conectar a esa red en un futuro.
