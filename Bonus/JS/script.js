/* JSnack 2
L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga; */

//l'utente inserisce la prima parola
const primaParola = prompt('Inserisci la prima parola');

//l'utente inserisce la seconda parola
const secondaParola = prompt('Inserisci la seconda parola');

//andiamo a virificare quale parola sia più corta

if (primaParola.length > secondaParola.length){
    console.log(secondaParola, primaParola);
}
else if (primaParola.length < secondaParola.length){
    console.log(primaParola, secondaParola );
}
else{
    console.log('Le parole hanno la stessa lunghezza e te le metto in ordine di input:', primaParola, secondaParola)
}





/* JSnack 5
Crea un array vuoto. 
Chiedi per 6 volte all’utente di inserire un numero, 
se è dispari inseriscilo nell’array */