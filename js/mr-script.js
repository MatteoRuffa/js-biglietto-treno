/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e 
l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// numero di kilometri
// età passeggero

let numberKilometers = parseInt(prompt('quanti colometri devi percorrere?'));
console.log(numberKilometers);
if (isNaN(numberKilometers)) {
    console.log('devi inserire un numero non un carattere!!!');
}

let userYearBirth = parseInt(prompt('in che anno sei nato?'));
console.log(userYearBirth);
if (isNaN(userYearBirth)) {
    console.log('devi inserire un numero non un carattere!!!');
}

const currentYear = new Date().getFullYear();
console.log(currentYear);

let userAge = currentYear - userYearBirth ;
console.log(userAge);

let ticketPrice = numberKilometers * 0.21;
console.log(ticketPrice);
document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è: ' + ticketPrice.toFixed(2) + '&euro;';
if (isNaN(ticketPrice)) {
    console.log('devi inserire dei numeri non dei caratteri!!!');
    document.getElementById('price').innerHTML = 'Devi inserire dei numeri non dei caratteri!!!';
}

if (userAge < 18) {
    ticketPrice = (ticketPrice - ((ticketPrice * 20) / 100)).toFixed(2); 
    console.log(ticketPrice);
    document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è: ' + ticketPrice + '&euro;';
    
} else if (userAge >= 65) {
    ticketPrice = (ticketPrice - ((ticketPrice * 40) / 100)).toFixed(2); 
    console.log(ticketPrice);
    document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è: ' + ticketPrice + '&euro;';
   
}