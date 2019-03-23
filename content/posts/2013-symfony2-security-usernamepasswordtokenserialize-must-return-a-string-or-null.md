---
author: asier
comments: true
date: 2013-04-18 16:33:25+00:00
layout: post
link: http://asiermarques.com/2013/symfony2-security-usernamepasswordtokenserialize-must-return-a-string-or-null/
slug: symfony2-security-usernamepasswordtokenserialize-must-return-a-string-or-null
title: Symfony2 Security UsernamePasswordToken::serialize() must return a string or
  NULL
wordpress_id: 3689
categories:
- Desarrollo Web
- Trucos
---

Today I got the following exception in a web application that uses Doctrine2 Entities and the Symfony Security Component with Silex framework (this can also appear in Symfony2 framework).

    
    Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken::serialize() must return a string or NULL
    
    ErrorException: Notice: serialize(): "id" returned as member variable from __sleep() but does not exist in /../vendor/symfony/security/Symfony/Component/Security/Core/Authentication/Token/AbstractToken.php line 149


The error appears when you have a Doctrine Entity implementing the UserInterface with a relation mapped in it.

The solution is as simple as implement the [__sleep](http://www.php.net/manual/en/language.oop5.magic.php#object.sleep)() magic method in that entity in this way.

[code lang="php"]

public function __sleep(){
   return array('id', 'username', 'email');
}

[/code]

This sets the id, email and username as the desired attributes to serialize ignoring the mappings and other properties in the Entity.
