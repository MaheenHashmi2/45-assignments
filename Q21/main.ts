interface item {
    name:string
    price:number
}
const book: item ={
    name: 'Secret Garden'
    price: 2000
}
const iphone: item ={
    name: 'iphone14promax'
    price: 210000
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`iphone name: ${iphone.name}, price: $${iphone.price}`)