/* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email */

//creiamo la lista di mail
const mail = [
    'utente.1@gmail.com',
    'utente.2@gmail.com',
    'utente.3@gmail.com',
    'utente.4@gmail.com',
    'utente.5@gmail.com',
    'utente.6@gmail.com',
    'utente.7@gmail.com',
    'utente.8@gmail.com',
    'utente.9@gmail.com',
    'utente.10@gmail.com',
    'utente.11@gmail.com',
    'utente.12@gmail.com',
    'utente.13@gmail.com',
    'utente.14@gmail.com',
    'utente.15@gmail.com'
]

//chiedimao all'utente la sua mail
const mailUtente = prompt('Inserisci la tua mail');

//andiamo a verificare se la mail dell'utente sia presente o meno

//creiamo una variabile per l'esito

let esito = 'La tua mail non è presente tra quella degli invitati, non puoi accedere';

//applichiamo il ciclo for per andare a scavare tra le mail in lista

for (let i = 0; i < mail.length; i++){

    //andiamo a verificare se la mail è presente tra quella degli invitati
    if (mail[i] === mailUtente){
        esito = 'La tua mail é presente tra quella degli invitati, puoi accedere'
    }
}

//stampiamo il risultato
console.log(esito);
mioEsito.innerHTML = esito
