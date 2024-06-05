//storing a person's name in variable

let personName:string = "Maheen Hashmi"

//printing the name in lowercase

console.log("Lowercase:", personName.toLowerCase());

//printing the name in uppercase

console.log("Uppercase:", personName.toUpperCase());

//printing in title case

console.log("Titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));