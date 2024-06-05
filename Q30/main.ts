let users: string [] = ['sana' , 'ali' , 'sara' , 'talha' , 'ashar']
for (let user of users){
    if(user === "ashar"){
        console.log("Hello ashar, would you like to see the status report?")
    }

else{
    console.log(`Hello ${user}, 'thank you for logging in again.`)
}
}