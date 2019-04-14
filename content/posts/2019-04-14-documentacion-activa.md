---
title: Documentación activa
date: "2019-04-14 19:34:01+00:00"
template: "post"
draft: false
slug: "/2019/documentacion-activa/"
category: "Desarrollo"
tags:
  - "Desarrollo"
  - "Devops"
  - "Documentación"
description: "Durante los últimos años he tenido varias experiencias tratando de implantar una cultura de documentación en distintas empresas y equipos con los que he trabajado.  
  

Este artículo es un resumen de las charlas que he impartido en los últimos dos años basadas en dichas experiencias con el fin de explicar qué es la documentación activa y por qué puede ser clave para implantar una cultura de documentación de forma efectiva en una empresa o un equipo de desarrollo de software."
---

Durante los últimos años he tenido varias experiencias tratando de implantar una cultura de documentación en distintas empresas y equipos con los que he trabajado.  

Este artículo es un resumen de las charlas que he impartido en los últimos dos años basadas en dichas experiencias con el fin de explicar qué es la documentación activa y por qué puede ser clave para implantar una cultura de documentación de forma efectiva en una empresa o un equipo de desarrollo de software.

### Nuestro concepto clásico de documentación
![](/media/documentacion-activa/Screenshot%202019-04-14%20at%2012.31.46.png)

Una de las razones principales por las que documentar es una tarea que se percibe como “cara” en tiempo y esfuerzo radica en nuestro concepto de generación de la misma. Esto se une a malas experiencias que hayamos podido sufrir al crearla o consumirla.

Cuando pensamos en documentación, asociamos en nuestra mente la necesidad de recibir o crear un documento. Este documento será un “entregable” en formato docx, pdf o similar. 

Si dicho documento está escrito con mimo, es decir sin una prisa evidente por terminarlo tras haberlo dejado para la fase final del proyecto, nos quedará asegurarnos de que dicho documento se mantenga actualizado en el tiempo. Con este fin, se suele incluir una tabla al principio del mismo, para registrar los cambios que se vayan produciendo en el. 

Una vez entregado y concluido el proyecto (al menos en principio) en nuestra mente únicamente quedará la esperanza disfrazada de expectativa de que dicho documento se mantenga actualizado cada vez que se realice un cambio o actualización en nuestro producto. **Pero esto rara vez ocurre** y lo sabemos.

Tenemos varios problemas con esta forma de trabajar:

* La documentación está en un formato final que puede ser copiado, alterado y editado en una de sus copias. Esto nos provoca inseguridad al no saber con certeza que disponemos de la versión más actualizada del documento.
  
* El formato a veces nos obliga a consumir información crítica con una herramienta de software concreta. Y también a duplicar la información si debemos entregar la documentación a diferentes destinatarios en diferentes formatos, haciendo más compleja la gestión y control de las versiones.
  
* La documentación está ligada a un entregable. Si la persona que gestiona el proyecto no tiene suficiente experiencia o la cultura tecnológica de la empresa no da pie a incluir requisitos de documentación en el [definition of done](https://en.wikipedia.org/wiki/Scrum_(software_development)#Definition_of_done_(DoD)) de una tarea, es posible que en el mejor de los casos, este trabajo quede en la fase final en el Gantt (o en un falso “agile sprint”) del proyecto. Esta fase de “documentación y pruebas” suele coincidir con retrasos en funcionalidad comprometida en fechas haciendo que sea el peor momento para redactar algo con un mínimo de cariño.
  
* Otra posibilidad es que nuestra documentación sea el resultado de un análisis realizado en una fase previa al inicio del proyecto. Este documento puede darnos cierto contexto del origen pero nunca nos podrá dar ningún tipo de fiabilidad de que nos sirva para algo tras finalizar el desarrollo por la propia naturaleza del desarrollo del software. Nunca vamos a estar a salvo de cambios, redefiniciones y descubrimientos continuos.
  
* Esta documentación estará alejada del código de nuestro proyecto, por lo que con el tiempo, el punto único de verdad será el código que tenemos en producción. Perderemos contexto del por qué de la implementación realizada y del impacto real en el negocio y otros componentes de la arquitectura o productos de software con los que nuestro desarrollo se comunique o integre.


**Es muy fácil que nuestra documentación se enfríe**

Pongamos un ejemplo típico en el que nos llega una especificación en formato docx para construir un servicio que va a estar disponible mediante una API REST.

![](/media/documentacion-activa/Screenshot%202019-04-14%20at%2013.06.00.png)

A partir de dicho documento, creamos la especificación en Open Api y mediante la misma, comenzamos a desarrollar el servicio.  

Nuestros compañeros de front utilizan esa especificación para generar mocks automáticamente y no tener que esperar a que terminemos el servicio para poder empezar a construir su aplicación web progresiva.

Resulta que nos damos cuenta de que no se había contemplado una necesidad en el comportamiento de nuestra API.

![](/media/documentacion-activa/Screenshot%202019-04-14%20at%2013.09.56.png)

Aplicamos el cambio en el código y en la especificación para que nuestros compañeros de front puedan volver a generar sus mocks y puedan trabajar teniendo en cuenta este cambio.

Al hacer esto, nuestra especificación inicial se vuelve automáticamente obsoleta.

![](/media/documentacion-activa/Screenshot%202019-04-14%20at%2013.12.29.png)

En este momento, nuestro punto único de información reside en la especificación del Open API y no en el documento. Sin embargo, el Open API recoge cierta información, pero no toda, perdiendo información sobre el comportamiento y requisitos de negocio.  
La situación se vuelve mucho peor si ni siquiera contásemos con la especificación del Open API.

Cuando pasen los años y otro equipo de desarrollo que no disponga de toda la información que se ha ido omitiendo durante ese tiempo asuma el desarrollo del mismo, no les quedará más remedio que volverse arqueólos del software.

### Arqueología de software
![](/media/documentacion-activa/1IaR.gif)

> Software archaeology or software archeology is the study of poorly documented or undocumented legacy software implementations, as part of software maintenance.   
> Software archaeology, named by analogy with archaeology, includes the reverse engineering of software modules, and the application of a variety of tools and processes for extracting and understanding program structure and recovering design information.  
> — Wikipedia  

La anterior cita, además de en la Wikipedia, forma parte de este interesante [paper de Gregorio Robles,  Jesus M. Gonzalez-Barahona e Israel Herraiz](http://herraiz.org/papers/english/icsm05short.pdf) además de hablarse sobre ello en el libro [Eating the IT Elephant: Moving from Greenfield Development to Brownfield de Richard Hopkins y Kevin Jenkins](https://www.goodreads.com/book/show/2950819-eating-the-it-elephant)

Si llevamos un tiempo en el desarrollo de software, seguramente hayamos heredado más de una vez un proyecto sin documentación o peor aún, con documentación poco fiable. En otras situaciones, debemos migrar un desarrollo existente para poder actualizarlo, mejorar su mantenimiento o quizás poder a llegar a incluir alguna funcionalidad nueva sin que impacte en el resto de funcionalidades o el sistema del que esa pieza forma parte.

La única solución para conocer con seguridad qué hace ese software y cual es su impacto a nivel global, es estudiar sus entrañas y empezar a cubrir con tests de caja negra para ir ganando control y [entendimiento compartido](https://www.igi-global.com/dictionary/shared-understanding/26788) del equipo sobre el mismo.

Sobra decir que esto es un proceso caro. Incluso con la idea de crear una estrategia de refactoring o en el caso más extremo, la re-escritura total del proyecto, ese tiempo de análisis puede llegar a ser más caro en tiempo o recursos que la propia ejecución del proyecto. A pesar de todo, esta inversión será necesaria para no encontrarnos con la misma situación en el futuro.

En estas situaciones es donde se ve claro el valor de tener una documentación bien actualizada y eliminar toda "isla de conocimiento". Pero esto no es fácil e implica cambios de cultura en el trabajo del equipo.

### Cómo empezar
En todo momento estoy haciendo referencia en un cambio de cultura. **Cambiar una cultura no es nada sencillo**.

Un cambio de cultura implica pensar a largo plazo, estar alineados como equipo y tener margen de acción. No todos los entornos son favorables.

Incluso en entornos ágiles de verdad, es complicado añadir una cultura de documentación de entrada y sin preparación. Por esto considero clave el introducir documentación activa en los procesos de Integración continua.

Una vez conseguido esto, podemos ir mejorando e introduciendo más mecanismos, roles y protocolos para mejorar nuestra documentación y la cultura de equipo.

### Introduciendo pipelines de documentación activa

La documentación activa nos permite conseguir varias cosas:
* Generar documentación automáticamente a partir de especificaciones o contratos que ya tenemos que definir obligatoriamente para que nuestro software funcione o se integre con otros sistemas
* Tener un único punto de verdad que se actualice constantemente
* No depender de formatos entregables finales
* Que nuestra documentación forme parte de nuestro ciclo de integración y entrega continuos

![](/media/documentacion-activa/Screenshot%202019-04-14%20at%2015.28.27.png)

#### Markdown como formato central
Markdown nos ofrece muchas ventajas para ser utilizado como documentación:

* Es independiente de formato, es un lenguaje simple de marcado basado en texto plano
* Hay muchísimas utilidades para generar entregables en PDF, Docx, HTML
* Hay opciones de CMS maduras que nos permiten generar portales de documentación a partir de archivos Markdown

En varias ocasiones hemos seguido la estrategia de generar portales de documentación con herramientas como [VuePress](https://vuepress.vuejs.org/) a partir de archivos de markdown que se organizaban dentro de una carpeta /docs que la raíz del proyecto.

Esos archivos podían ser escritos a mano, pero también podían incluir transformaciones de otros formatos como Swagger, JSON Schema e incluso Gherkin a formato Markdown.

![](/media/documentacion-activa/pipeline.png)

Tanto la documentación escrita como la documentación activa pasan por el mismo pipeline que entraría en un ciclo de Integración Continua. 

De esta forma conseguimos regenerar de forma automática tanto el portal de documentación como los formatos entregables en cada actualización del código y de documentación que se mergee en la rama master (o de desarrollo, según nuestra estrategia).

Podemos complicar el pipeline tanto como nos apetezca, por ejemplo incluyendo la indexación de toda la documentación en un servicio de búsqueda centralizada para poder encontrar cualquier información de forma más sencilla. 

Cada pipeline dependerá de las necesidades concretas de cada equipo.

Como nota curiosa, otros sectores están empezando a crear sus propios pipelines con una idea similar. En el artículo [La edición como edición continua](https://marianaeguaras.com/la-edicion-como-edicion-continua/) de Ramiro Santa Ana Anguiano, podemos ver cómo se puede aplicar esto a la edición tradicional.

#### ¿Qué podemos utilizar como documentación activa?

Seguramente como equipo ya estaremos escribiendo documentación sin ser conscientes de ello. 

Para hacer viable nuestro trabajo escribimos tests unitarios y de integración, especificaciones, contratos, recetas de despliegue u orquestación de infraestructura… todo ello puede hacernos comprender en detalle los requisitos, finalidad y objetivos de negocio de los mismos.

Algunas de estas herramientas pueden ser las siguientes:

**Open API/Swagger**

[Open API](https://www.openapis.org/) es una evolución de [Swagger](https://swagger.io/) para especificar APIs REST, WebHooks y posiblemente [Websockets](https://github.com/OAI/OpenAPI-Specification/issues/523) en el futuro.

Esta herramienta nos permite generar documentación en varios formatos e incluso código de clientes para consumir nuestro API y mocks partiendo de una especificación escrita en formato YAML.

Open API es muy maduro gracias a la adopción que ha tenido Swagger en los últimos años y podemos gozar de compatibilidad con diferentes frameworks y tecnologías disponibles.

También contamos con la posibilidad de transformar directamente el archivo YAML a formato Markdown gracias a [esta herramienta de Rubens Mariuzzo](https://github.com/rmariuzzo/markdown-swagger)

**AsyncAPI**

[AsyncAPI](https://www.asyncapi.com/) es una iniciativa similar a Open API pero que desarrolla una especificación para APIs de mensajería o comunicación asíncrona.  

Documentar los payloads de los eventos de nuestro sistema es algo fundamental sobretodo en arquitecturas orientadas a eventos como las que se basan en Microservicios.

**JSON Schema**

JSON Schema es una herramienta muy útil para especificar y validar documentos JSON que van a ser integrados o almacenamos en un sistema.

Algunos servicios de mensajería y bases de datos documentales soportan JSON Schema para validar lo que se envía a ellos antes de aceptarlos. En servicios que no los soporten suele ser buena práctica validarlos desde el lado del consumidor o productor del mensaje en nuestra aplicación.

[Existe una herramienta de Adobe](https://github.com/adobe/jsonschema2md)  que nos permite convertir archivos JSON Schema complejos a archivos Markdown.

**Gherkin**

Gherkin es un lenguaje creado para escribir especificaciones que además nos sirvan como tests automáticos de aceptación. 
Aunque se creó bajo el paraguas de la herramienta Cucumber del ecosistema Java, Gherkin es independiente de tecnología y frameworks, lo cual lo hace muy versátil y aceptado de forma general en la comunidad de desarrollo.

Al ser una herramienta para probar nuestro software, tenemos la oportunidad perfecta para usarlo como documentación que debe estar continuamente actualizada.

Para aprovechar todo su potencial, lo ideal es seguir la metodología [Specification by example](https://en.wikipedia.org/wiki/Specification_by_example).  
Esta metodología aplicada a Gherkin considero que es la mejor práctica para disponer de documentación de negocio siempre viva.

Uno de los mejores libros que he leído sobre la misma es [Bridging the Communication Gap: Specification by Example and Agile Acceptance Testing](https://www.amazon.com/Bridging-Communication-Gap-Specification-Acceptance/dp/0955683610) de Gojko Adzic.

Un ejemplo de feature de Gherkin sería este:
```gherkin
Feature: Free shipping

  We want to offer free shipping in orders sent within our country at this moment.  
  The minimun quantity for a free shipping must be 100€

  Scenario Outline: Orders over $100 should be shipped for free

    Given items worth <purchase> in John's cart
      And shipment to <country>
     When John proceeds to checkout
     Then he should be offered <shipping>

    Examples: Restrict free shipping to Spain
      | country | purchase | shipping      |
      | ES      | 99€      | 5€ shipping   |
      | ES      | 100€     | free shipping |

    Examples: Other countries don't have free shipping
      | country | purchase | shipping      |
      | Canada  | 99€      | 5€ shipping   |
      | Canada  | 100€     | 5€ shipping   |
      | Poland  | 99€      | 5€ shipping   |
      | Poland  | 100€     | 5€ shipping   |
      | Egypt   | 99€      | 5€ shipping   |
      | Egypt   | 100€     | 5€ shipping   |
      | Japan   | 99€      | 5€ shipping   |
      | Japan   | 100€     | 5€ shipping   |

```

Como vemos, además de dejar claro en los ejemplos el comportamiento que queremos conseguir y asegurar en nuestro software, tenemos la posibilidad de añadir todo el contexto que queramos.

He trabajado mucho con Gherkin en los últimos años y es una de mis herramientas favoritas. Existen muchas técnicas que se pueden utilizar para escribir un buen Gherkin que sirva como guía de usuario y documentación de negocio, además de servir como tests de aceptación.  
El libro [Writing Great Specifications: Using Specification By Example and Gherkin](https://www.amazon.com/Writing-Great-Specifications-Specification-Example/dp/1617294101) de Kamil Nicieja es un gran recurso para aprenderlas.

Hay herramientas como [Pickles](http://www.picklesdoc.com/) que permite generar diferentes formatos a partir de Gherkin con Markdown embebido.  
También podemos transformar Gherkin en Markdown cada archivo feature gracias a [gherkin2markdown](https://github.com/raviqqe/gherkin2markdown)

**Otras herramientas que pueden servir como documentación activa**

* Archivos .env
* Archivos de herramientas de gestión de dependencias, requisitos y mantenimiento como package.json, pom.xml o composer.json
* docker-compose.yaml
* JavaDoc/PHPDoc

Nos puede interesar o no llegar a incluirlas en nuestra documentación, pero todas estas y otras similares nos pueden ayudar a dejar visible y de forma centralizada información relevante acerca de nuestro proyecto.

### Otro tipo de documentación no activa

#### Archivos Readme

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Remember, a few hours of trial and error can save you several minutes of looking at the README.<p>&mdash; I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/status/1060067235316809729?ref_src=twsrc%5Etfw">November 7, 2018</a></p></blockquote>

Los archivos README de los repositorios son una oportunidad para dar información relevante de un sólo vistazo en cada repositorio de código. 
Cuidarlos es esencial, y no sólo en proyectos Open Source.

Dependiendo de nuestras necesidades y del proyecto puede ser interesante incluirlos en nuestro pipeline.

#### ADR: Architectural decision records

[Los ADR](https://adr.github.io/) son una potente herramienta para anotar las decisiones que tomamos a nivel técnico. 
Se basan en archivos Markdown con la siguiente estructura:

```markdown
# ID-1. Markdown format

Date: 2016-02-12

## Status

Accepted

## Context

The decision records must be stored in a plain text format:

* This works well with version control systems.

* It allows the tool to modify the status of records and insert
  hyperlinks when one decision supercedes another.

* Decisions can be read in the terminal, IDE, version control
  browser, etc.

People will want to use some formatting: lists, code examples,
and so on.

People will want to view the decision records in a more readable
format than plain text, and maybe print them out.


## Decision

Record architecture decisions in [Markdown format](https://daringfireball.net/projects/markdown/).

## Consequences

Decisions can be read in the terminal.

Decisions will be formatted nicely and hyperlinked by the
browsers of project hosting sites like GitHub and Bitbucket.

Tools like [Pandoc](http://pandoc.org/) can be used to convert
the decision records into HTML or PDF.


```

Los ADR son clave para anotar también la deuda técnica que vamos asumiendo en nuestro proyecto y sus consecuencias.

Existen herramientas como [adr-tools](https://github.com/npryce/adr-tools) que nos facilitan la creación de estos archivos.

#### Glosarios

Los glosarios surgen de la necesidad de documentar términos no sólo para tener un entendimiento compartido por nuestro equipo y otros equipos de otras áreas de la empresa, sino también para modelar y nombrar aspectos de dominio de nuestro software.

Gestionar glosarios no es una tarea sencilla ya que además de exponer de qué se trata cada término, hay que detallar en qué contextos se utiliza y cuáles son los términos a los que equivale en otros.

Si partimos de cero, es posible que nuestro glosario sea más sencillo de componer en el caso de tener una disciplina o procedimiento para ir documentándolo y consensuándolo a medida que surgen las dudas. 

En contextos en los que se parta de un software en producción en el que no ha habido un ejercicio de documentar el glosario, nos tocará recopilar términos a los que nuestro software ya esté acoplado, documentarlos y asociarlos a los términos que finalmente acordemos en el equipo.

#### Convenciones y nomenclatura

Unas de las mejores prácticas que he visto aplicar es la de elaborar convenciones a la hora de nombrar diferentes aspectos de nuestro software, documentar dichas decisiones y comunicarlas a otros equipos para que también las sigan.

Por ejemplo, si todos los topics de Kafka o colecciones de Mongo siguen la misma estructura de nombres, incluyendo información útil (dependiendo de nuestros intereses) como la versión y nombre de entorno, el impacto en el día a día a medio y largo plazo es muy importante tanto para nuestro equipo como para otros equipos con los que colaboremos.

### Retos adicionales

Hemos hablado de muchas cosas en este artículo y las mismas no están libres de retos.

#### Versionado

El principal reto de utilizar contratos y especificaciones es el gestionar el versionado de los mismos.  

El versionado nos implica bastante trabajo y en algunas ocasiones complejidad extra ya que por norma general debemos mantener compatibilidad con clientes u otros componentes que utilicen versiones anteriores y que no siempre puedan tener el ritmo de actualización que nosotros tenemos.  
Sin embargo, también nos da mucho más control y nos reduce los problemas de escalado a largo plazo.

#### Implicaciones al compartir el repositorio de la documentación con el del código

Tenemos que tener en cuenta que quizás nuestra documentación sufre cambios pero nuestro código no.  
En algunos contextos, tenemos que gestionar este tipo de cosas para que no se nos dispare el ciclo de generación de un artefacto con una versión nueva por cada cambio de documentación integrado en nuestro repositorio.

Hay aproximaciones como separar la documentación en una rama aparte o utilizar los sistema de wiki que incluyen servicios como Github o Gitlab.

#### Asegurar el mantenimiento de la documentación no activa

Tarde o temprano tenemos que asegurar que la documentación no activa esté actualizada.

Este es uno de los grandes retos que tenemos al documentar y por lo que la mejor estrategia debe ser aprovechar al máximo posible todo recurso que pueda servirnos como documentación activa.

Tarde o temprano tendremos que evaluar si necesitamos incluir roles en nuestro equipo que se encarguen de este trabajo e incluso dispongan de dedicación total para mantener la documentación.

Esto dependerá mucho de nuestra empresa, proyectos y necesidades.

### Conclusión

En este artículo he tratado de transmitir de forma resumida gran parte de los puntos críticos que he visto en mi experiencia en los últimos años introduciendo culturas de documentación en diferentes equipos con los que he trabajado.

La documentación activa puede ser un gran recurso para tener una buena base de partida y complementaria a una documentación que implique más inversión de recursos.













