/* JSnack 2
L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga; */

//l'utente inserisce la prima parola
const primaParola = prompt('Inserisci la prima parola');

//l'utente inserisce la seconda parola
const secondaParola = prompt('Inserisci la seconda parola');

//andiamo a virificare quale parola sia più corta

//se è più corta la seconda 
if (primaParola.length > secondaParola.length){
    console.log(secondaParola, primaParola);
}
//se è più corta la prima
else if (primaParola.length < secondaParola.length){
    console.log(primaParola, secondaParola );
}
//se sono uguali
else{
    console.log('Le parole hanno la stessa lunghezza e te le metto in ordine di input:', primaParola, secondaParola)
}

/* JSnack 5
Crea un array vuoto. 
Chiedi per 6 volte all’utente di inserire un numero, 
se è dispari inseriscilo nell’array */

//creiamo una variabile vuota
const numbersOdd = [];

//andiamo a fare in modo da poter inserire 6 numeri
for (i = 0; i < 6; i++){
    let numbers = parseInt(prompt('Inserisci un numero'));
    
    //andiamo a selezioanre i numeri dispari
    if (numbers % 2 !== 0){
        numbersOdd.push(numbers)
    }
}
//stampiamo l'array con solo i numeri dispari
console.log(numbersOdd);