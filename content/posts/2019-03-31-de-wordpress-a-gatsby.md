---
title: Cómo he migrado este blog de WordPress a Gatsby
date: "2019-03-31 14:30:01+00:00"
template: "post"
draft: false
slug: "/2019/de-wordpress-a-gatsby/"
category: "Desarrollo"
tags:
  - "Desarrollo web"
  - "Personal"
description: "Este fin de semana he terminado de migrar este blog a Gatsby desde WordPress. Llevo desde el 2007 escribiendo artículos, posts y otras cosas por aquí y aunque WordPress ha servido muy bien, últimamente necesitaba otro sistema que estuviese más alineado con mis necesidades y formas de trabajar actuales."
---

Este fin de semana he terminado de migrar este blog a Gatsby desde WordPress. Llevo desde el 2007 escribiendo artículos, posts y otras cosas por aquí y aunque WordPress ha servido muy bien, últimamente necesitaba otro sistema que estuviese más alineado con mis necesidades y formas de trabajar actuales.

### Markdown como formato de escritura

Desde hace años [Markdown](https://en.wikipedia.org/wiki/Markdown) es mi formato preferido para escribir y documentar prácticamente cualquier cosa, incluso para [crear diagramas](https://mermaidjs.github.io/).  
Tenía muy claro que quería escribir en este formato.

Markdown es un formato para escribir en texto plano. Al ser texto plano, no sólo puedo escribir más rápido sino que el contenido se almacena lo más "limpio" posible, pudiendo generarse a partir de él documentos Word, archivos PDF, sitios web html estáticos y muchos formatos más gracias a herramientas como [Pandoc](https://pandoc.org/) o scripts que podemos crear en prácticamente cualquier lenguaje de programación.

### GIT como almacenamiento de los artículos

Podría utilizar cualquier almacenamiento como un servidor FTP, Amazón S3, Dropbox... pero GIT me da algo que el resto no: no me ata a un proveedor. Puedo tener un repositorio inicialmente en Github y replicarlo en Bitbucket, Gitlab o un servidor propio. De hecho, dicho repositorio puede estar replicado en todos esos servidores al mismo tiempo.

Actualmente [tengo el contenido almacenado en GItHub](https://github.com/asiermarques/website/tree/master/content/posts) y al editar cualquier cosa en el mismo, este sitio web se regenera de forma automática.

### Qué herramientas estuve barajando

#### Wordpress.com 

Inicialmente pensé en no complicarme y exporté todo mi contenido a un archivo xml de WordPress con la intención de importarlo después en el servicio en la nube de WordPress.com.  
De esta forma me olvidaba de mantener yo el blog en mi hosting y todo lo que esto conlleva. Pero no me convencía que el formato siguiese sin ser Markdown.

De hecho, el editor de WordPress parece cada vez más estar influenciado por los "diseñadores de páginas" de WordPress, que crean distintos bloques para organizar los contenidos en un artículo.  
Esto hace que el formato original del contenido cada vez sea más "sucio" y ligado a cómo WordPress almacena los contenidos.

#### Hugo, Jekyll, Gatsby y VuePress

Hay infinidad de "generadores de sitios web estáticos", entre ellos los que arriba comento. En mi opinión Jekyll está perdiendo popularidad en favor al resto de opciones.  
Para mí los que más se ajustaban a lo que necesitaba eran [VuePress](https://vuepress.vuejs.org/) y [Gatsby](https://www.gatsbyjs.org/).

VuePress me encanta, lo uso mucho para documentar y se basa en VUE que es un framework con el que he trabajado para desarrollar aplicaciones web en los últimos años. Sin embargo, para sitios web estáticos y concretamente tipo blog o magazine, Gatsby está bastante más maduro en comunidad.  
Gatsby se basa en React por lo que también tiene muy buena base y una sólida arquitectura basada en componentes que facilita mucho el personalizar de forma avanzada el template.

### La migración

Para migrar, me basé en este genial artículo de [Tania Rascia](https://www.taniarascia.com/migrating-from-wordpress-to-gatsby/) en el que describe su experiencia de migración.  
Mis pasos fueron los siguientes:
#### 1. Descargar el archivo de exportación de WordPress
Es un xml que puedes descargar desde cualquier WordPress.

#### 2. Correr la utilidad exitwp
[Es un pequeño script escrito en python](https://github.com/thomasf/exitwp) que lee el archivo xml de WordPress y te genera los archivos MarkDown en un directorio de cada post.

La utilidad me encontró algún error de formato de xml a la hora de validar el archivo y tuve que corregirlos a mano.  

#### 3. Limpiar los meta de cada archivo Markdown
Me hice un pequeño script en php que lo que hacía es transformar la meta información que exitwp te genera en cada archivo Markdown.  
Básicamente era añadir o cambiar campos YAML para que quedase una estructura similar a esta para que Gatsby fuese capaz de indexar cada artículo:

```yaml
---
title: Cómo he migrado este blog de WordPress a Gatsby
date: "2019-03-31 11:37:01+00:00"
template: "post"
draft: false
slug: "/2019/de-wordpress-a-gatsby/"
category: "Desarrollo"
tags:
  - "Desarrollo web"
  - "Personal"
description: "Este fin de semana he terminado de migrar este blog a Gatsby desde WordPress. Llevo desde el 2007 escribiendo artículos, posts y otras cosas por aquí y aunque WordPress ha servido muy bien, últimamente necesitaba otro sistema que estuviese más alineado con mis necesidades y formas de trabajar actuales."
---
```

El script era muy sencillo, básicamente lo que hacía era recuperar todos los archivos Markdown generados y por cada uno de ellos:
* Obtener la meta información en YAML y transformarla de formato YAML a un array de php
* Modificar los campos necesarios
* Generar de nuevo el texto YAML en base al nuevo array y sustituir el YAML antiguo por el nuevo


#### 4. Sustituir las rutas de wp-content/uploads por /media/ en las imágenes

Me negaba a bajarme todo el wp-content/uploads, por lo que me hice otro script en php que por cada archivo:
* Con una expresión regular obtuviese todas las rutas de imágenes alojadas en wp-content/uploads
* Se bajaba la imagen y la guardaba en el directorio /static/media de Gatsby
* Sustituía la ruta de wp-content/[...]/imagen.jpg por /media/imagen.jpg


#### 5. Elegir un tema de Gatsby y personalizarlo

Yo he elegido [Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) y aún sigo personalizándolo. Lo que hice inicialmente fue cambiar las rutas, traducir las cadenas al español (están sin parametrizar :() y ajustar la cultura para las fechas de moment.js al locale "es", de esta forma se muestran los meses en español.

#### 6. Comentarios

Para los comentarios tuve dudas. La primera es si tienen sentido los comentarios ahora mismo. Llegué a la conclusión de que sí y por eso he decidido dejarlos.

Gatsby tiene ya la opción de serie de enganchar con [Disqus](https://disqus.com), por lo que símplemente tuve que subir mi archivo xml de WordPress y ya ha importado los comentarios en este servicio.  
Aún estoy ajustando porque no hay reconocido bien alguna ruta o las ha duplicado, pero no es algo que me preocupe en exceso.

La otra alternativa que ví era [Staticman](https://staticman.net/) que permite tener los comentarios también el repositio GIT. Al no querer complicarme tanto, lo he dejado con Disqus.

#### 7. Otras cosas

Otras cosas que he ido ajustando son las redirecciones de las urls a las páginas estáticas (es un punto importante si te interesa tu SEO). A mí no me preocupa demasiado ahora mismo, pero lo hice igualmente con las páginas que más me interesaban.

Un detalle que se me pasó fue el cambiar la configuración del DNS para apuntar al nuevo servidor sin bajar los TTL antes, por lo que durante las primeras horas algunos visitantes veían el sitio anterior y otros el nuevo. No es algo que me preocupase en mi blog, pero es algo importante si hay que migrar un sitio con cierta relevancia o necesidad de disponibilidad.

### Conclusión

El resultado ha sido poder liberarme de WordPress como plataforma de blog y tener un cómodo sistema que me permite escribir con Markdown y publicar en HTML con un potente sistema de CD similar al que utilizo cuando trabajo programando.

Merece mucho la pena olvidarse de FTP, bases de datos y tener que gestionar otras cosas que no son sacar tiempo para escribir.