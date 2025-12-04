/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

//facciamo creare un numero casuale per il giocatore
const numGiocatore = Math.floor(Math.random() * 6) + 1;
console.log('Numero Giocatore:',numGiocatore);

//facciamo creare un numero casuale per il computer
const numPC = Math.floor(Math.random() * 6) + 1;
console.log('Numero PC:',numPC);

//facciamo comparare i due numeri e vediamo chi è il vicitore

risultato = '';

//se il giocatora ha il numero più alto
if (numGiocatore > numPC){
    risultato = 'Il giocatore è il vincitore!';
}
//se il Pc ha il ha il numero più alto
else if (numGiocatore < numPC){
    risultato = 'Il Pc è il vincitore!';
}
//se sono pari
else {
    risultato = 'La partita finisce in parità!';
}

//stampiamo il risultato
console.log(risultato);

numeroGiocatore.innerHTML = `Il numero del giocatre é: ${numGiocatore}`; 
numeroPC.innerHTML = `Il numero del Pc è: ${numPC}`;
vincitore.innerHTML = risultato;