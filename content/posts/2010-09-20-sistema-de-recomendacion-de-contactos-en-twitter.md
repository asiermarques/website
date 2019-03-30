---
date: 2010-09-20 01:34:54+00:00
layout: post
slug: /2010/sistema-de-recomendacion-de-contactos-en-twitter/
title: 'Idea: sistema de recomendación de contactos en Twitter'
template: post
tags:
  - Desarrollo Web
  - Emprendedores
  - Ideas de proyectos
  - Innovación
  - Internet
  - Mis Proyectos
  - Personal
  - '[Pe]n[sa]n[do]'
category: Desarrollo
draft: false
---

Desde hace un tiempo he estado dándole vueltas a un sistema de recomendación de contactos en twitter.

Filtrar por listas es efectivo para seguir las actualizaciones de las personas que más me interesa lo que suelen decir, pero de vez en cuando suelo consultar el stream del resto para captar nuevos contactos o enterarme de cosas que no veo en estas listas privadas.

He observado que podría automatizar el flujo de entrada y salida de contactos en las listas que he creado, para ello necesitaría crear un sistema que en base a ciertos patrones me sugiriese qué usuarios debo dejar de seguir en mis listas y cuales debo agregar.

Existen herramientas como [http://www.muuter.com/](http://www.muuter.com/) (gracias [César](http://cesarodas.com/) por la [recomendación](http://twitter.com/crodas/statuses/24875166684)), que permiten silenciar actualizaciones que contengan palabras que no quiero leer. Esto no me termina de convencer, ya que es posible que no me moleste que puntualmente un contacto diga "goool" (no me gusta el fútbol), o que mencione lo bueno que es su trabajo como SEO/socialmedia (bueno quizá en estos casos si que me vería tentado a dejar de seguirle :)

El sistema que propongo se basaría principalmente en lo contrario, es decir sería un sistema de recomendación basado principalmente en [listas blancas](http://es.wikipedia.org/wiki/Lista_negra).

De entrada se me ocurren los siguientes requisitos:



	
  * Dado que el sistema no me podría dar la información nada más registrarme, debería guardar mis contactos en su base de datos y evaluar sus updates cada cierto tiempo para compararlos a los criterios que he especificado en mis listas blancas y negras. Cada semana me podría sugerir nuevos cambios en mis listas privadas es decir, si debo agregar o quitar a alguien de las mismas.

	
  * Ya que la aplicación seguiría updates de mis contactos, y de los contactos de los demás usuarios, no estaría mal que me recomendase contactos que no esté siguiendo actualmente.

	
  * La aplicación analizaría mis propios updates, extrayendo las palabras que más repito usando estas como un criterio para distinguir una posible afinidad con respecto a otros usuarios. Podría tomar dichas palabras como criterios para una lista blanca y las que estén tageadas (es decir con #) en un update con la etiqueta #ironic en una lista negra.

	
  * La aplicación me permitiría poner una serie de filtros basados en expresiones regulares. Las [expresiones regulares](http://es.wikipedia.org/wiki/Expresi%C3%B3n_regular), aunque son difíciles para un usuario normal, permiten una mayor precisión de filtrado, que es lo que más me interesa. Gracias a ellas podría filtrar mucho más fácilmente usuarios que les guste el fútbol, hagan retweets sin aportar nada sobre temas que no quiero seguir o al revés, el sexo del contacto en base a las terminaciones sintácticas de ciertas palabras e infinidad de filtros mucho más flexibles que pudiese tener con simples palabras clave o la api del propio twitter. Estos filtros podría aplicarlos tanto en listas blancas como en listas negras.

	
  * Para dar más precisión a las listas blancas, la aplicación me permitiría especificar palabras clave y [otros criterios](http://search.twitter.com/advanced) más típicos en una aplicación de este tipo.


El algoritmo que evalúe qué contactos de twitter deben estar en las listas que sigo o cuales no, deberá calcular estas prioridades según los criterios descritos anteriormente y su recurrencia en los updates de estos usuarios. Es decir, si un usuario tiene muchos updates seguidos con criterios en una lista negra, se irá antes de mi bandeja de entrada que un usuario que tenga los mismos updates pero en intervalos de tiempo más largos y con otros updates de por medio que sí me interesen.

Pienso que podría ser una aplicación muy útil, si tenéis alguna sugerencia u os parece una tontería, dejad comentario.


[![Domo-kun and devil ducks](http://farm4.static.flickr.com/3263/2801833980_2e5d6215bd.jpg)](http://www.flickr.com/photos/monkeyjenn/2801833980/)


Siempre es interesante ver otros puntos de vista y aportaciones :)
