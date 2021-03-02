/*Scrivi programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/


// 1 ciclo for per stampare numero da 1 a 100

  // definisco variabile con valore 0

  var numero = 0;

  var insiemeNumeri = [];

  for (  var i = 0; i < 100; i++ ) {

    numero = numero + 1;

    // creo array con tutti i 100 numeri
    insiemeNumeri.push(numero);

    // 2 se numero è multiplo di 3, 5 o entrambi cambio valore

    if ( insiemeNumeri[i] %5 == 0 && insiemeNumeri[i] %3 == 0 ) {

      insiemeNumeri[i] = "FizzBuzz";

    } else if ( insiemeNumeri[i] %5 == 0 ){

      insiemeNumeri[i] = "Buzz";

    } else if ( insiemeNumeri[i] %3 == 0 ) {

      insiemeNumeri[i] = "Fizz";

    }

    // stampo numeri contenuti nell'array

    document.getElementById('numeri').innerHTML = document.getElementById('numeri').innerHTML + insiemeNumeri[i] + ", ";
  }



  for ( i = 0 ; i < 100; i++ ) {

    if ( insiemeNumeri[i] %5 == 0 && insiemeNumeri[i] %3 == 0 ) {

      console.log( "FizzBuzz" );

    } else if ( insiemeNumeri[i] %5 == 0 ){

      console.log( "Buzz" );

    } else if ( insiemeNumeri[i] %3 == 0 ) {

      console.log( "Fizz" );

    } else {

      console.log( insiemeNumeri[i] );

    }

  }
