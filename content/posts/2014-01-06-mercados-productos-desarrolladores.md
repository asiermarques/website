---
title: Mercados de productos Open Source para desarrolladores
date: "2014-01-06 14:02:36+00:00"
template: "post"
draft: false
slug: "/2014/mercados-productos-desarrolladores"
category: "Negocio"
tags:
  - "Producto"
  - "Negocio"

description: "Ayer en Twitter se forjó un debate interesante iniciado por Christian Soronellas, sobre este tema, concretamente sobre el cobrar por desarrollar productos y componentes de software para otros desarrolladores."
---

Ayer en [Twitter se forjó un debate interesante](https://twitter.com/theUniC/status/419810769904365568) iniciado por Christian Soronellas, sobre este tema, concretamente sobre el cobrar por desarrollar productos y componentes de software para otros desarrolladores.


[![twit_chr](/media/twit_chr1.jpg)](https://twitter.com/theUniC/status/419810769904365568)




Esto me hizo recordar que, [en el sitio web de Symfony en Español, Javier Eguiluz hizo una encuesta](http://symfony.es/noticias/2013/02/18/resultado-de-la-encuesta-sobre-el-marketplace-de-symfony/) que tenía como objetivo recoger feedback para saber si la comunidad estaría interesada en desarrollar bundles (componentes de desarrollo) de pago. [Estos fueron los resultados](http://symfony.es/noticias/2013/02/18/resultado-de-la-encuesta-sobre-el-marketplace-de-symfony/).


Otro tema interesante [se lo leí a Álvaro Ortiz el otro día](https://twitter.com/furilo/status/418791586969837568) también en Twitter y me pareció una idea bastante chula: un servicio que pagase a los desarrolladores por solucionar issues pendientes en repositorios Open Source de github.

[![twit_furilo](/media/twit_furilo.jpg)](https://twitter.com/furilo/status/418791586969837568)

El tweet de Álvaro se inspiró en el servicio [GitTip](https://www.gittip.com/), un crowdfounding en el que puedes pagar a desarrolladores en agradecimiento a su trabajo.

Volviendo al tema de los mercados, en algunas plataformas Open Source ya existen marketplaces que están funcionando bien, sobre todo en soluciones de eCommerce donde el valor que dan dichos componentes es muy claro ya que puede ahorrar costes y tiempos de desarrollo al desarrollador pero sobre todo al cliente final. Un ejemplo de mercado de este tipo es el [Magento Connect](http://www.magentocommerce.com/magento-connect/).

En otras tecnologías emergentes, como [Xamarin](http://xamarin.com), podemos ver [mercados de componentes](http://components.xamarin.com) que aparentemente también funciona muy bien.

Quizá uno de los principales impedimentos que tenemos en la comunidad PHP en comparación por ejemplo a la de [Xamarin ](http://xamarin.com)o quizá la de .net, es que históricamente los desarrolladores que han optado por esta tecnología no están acostumbrados a pagar por este tipo de cosas.

Sin embargo, creo que el mercado ha cambiado, o al menos está cambiando. Por dos motivos:

**La expectación del cliente final ha cambiado**

Los requisitos actuales para construir software web son mucho más exigentes que hace siete años.

A pesar de que cada vez hay más clientes que siguen la [filosofía Lean](http://es.wikipedia.org/wiki/Lean_startup) o ya son conscientes de la importancia de desarrollar un [producto mínimo viable](http://es.wikipedia.org/wiki/Producto_viable_m%C3%ADnimo), para ciertos servicios el optar por utilizar sistemas como Joomla o WordPress puede salir caro ya no a largo, sino a medio plazo.

Cada vez más, los servicios online requieren ser desarrollados con calidad, pero también en tiempos muy ajustados, sobre todo en mercados como el de Internet donde el [time to market](http://en.wikipedia.org/wiki/Time_to_market) es importante.

**Las herramientas han cambiado**

Esto es una causalidad de lo anterior. Las herramientas se han adaptado a metodologías que nos permiten ser más productivos y adaptarnos a cambios drásticos del cliente.

En el mundo PHP, en menos de tres años, hemos visto aparecer no sólo frameworks como Symfony2, sino utilidades como composer que han dado un salto de calidad en nuestros hábitos de desarrollo.

Los frameworks nos están llevando a adoptar buenas prácticas de desarrollo como TTD, BDD o el uso de Inyección de dependencias. Esto nos hace posible desacoplar partes de nuestro código y poder por fin, acercarnos a una reutilización de calidad, calidad en el sentido de mantenimiento.

Teniendo en cuenta estos dos puntos, veo muy favorable, sobre todo mirando a largo plazo, el hecho de que nos planteemos de forma seria el rentabilizar esos desarrollos que podemos reutilizar en varios proyectos, ahorrando tiempo al cliente sin perder calidad.

Al igual que comentaba Javier Eguiluz en el resultado de la encuesta anteriormente citada, veo muy importante el crear un mercado de este tipo. Probablemente muchas de las cosas que echamos de menos en Symfony2 estarían resueltas y con mantenimiento gracias a dicho mercado.

Eso sí, si todos lo viésemos claro, el reto entonces sería cómo hacerlo, cómo vender esos productos.

Ahí van algunos puntos que veo que darían para un debate:

**Producto y soporte**

Desarrollas el producto y lo vendes. Pero es ahí cuando empieza todo, sobre todo si es basado en tecnología open source. No voy a decir que el código no vale nada, porque probablemente me mataríais, pero sinceramente creo que lo más valioso es estar detrás dando soporte y updates al producto.

El soporte es lo más caro del desarrollo de un producto y sin soporte, la experiencia es mala y tu producto es percibido como humo.

Hay muchos ejemplos de cómo enfocar esto, aunque como siempre, creo que sería posible darle una vuelta de tuerca al asunto.

**Precio y forma de cobro**

Teniendo en cuenta lo anterior, es clave poner un precio acorde a lo que vas a ofrecer. Es muy posible que si te equivocas en el precio, cuanto más vendas, más dinero pierdas.

El precio no se puede decidir en una mañana echando un café, es uno de los puntos más difíciles a la hora de crear un producto.

En un mercado de este tipo podríamos llegar a pensar que la guerra de precios es inevitable, pero al ser desarrolladores, sabemos diferenciar de forma muy directa qué producto tiene mejor calidad o soporte, que al final son los baremos más adecuados para medir si un precio es adecuado o no.

**Distribución y licencia**

Si hablamos de productos Open Source orientados al desarrollador y de que los updates son una parte muy importante, no sería descabellado el pensar que lo natural sería dar acceso al repositorio a nuestros clientes de pago.

Si esto nos parece exagerado o nos da pánico, gracias a composer podemos crearnos nuestro propio [repositorio de paquetes privado para composer con la utilidad Satis](http://getcomposer.org/doc/articles/handling-private-packages-with-satis.md).

Por último, podríamos optar por la manera tradicional de descarga vía zip y que nuestros clientes gestionen las actualizaciones de forma manual.

En el tema de las licencias tengo muchísimas dudas, incluso después de haberme leído unas tres veces [este genial libro sobre el tema](http://shop.oreilly.com/product/9780596005818.do). Es un punto importante que nos sirve para proteger el producto de una forma más efectiva que cosas como la encriptación de código, que yo personalmente rechazo completamente.

En resumen, creo que crear mercados de este tipo son muy importantes para desarrolladores de PHP, tanto de Symfony como de otros frameworks y daría para un debate muy interesante e incluso para un evento en el que contar experiencias reales vividas al vender productos de este tipo.