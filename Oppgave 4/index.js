
//Oppgave 4



let str = "Hva er bærekraftig utvikling? En utvikling som imøtekommer dagens behov uten å ødelegge muligheten for at kommende generasjoner skal få dekket sine behov";
let searchString = "bærekraftig";
let Result = str.includes(searchString);


if (Result === true) {
    document.write("Texten har ordet bærekraftig, men ikke bærekraft")
} else {
    document.write("Texten har verken ordet bærekraftig eller bærekraft")
}