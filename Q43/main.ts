let magicians: string[] = ["Chris" , "Shin" , "David"];
function copyArray(arr:string[]){
    return [...arr]
}

function make_great (magicianArray:string[]){
    for(let i=0; i<magicianArray.length; i++){
        magicianArray[i] = 'the Great ' + magicianArray[i]
    }
}

function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    })
}

const copyMagicianArray = copyArray(magicians)

make_great(copyMagicianArray);
console.log('\n\nThis is my original array:')
show_magicians(magicians)

console.log('\n\nThis is my modified copy of the array:')
show_magicians(copyMagicianArray)