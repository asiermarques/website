---
author: asier
comments: true
date: 2008-05-14 07:46:37+00:00
layout: post
link: http://asiermarques.com/2008/recuperar-ultimo-id-insertado-en-sql-server-desde-php-con-el-driver-oficial-de-microsoft/
slug: recuperar-ultimo-id-insertado-en-sql-server-desde-php-con-el-driver-oficial-de-microsoft
title: Recuperar último id insertado en SQL Server desde php con el Driver Oficial
  de Microsoft
wordpress_id: 543
categories:
- Desarrollo Web
- Sistemas
---

Microsoft ha publicó hace unos meses la [versión RTM de su driver oficial para php](http://blogs.msdn.com/sqlphp/archive/2008/02/19/the-february-08-ctp-is-now-available.aspx) que permite conectarse a sus bases de datos SQL Server.

Vamos a usar dicho driver para mostrar cómo recuperaríamos el último id insertado en una tabla.

```php

//Especificamos el servidor
$server = "HOSTINSTANCIA";
//Especificamos los datos de acceso y la base de datos
$info = array( "Database"=>"bd","UID" => "user","PWD" => "pass");

//nos conectamos
$c = sqlsrv_connect( $server, $info);
//especificamos el código sql para la consulta parametrizada
$sql = "INSERT INTO tabla (valor) VALUES (?);";
//Scope_Identity nos devuelve el último id insertado
$sql .= "SELECT Scope_Identity() as id;";

/*
especificamos el valor o valores que se pasarán como
parámetros en la consulta anterior
**/
$param = array($valor);
//preparamos la consulta
$s = sqlsrv_prepare($c, $sql, $param);
//ejecutamos la consulta
sqlsrv_execute($s);

/**
*
En este momento se ha ejecutado la consulta pero, al contrario
de lo que podamos deducir, no se devuelve ningún valor 'id'
aunque hagamos un fetch
para obtenerlo debemos hacer un sqlsrv_next_result();
**/
sqlsrv_next_result($s);
//Ahora sí, hacemos un fetch
$r = sqlsrv_fetch_array($s, SQLSRV_FETCH_ASSOC);
//Mostramos el resultado
echo "Hemos insertado una fila con el id: ".$r['id'];

//liberamos la variable de estado
sqlsrv_free_stmt($s);
//cerramos la conexión
sqlsrv_close($c);

```
