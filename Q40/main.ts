function myAlbum(artistName: string, albumTitle: string){
    return {artistName, albumTitle}
}

let album1 = myAlbum("BTS" , "Persona");
let album2 = myAlbum("Jungkook" , "Golden");
let album3 = myAlbum("Taehyung" , "Layover");

console.log(album1);
console.log(album2);
console.log(album3);

function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: number){
    return {artistName, albumTitle, numberOfTracks}
}

let album4 = myAlbum2("BTS" , "Persona" , 6);
let album5 = myAlbum2("Jungkook" , "Golden" , 11);
let album6 = myAlbum2("Taehyung" , "Layover");

console.log(album4);
console.log(album5);
console.log(album6);
