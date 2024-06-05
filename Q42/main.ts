let magicians: string[] = ["Chris" , "Shin" , "David"];
function make_great(magicians: string[]){
    for (let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + " the Great";
    }
}

function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    })
}
make_great(magicians);
show_magicians(magicians);