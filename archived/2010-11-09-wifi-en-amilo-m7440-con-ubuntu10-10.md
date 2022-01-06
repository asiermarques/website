---
date: 2010-11-09 01:41:01+00:00
layout: post
slug:  /2010/wifi-en-amilo-m7440-con-ubuntu10-10/
title: Wifi en Amilo M7440 con Ubuntu10.10
template: post
tags:
  - Sistemas
  - Trucos
category: Sistemas
draft: false
description: ""
---

Ayer se me fastidiaron el adaptador de corriente de mi portátil HP y el disco duro de mi Mac Book Pro, lo que me ha obligado a resucitar mi primer equipo portátil: un **Fujitsu Siemens Amilo M7440**.

Aunque era un buen cacharro en el año en que lo compré, Windows 7 se le queda algo grande y además tiene un problema muy grave de diseño:  la tarjeta wifi se activa con un botón controlado por software mediante un driver sólo disponible de forma oficial para XP. Encima dicho driver requiere privilegios de Administrador y no funciona con las opciones de compatibilidad de Windows Vista y 7.

Por suerte, [existe un invento](http://fsam7440.sourceforge.net/es/index2.html) creado para Linux por unos desarrolladores españoles que servía muy bien en versiones anteriores a la 10 de Ubuntu, pero para que funcione en versiones actuales hay que hacer unos retoques en el código fuente.

El archivo que hay que modificar es el fsam7440.c, lo cambios son los siguientes:

```

//línea 40: cambiar  #include <linux/autoconf.h> por

#include <generated/autoconf.h>

//línea 168, cambiar remove_proc_entry(DRV_NAME, &proc_root); por

remove_proc_entry(DRV_NAME, NULL);

//línea 179, cambiar dir_base = create_proc_entry(DRV_NAME, S_IFDIR, &proc_root); por

dir_base = create_proc_entry(DRV_NAME, S_IFDIR, NULL);

```

Una vez hemos estos cambios, se compila con un make y make install.

Para encender el "botón" del wifi basta ahora con llamar a este comando

```

sudo modprobe fsam7440

```
