//richiedo il nome e lo transformo in minuscolo
var name = prompt('inserisci un nome :');   
var nameLow = name.toLowerCase();
var control = '';



//applico la funzione e' controllo la condizione 
if(nameLow == reverse(nameLow)){         
    console.log('e\' palindromo')
} else {
    console.log('non lo e\'');
}





//****************************************************************

//Cristina ha spiegato oggi le funzioni , abbiamo le competenze per capirle adesso sta a noi studiare il comportamento di oguna di esse. Uno delle prime lezioni fatte con Luca , spiegava come Google fosse  uno dei migliori amici di un devoloper , l'ho studiato  utilizzato, e si,  riduce notevolmente il codice . 
function reverseString(str) {
    return str.split("").reverse().join("");
}


//in ogni caso qui ho riprodotto la versione con il for loop
function reverse(str){
    var reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }