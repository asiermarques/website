---
author: asier
comments: true
date: 2018-04-29 15:49:13+00:00
layout: post
link: http://asiermarques.com/2018/principios-solid/
slug: principios-solid
title: Principios SOLID
wordpress_id: 4361
categories:
- Desarrollo
---

A pesar de que existe mucho material escrito sobre este tema, en mi día a día me encuentro con software diseñado desde cero sin tener en cuenta algunos o ninguno de los principios SOLID.

Los principios SOLID son la base para diseñar software que sea flexible, testeable y fácil de mantener.

Algunos están ya bastante asumidos por la comunidad de desarrollo, otros no tanto.

En este artículo explicaré cada uno de estos principios con simples ejemplos que representan escenarios típicos de nuestro día a día.


### Single responsability


Una clase debería tener una única responsabilidad.

Este principio quizás sea aparentemente el más sencillo de entender. Aun así, son frecuentes las implementaciones que se lo saltan, incluso de forma intencionada.

Un ejemplo de implementación que se lo salta es la de Active Record que se implementa en el ORM de RubyOnRails, cuyos modelos suelen ser propensos a atraer responsabilidades ajenas a las que deberían tener.

Un ejemplo parecido de esto sería este código

[php]

class Message {

  public function setFrom( Person $person ) {}

  public function setTo( Person $person ) {}

  public function send() {}

}

[/php]

En este código, vemos que una clase mensaje implementa el método "send" para enviarse a sí mismo. Sin embargo, esta responsabilidad debería ser delegada en un objeto cuya labor sea enviar.

[php]

$user1 = new Person( "Asier" );

$user2 = new Person("Thor");

// componemos el mensaje
$message = new Message();

$message->from( $user1 );

$message->to( $user2 );

// enviamos el mensaje mediante un Sender
$sender = new SMSSender();

$sender->send( $message );

$sender = new EmailSender();

$sender->send( $message );

[/php]

Como vemos en el código anterior, la primera ventaja de separar en responsabilidades nuestro código reside en que podemos tener flexibilidad a la hora de trabajar con nuestros mensajes sin cambiar el código de las clases que los representan.

En un principio quizás hayamos definido que nuestros mensajes se enviasen por email, pero si quisiéramos enviar por otros medios, deberíamos hacer cambios en nuestra clase Mensaje para poder implementar cambios en este sentido.

En muchas ocasiones, el aplicar estas modificaciones a las clases para poder mantener responsabilidades que no son las suyas las hacen magnéticas a más responsabilidades.

Por ejemplo si seguimos la estrategia de mantener responsabilidades en la clase Mensaje, esta podría también ser susceptible de implementar el método "save", para guardar el mensaje en base de datos. O el método "print" para imprimirlo. Sin embargo, el otorgar de estas responsabilidades a la clase Message, conllevaría saltarse este patrón corriendo el peligro de limitar la flexibilidad, propiciar la aparición de código redundante a futuro (por ejemplo: necesidad de implementar métodos "save" o "send" en diferentes clases que no tienen ninguna base común entre ellas, utilizando la herencia de forma incorrecta con clases abstractas) y aumentar el coste de mantenimiento de nuestro software.


### Open-close


El principio abierto-cerrado es para mí una de las lecciones más importantes que he aprendido como desarrollador de software.

El objetivo a conseguir es hacer extensible tu código sin tener que modificarlo.

Pongamos el siguiente ejemplo que no respeta este principio:

[php]

class SenderFactory {

  public function createFromProtocol( $protocol ) {

    switch ( $protocol ) { 

      case 'sms':

        return new SmsSender();

      case 'email':

        return new EmailSender();

    }

  }

}

$factory = new SenderFactory();
$sender  = $factory->createFromProtocol('sms');

$sender->send( $message );

[/php]

En esta típica clase de Factoría, tenemos un Switch/Case para crear cada uno de los Sender a los que dará soporte. Si quisiéramos añadir un nuevo tipo de Sender, deberíamos añadir otro case más para el mismo, teniendo que modificar la clase por cada extensión.

Para conseguir respetar el principio Abierto-Cerrado, deberíamos seguir los siguientes pasos:

1) Crear una interfaz para los objeto Sender

[php]
interface SenderInterface {

  public function send();

}

[/php]

2) Crear un sistema para poder añadir de forma externa las diferentes implementaciones de Senders en la factoría. Un ejemplo simplificado (no utilizar en producción):

[php]

class SenderFactory {

  private $_senders = [];

  public function createFromProtocol( $protocol ) {

    if( isset ($this->_senders[ $protocol ] )  )

      return new $this->_senders[ $protocol ];

    thrown new Exception("there is any sender for " . $protocol);

  }

  public function addSender( $protocol, 
                             $senderClass ) {

    $this->_senders[ $protocol ] = $sender;

  }

}

[/php]

De esta forma podríamos añadir de forma externa sin preocuparnos de tener que tocar el código de la factoría:

[php]

$senderFactory = new SenderFactory();

$senderFactory->addSender( 'sms', SmsSender::class );

$senderFactory->addSender( 'email', EmailSender::class );

$sender = $senderFactory->createFromProtocol( 'sms' );

$sender->send( $message );

[/php]



### Liscov sustitution




<blockquote>"Sea ϕ(x) una propiedad comprobable acerca de los objetos x de tipo T. Entonces ϕ(y) debe ser verdad para los objetos y del tipo S donde S, es un subtipo de T."

Bárbara Liskov</blockquote>


El principio de sustitución de Liscov es uno de los que más frecuentemente se suelen saltar.

Básicamente lo que dicta es que si una clase hereda de otra, el funcionamiento de la aplicación no debería verse afectado si esta es sustituida por su clase padre.

Esto también relativo a las interfaces. Si una clase que implementa una interfaz es sustituida por otra que implementa esa interfaz, el comportamiento no debería verse afectado.

Esto conlleva varias cosas:



 	
  * Los métodos públicos de la clase hija y padre deberían ser exactamente los mismos

 	
  * Los métodos deberían devolver los mismos tipos de datos

 	
  * Lo que se exprese en un método abstracto o no, en la clase padre o la interfaz, debería ser lo que este método realice, sin sorpresas extrañas.


Un ejemplo sobre este último punto: si tenemos esta interfaz

[php]

interface SenderFactoryInterface {

  public function createFromProtocol( $protocol );

  public function addSender( $protocol, 
                             SenderInterface $sender );

}

[/php]

Esperamos que las clases que implementen la SenderFactoryInterface puedan crear un Sender que hayamos cargado en la misma.

[php]

class SenderFactory implements SenderFactoryInterface {

  public function createFromProtocol( $protocol ) {

    if ( !$this->checkIfMeetsSomeCondition( $protocol ) ) 

      thrown new Exception ( 'Protocol not supported' );
    ....

  }

}

[/php]

En este ejemplo vemos que hay una condición interna en el método createFromProtocol que decide si funcionar o no con un tipo de protocolo. Esto viola el principio de sustitución de Liscov ya que otra clase que implemente SenderFactoryInterface no tiene por qué contemplar esa condición y esto puede derivar en inestabilidad del sistema al cambiar de SenderFactory.

La idea como conclusión es que debe respetarse lo que define una interfaz o una clase padre, sin añadir ni exponer funcionalidad adicional que esté fuera esa definición.


### Interface segregation




<blockquote>"Clients should not be forced to depend on methods they do not use."

Robert Martin</blockquote>


Al seguir el principio de Segregación de interfaces debemos asegurarnos de que una dependencia que inyectemos en una clase no muestre métodos que no se necesiten o no tengan sentido para lo que pretendemos hacer.

Por ejemplo, si tenemos una interfaz que define cómo podemos extraer y guardar datos de un sistema de almacenamiento:

[php]

interface StorageManagerInterface {

  public function getItems();

  public function save( EntityInterface $item );

}

[/php]

Y tenemos una clase que necesite leer datos de ese sistema para imprimirlos:

[php]

class PrintService {

  public function printLines( StorageManagerInterface $storage ) { }  
 
}

[/php]

Dentro del método printLines no nos interesa guardar nada en el sistema de almacenamiento. De hecho, sería peligroso hacerlo en ese método, ya que se supone que no vamos a hacer ninguna manipulación, sólo deberíamos imprimir los datos que nos traigamos del sistema de almacenamiento.

Para no saltarnos el principio de Segregación de interfaces, deberíamos separar las operaciones de lectura y escritura en dos interfaces distintas. Si por alguna razón necesitásemos ambas operaciones en alguna clase, podríamos tener otra interfaz que implemente dichas interfaces.

Nuestro PrintService ahora ya tiene únicamente los métodos que necesita como vemos en el siguiente ejemplo.

[php]

interface StorageReaderInterface {
  
  public function getItems();  

}

interface StorageeWriterInterface {

  public function save( EntityInterface $entity );
}

interface StorageManagerInterface
  implements StorageReaderInterface, StorageWriterInterface {
}

class PrintService {

 public function printLines( StorageReaderInterface $storage ) { } 
 
}
[/php]



### Dependency inversion


La idea de la inversión de dependencias es que nuestro código dependa siempre de abstracciones, no de clases concretas.

[php]

// incorrecto
class NotificationService { 
  
  public function __construct( EmailSender $sender ) { 
    ... 
  } 

}

// correcto
class NotificationService {

  public function __construct( SenderInterface $sender ) {
    ...
  }

}

[/php]

En el ejemplo superior vemos cómo respetar este principio y que al inyectar la interfaz SenderInterface, le damos más flexibilidad pudiendo cambiar en un futuro el tipo de Sender sin tener que modificar el código.

Sin embargo, pasar una interfaz no es lo único recomendable. Suele ser habitual que utilicemos interfaces de un framework que utilicemos para desarrollar nuestro código.

Esto nos genera una dependencia con el framework, lo cual puede ser un problema si luego queremos reutilizar código separándolo en un paquete independiente.

[php]

class LoggerService { 

  public function __construct( Framework\EventDispatcherInterface $dispatcher ) {} 

}

[/php]

Lo ideal sería crear nuestra propia interfaz e implementarla en una clase que haga uso de la interfaz que nos provee el framework. Esto nos permite cambiar en un futuro de framework sin que nuestro código se vea afectado.

[php]

class FrameworkEventDispatcher 
             implements EventDispatcherInterface {

  public function __construct(Framework\EventDispatcherInterface $dispatcher) {}
}

class LoggerService {

 public function __construct( EventDispatcherInterface $dispatcher ) {}
 
}

$logger = new LoggerService( new FrameworkEventDispatcher() );

[/php]



### Conclusión


Los principios SOLID nos permiten diseñar nuestro software para que después de evolucionarlo y mantenerlo durante años no se convierta en una mala partida de Tetris.

Si tenemos la mente abierta incluso podemos aplicarlos fuera del código o incluso del mundo del software, en otras disciplinas y artes creativas.
