---
author: asier
comments: true
date: 2012-02-14 02:07:06+00:00
layout: post
link: http://asiermarques.com/2012/fuentes-decentes-para-netbeans-en-linux/
slug: fuentes-decentes-para-netbeans-en-linux
title: Fuentes decentes para netbeans en linux
wordpress_id: 2125
categories:
- Trucos
---

Acabo de instalarme la última versión de netbeans en OpenSuse y la interfaz no mostraba las fuentes correctamente.

Esto es debido a que por defecto no está usando el runtime java de sun, por lo que instalando y configurando el jre oficial se soluciona el problema.

Para ello:



	
  * Nos bajamos la última versión del [jdk de Java de la web oficial de sun](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

	
  * En el terminal hacéis un "zypper in {nombre del paquete rpm que os bajéis de la web de sun}"

	
  * Abrir el archivo netbeans-7.1/etc/netbeans.conf y establecer la ruta del jre en  /usr/java/latest/jre

	
  * Ahora netbeans mostrará correctamente las fuentes de su interfaz.


