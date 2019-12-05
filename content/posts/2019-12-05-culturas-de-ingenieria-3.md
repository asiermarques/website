---

title: "Culturas de ingeniería: madurez de nuestra cultura"
date: "2019-12-05 19:07:01+00:00"
template: "post"
draft: false
slug: "/2019/culturas-ingenieria-3/"
category: "Gestión"
tags:
  - "Desarrollo de software"
  - "Gestión"
  - "Engineering Management"
description: "En este artículo vamos a ver diferentes estados de madurez en los que puede estar una cultura de tecnología.

Es interesante saber reconocerlos y poner los medios para ir creciendo todos juntos como equipo."

---

Esta es la tercera entrada de una serie de artículos sobre culturas de ingeniería.
* [1. De qué hablamos cuando hablamos de cultura](https://asiermarques.com/2019/culturas-ingenieria-1/)
* [2. Por dónde empezar](/2019/culturas-ingenieria-2/)
* **3. Madurez de nuestra cultura**
* *4. Cultura de feedback (próximamente)*
* *5. Comunicación y documentación (próximamente)*

En este artículo vamos a ver diferentes estados de madurez en los que puede estar una cultura de tecnología.

La división que he elegido está inspirada en el libro [Elastic Leadership de Roy Osherove](https://www.manning.com/books/elastic-leadership) ya que en mi opinión, es la mejor que he visto y la comparto totalmente. 

No obstante, me he tomado la libertad de adaptarlos un poco en base a mi experiencia personal y he añadido algunos puntos que me resultan importantes.

Hay que tener en cuenta que, aunque hablaremos de tres niveles, en la vida real no sólo hay blancos o negros y es posible que una misma empresa tenga estos diferentes niveles repartidos entre diferentes áreas, oficinas o equipos.

## Supervivencia

El peor escenario posible es una cultura de supervivencia. Cuando trabajamos en una cultura de este tipo, la sensación de caos es muy alta y tanto el estrés como el sobre-esfuerzo se vuelven algo implícito dentro de nuestro día a día.

![](/media/fine.gif)

En este tipo de entornos la rotación de personal suele ser muy alta y la ausencia de documentación unida a la presión de fechas, hace que surjan ciertos perfiles que hagan el papel de héroes, los llamados desarrolladores 10x o [el perfil paracetamol del que ya escribí por aquí](https://asiermarques.com/2018/el-perfil-paracetamol/).   
El mentoring básicamente se basa en un "quita que ya lo hago yo".

Suele ser habitual que los equipos tengan cambios constantes de foco. Los proyectos se retrasan pero no se frena la nueva entrada de trabajo. La presión se hace muy fuerte y la sensación que los equipos perciben es la de estar en un constante periodo en el que todas las entregas sufren retrasos.

En los entornos en los que esto se hace más latente, los stakeholders realizan sus peticiones directamente a los desarrolladores. No se priorizan las peticiones e incluso se hacen invisibles a los project managers, lo que impacta directamente en los proyectos en curso.  
Los retrasos constantes generan subidas a producción sin la calidad mínima necesaria lo que obliga a hacer rollbacks que saturan a los equipos con soporte a problemas urgentes en producción. Muchos de estos equipos ya han empezado otros proyectos nuevos que deben pararse de forma no oficial para atender peticiones sin ningún tipo de control ni prioridad.

La comunicación se hace complicada y nunca hay tiempo para documentar. La documentación se deja para el final de los proyectos que queda como un mero entregable y destinada a quedarse obsoleta al no contemplar correcciones después de la entrega o incluso cuando se desarrollan evolutivos.

![](/media/trabajo.gif)

Al haber problemas de comunicación, se sobrecargan las agendas de los project manager con reuniones para clarificar dudas o malentendidos pero no se cuenta con los desarrolladores para "no quitarles tiempo".  
Los problemas de comunicación se hacen más graves y los desarrolladores terminan por entrar a reuniones cuando ya es demasiado tarde y tienen poco margen para actuar.

Todo este panorama unido al estrés al que todas las personas del equipo están sometidas, hace que los errores de una persona terminen por adquirir su Nombre y Apellidos.  
Si esta persona no soluciona el problema de forma ugente, se la apartará con toda seguridad para que el paracetamol o héroe de turno solucione la papeleta sin tener tiempo de explicar o documentar lo que ha hecho para arreglar el problema.  
Esto hará que la persona no tenga la oportunidad de aprender de sus errores y simplemente cargue con la culpa sin que nadie aprenda nada valioso en el proceso.

En un contexto así, nadie quiere arriesgarse a cometer un error o liderar un cambio que le pueda "enmarronar" a él o a un compañero.

En algunas empresas tienen muy interiorizada esta forma de trabajar y normalmente acabaremos cansados de escuchar la siguiente frase para rechazar cualquier tipo de cambio:

> Es que en esta empresa trabajamos así ™

![](/media/dontknow.gif)

### Cómo salir de esta situación

Esta es sin duda la peor situación de la que salir y el esfuerzo de cambiar una cultura de este tipo puede llegar a ser titánico y es posible que incluso no dependa de nosotros solos.  
Aquí hay un requisito importante: la dirección de la empresa debe estar alineada con el cambio y asumir ciertas inversiones que hacen falta para poder cambiar las cosas.

Los siguientes puntos son temas por los que empezar a trabajar. No pretendo que esto sirva de lección ya que cada contexto es un mundo muy particular. 
Este estado es el peor en el que puedes estar como manager y cualquiera que haya pasado por este tipo de cambio debería contar con nuestro más profundo respeto.

**Introducir control y métricas**  
Si existe un contexto en el que tenga sentido la micro-gestión, es este. La introducción de decisiones y control del estado/progreso es fundamental pero tenemos que tener claro que esto es una medida a corto plazo mientras introducimos procesos que nos vayan permitiendo delegar ese control.

En estas situaciones suele ser increible la cantidad de cosas que no funcionan bien sólo porque nadie se atreve a tomar una decisión, por muy obvio que sea el camino. 

Además de control, es clave introducir métricas. Si no tenemos métricas no sabremos realmente si los cambios que hacemos tienen un impacto positivo o negativo y guiaremos nuestras decisiones mediante meras sensaciones. 

**Priorizar**  
Tenemos que renunciar a cosas y aprender a jugar bien con el tiempo. Si todo es urgente nada lo es. Debemos empezar a documentar por escrito las prioridades y hacerlas visibles a todo el equipo.
Hay que construir hasta donde sea posible un muro en el cual podamos frenar el work in progress de los equipos para poder llegar a entregar trabajo con cierto orden.

Esto no depende de metodología, tanto waterfall como Kanban pueden funcionar si hay orden. Hay quien puede estar tentado en meter Scrum de libro en este momento. Yo evaluaría seriamente el impacto de aplicar Scrum en esta etapa teniendo en cuenta lo que esto conlleva a nivel de roles y ceremonias. 

**Conseguir tiempo para los equipos**  
En estos contextos, lo más importante que creo que debemos hacer es conseguir tiempo. 
Debemos detectar qué es lo que más roba tiempo a los equipos y reducirlo en la medida de lo posible.
Seguramente nos demos cuenta de que lo que más roba tiempo a los equipos son las reuniones innecesarias y las consultas por cosas que no están documentadas.

Al introducir micro-gestión, los project manager necesitarán en todo momento conocer el estado de las tareas y de los proyectos. Podemos ganar tiempo si utilizamos correctamente nuestro gestor de tareas con un board de Kanban, en el que se puede ver y medir el trabajo en progreso.
Por lo tanto, si hacemos daily meetings, estas pueden reducirse considerablemente si en lugar de comentar en lo que estamos trabajando, comentamos qué bloqueos tenemos (si hay alguno) y qué vamos a hacer en los próximos días, para que el resto de los integrantes de un equipo puedan detectar necesidades o cosas que les impacten.
Incluso esta daily, podríamos evitarla si la documentamos en una herramienta de documentación mediante la cual, los interesados puedan recibir una notificación cuando se añada el resumen escrito. De esta forma nos ahorramos una reunión y ganamos en visibilidad que puede consultarse en asíncrono no sólo por los integrantes de un equipo, sino por otras personas de la empresa.

Al igual que en este ejemplo, podemos poner normas estrictas del tipo "si no hay agenda en una reunión, con todos los topics que se van a hablar y un pequeño resumen de los mismos", la reunión se cancela.

Imaginemos que podemos reducir una daily que se suele ir a 30 minutos a 12 minutos. Hemos ganado una hora y media a la semana para cada uno de los involucrados en esa reunión. 
Este tiempo lo pueden dedicar a aprender, dar charlas sobre tecnologías que se usen en la empresa, a que un compañero les explique cómo configura un entorno de desarrollo que a la vez puede hacerle ganar tiempo, a automatizar cosas que se hacen de forma manual, etc.
Cuanto más tiempo ganemos y lo invirtamos en que los equipos se formen, más tiempo se ganará a medio y largo plazo.

Debemos velar por que ese tiempo se dedique a aprendizaje y no a asumir más tareas de clientes o relacionadas con milestones de proyectos. Esto es de vital importancia. Por ello, esta estrategia debe ir acompañada de una buena priorización, mencionada en el punto anterior.

**Evitar los silos de conocimiento**  
En este escenario, los silos de conocimiento son muy habituales y nos impactan mucho, sobretodo cuando personas que han adquirido el conocimiento a través de trabajar en ciertos proyectos o resolviendo problemas relacionados con deuda técnica sin documentar.

En este contexto, lo ideal es detectar quiénes son los que tienen el conocimiento y establecer dinámicas para que distribuyan su conocimiento al resto de equipos.
Una técnica importante y que podemos establecer de forma inmediata es introducir Pair-Programming en los proyectos.

Otra cosa que deberíamos hacer es introducir documentación activa, es decir, documentación que se mantenga actualizada de forma automática. Escribí sobre documentación activa en este artículo.
Puede ser un error sobredocumentar ya que al no disponer de tiempo, la documentación generada a mano será costosa y tiene muchas posibilidades de que quede obsoleta muy rápidamente.

**Elegir las batallas**  
Si tienes el rol de actor de cambio en un contexto similar a este, debes armarte de paciencia y elegir las batallas una a una, asumiendo que cada paso va a ser como caminar en un río con una corriente colosal que va a estar continuamente desafiando tus decisiones.

## Aprendizaje

En esta etapa los equipos empiezan a disponer de buenos mecanismos de organización y priorización del trabajo. Se ha conseguido tiempo para que los equipos puedan aprender y compartir de conocimiento.

![](/media/leaning.gif)

Se puede decir que se está en un estado en el que los equipos dejan de preocuparse por sobrevivir; están centrados en mejorar y crecer de forma eficiente.

Es importante tener en cuenta que es muy difícil llegar a este estado pero es muy fácil volver a un estado de supervivencia.  
Junto a la **contratación de los perfiles correctos y alineados con este estado de madurez**, los siguientes puntos son críticos para fortalecer los pilares que se han construido.

### Empezar a delegar la organización en el equipo y soltar control

Poco a poco los manager empiezan a delegar la toma de ciertas decisiones en el equipo. Si se viene de un estado de supervivencia, los miembros de los equipos estarán esperando que les digas exactamente qué deben hacer, cómo y en qué orden.

Aunque probablemente siga siendo necesario un rol que priorice el trabajo, los equipos empiezan a tomar la responsabilidad de organizarse. Dependiendo de los perfiles con los que cuentan los equipos, este cambio no va a ser de la noche a la mañana y es responsabilidad del manager guiar y hacer un seguimiento pero sin estar tan encima con en una cultura de supervivencia. 

El objetivo es reducir la dependencia para que los equipos vayan auto-organizándose por sí mismos.

### Cultura blameless y error-friendly

En este punto los equipos empiezan a asumir riesgos controlados y no se centran en echar la culpa al responsable cuando dicha persona ha cometido un error. 

Cuando nos centramos en culpar, simplificamos en exceso y esto nos impide ver el origen real de un problema o un error lo que terminará por hacer que, con toda seguridad, se vuelva a repetir.

Es un momento de probar cosas nuevas y se cometerán errores. Cuando estos se producen, se afrontan, se aprende de ellos y se introducen nuevos mecanismos o mejoras en los existentes para evitar que se produzcan de nuevo.

Técnicas como postmortems, retrospectivas y otras formas de analizar el origen real de los errores, son fundamentales y no serán del todo efectivos si no son blameless.

### Lenguaje de commitment

Los equipos y no sólo los manager hablan con un lenguaje de compromiso, es decir, en lugar de comunicar un mensaje como "necesitaríamos hacer esto antes del año que viene" el mensaje suena más a un plan "nuestro objetivo es tener esto para principios de Diciembre".

Pero no se llega al otro extremo tampoco. Por ejemplo, en lugar de decir que algo se subirá a producción el 6 de Diciembre a las 12:00, se dirá que se subirá a principios de Diciembre. 

En lugar de deadlines se habla de milestones y de retos.

Siempre hay excepciones en las que se requiera un nivel alto de precisión, pero deberíamos cuestionarnos si la necesidad de esta no está fundada por otro tipo de problemas más profundos a nivel de comunicación y de organización.

El objetivo es que el equipo piense en adquirir compromisos por ellos mismos, sin miedo a errar en la precisión ni en comunicar una fecha que puede no gustar a stakeholders que no tengan en  cuenta la dificultad o recursos a la hora de haber creado una estimación o expectativa errónea.

### Los equipos disponen de capacidad para solucionar sus problemas

En este estado los manager facilitan las herramientas para que los equipos empiecen a encontrar soluciones a los problemas por sí mismos.

Esta fase es un reto para aquellos manager que han estado en modo supervivencia muchos años y al igual que otros miembros del equipos, seguramente requieran de cierto mentoring para adaptarse.

Idealmente, cuando los equipos aprender a auto-organizarse, es interesante dar la capacidad de establecer retos en los 1:1 que puedan cumplirse en un tiempo dedicado a ello, fuera de los objetivos del día a día, para que las personas refuercen esas capacidades en un espacio seguro en el que el fallo no impacte en otros.  

Este tipo de iniciativas son importantes para llegar al estado óptimo en una cultura, que es una auto-organización real de los equipos.

## Auto-organización

En este estado los equipos son capaces de auto-organizarse, no tienen problemas para adquirir compromisos ni para ponerse retos, detectan los problemas que existen en su día a día y toman decisiones en equipo, sin requerir instrucciones externas ni una monitorización de estado continua por parte de una persona externa.

![](/media/defenders.gif)

Los miembros del equipo diseñan sus propias métricas y el compromiso es tanto exigido como compartido por todos ellos.

El estado de los proyectos es visible de forma centralizada y todo el mundo tiene el contexto y sabe lo que está haciendo el otro.

También se conoce lo que va a llegar con suficiente antelación para haber madurado soluciones y detectado problemas antes de empezar.

El trabajo de los managers se centra en aportar herramientas para que los equipos cada vez sean más independientes, haya procesos claros en los que el trabajo se reparta óptimamente, las personas crezcan en la empresa y dispongan de todo lo necesario para entregar trabajo de la forma más eficiente y saludable. 

Sigue habiendo retos y problemas a solucionar —nunca se llega a la perfección— pero la mejora continua es el pilar central en este estado.

## Conclusión

En este artículo hemos visto tres niveles de madurez en los que puede encontrarse una cultura. Como hemos comentado al principio, hay muchos grises y una misma empresa puede llegar a tener equipos o areas en diferentes estados de madurez.

Lo interesante es saber reconocerlos y poner los medios para ir creciendo todos juntos como equipo en cada contexto.
