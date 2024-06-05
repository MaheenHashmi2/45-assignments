function myAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum("BTS", "Persona");
var album2 = myAlbum("Jungkook", "Golden");
var album3 = myAlbum("Taehyung", "Layover");
console.log(album1);
console.log(album2);
console.log(album3);
function myAlbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = myAlbum2("BTS", "Persona", 6);
var album5 = myAlbum2("Jungkook", "Golden", 11);
var album6 = myAlbum2("Taehyung", "Layover");
console.log(album4);
console.log(album5);
console.log(album6);
