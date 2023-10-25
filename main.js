//NUMERO-ARRAY
// let emptyArray = [];
// let numero = parseInt(prompt("Scrivi un numero"));
// let sommaNumeri = 0;

// if(isNaN(numero)){
//     alert("devi inserire un numero");
// }

// while(sommaNumeri<50){
//     let numero = parseInt(prompt("Scrivi un numero"));
//     emptyArray.push(numero);
//     sommaNumeri += numero;
// }

// alert("array pieno:" + " " + emptyArray);
// alert("somma dei numeri:" + " " + sommaNumeri);



//NUMERO STAMPATO
// let n = parseInt(prompt("Inserisci un numero da 1 a 100"));

// if(isNaN(n) || n<1 || n>100){
//        alert("devi inserire un numero da 1 a 100");
// }

// for(let i = 1; i <= n; i++){
//     arrayEmpty = [];

// for (let k = 0; k < 10; k++){
// arrayN = Math.floor(Math.random() * 100) + 1;
// arrayEmpty.push(arrayN);
// } 

// console.log(arrayEmpty);
// }



//INVITATI ALLA FESTA
// let listaInvitati = ["Marco", "Elisabetta", "Giovanni", "Luigi"]
// let nomeInvitato = prompt("Qual'è il tuo nome?")

// if(listaInvitati.indexOf(nomeInvitato)){
//     alert("Non sei invitato alla festa!");
// }else{
//     alert("Sei invitato alla festa!")
// }



//CHIEDI NUMERO 4 CIFRE
// let promptUtente = prompt("Dimmi un numero di 4 cifre");
// let numero = parseInt(promptUtente);
// let numeroString = numero.toString;

// if(isNaN(numeroString) || numeroString.length !==4){
//     alert("Non hai inserito un numero di 4 cifre");
// }else{

//     let somma = 0;
//     for(let i=0; i<4; 1++){
//         let char = numeroString[i];
//         somma = somma + Number(char);
//     }
// }



//MELE
// let mele = [
//     {varietà: "Melinda", peso: 150, diametro: 8},
//     {varietà: "Golden", peso: 100, diametro: 9},
//     {varietà: "Apple", peso: 110, diametro: 10},
//     {varietà: "Delicius", peso: 130, diametro: 7},
//     {varietà: "Melavera", peso: 90, diametro: 8},
//     {varietà: "Mel", peso: 95, diametro: 9},
//     {varietà: "Golden apple", peso: 150, diametro: 7},
//     {varietà: "Mela007", peso: 145, diametro: 11},
//     {varietà: "Veramel", peso: 133, diametro: 10},
//     {varietà: "Melasol", peso: 104, diametro: 8},
// ]

// let sommaPeso = 0;

// for(i=0; i<mele.length; i++){
//     sommaPeso += mele[i].peso;
// }

// alert("Il peso delle mele è di " + sommaPeso + "gr");