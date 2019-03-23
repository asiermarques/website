---
author: asier
comments: true
date: 2013-07-18 20:31:51+00:00
layout: post
link: http://asiermarques.com/2013/como-configurar-el-remember-me-en-silex/
slug: como-configurar-el-remember-me-en-silex
title: Cómo configurar el "remember me" en Silex
wordpress_id: 3789
categories:
- Desarrollo Web
- Trucos
---

Hoy he implementado la funcionalidad de remember me en una aplicación Silex haciendo uso de los proveedores SecurityServiceProvider junto al RememberMeServiceProvider.

Al registrar el RememberMeServiceProvider me daba la siguiente excepción:


## InvalidArgumentException: Identifier "security.remember_me.service.{key del firewall}" is not defined.



El problema residía en que registraba el RememberMeServiceProvider **antes** del SecurityServiceProvider, y eso era lo que lanzaba esa excepción.

Por lo tanto, para que funcione sin problemas deberíamos tener una configuración como la siguiente, **respetando como he dicho el orden a la hora de registrar los proveedores de servicios**:

[code lang="php"]

$app->register(new Silex\Provider\SessionServiceProvider());


$app->register(new Silex\Provider\SecurityServiceProvider(), array(
    'security.firewalls'    => array(
        'site'  => array(
               
               'remember_me'   => array(),
               'pattern'       => '^/',
               'anonymous'     => true,
               'form'          => array(
                          'login_path' => 'login',
                          'check_path' => 'login_check'
                ),
                'users' => $app->share(function () use ($app) {
                    return new \Lib\UserProvider($app);
                }),
                'logout' => array('logout_path' => 'logout'),
         ),
    ),
    'security.access_rules' => array(
         array('^/login', 'IS_AUTHENTICATED_ANONYMOUSLY')
    )
));

$app->register(new \Silex\Provider\RememberMeServiceProvider());

[/code]
  *[InvalidArgumentException]: InvalidArgumentException
