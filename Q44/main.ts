function make_sandwich(...items: string[]){
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("cheese" , "patty");
make_sandwich("jalapeno" , "ranch" , "steak");
make_sandwich("crust" , "cheddar" , "mustard");