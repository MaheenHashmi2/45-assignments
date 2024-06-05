function describe_city(nameOfCity: string, country: string = "Pakistan"){
    return `${nameOfCity} is in ${country}`;
};

let city1 = describe_city("Karachi");
let city2 = describe_city("Lahore");
let city3 = describe_city("Islamabad");
let city4 = describe_city("Seoul" , "South Korea");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);