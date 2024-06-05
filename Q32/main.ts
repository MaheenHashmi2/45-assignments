let current_users: string[] = ["mehwish" , "dania" , "faisal" , "nasreen" , "majid"];
let new_users: string[] = ["nabeel" , "sameen" , "dania" , "maheen" , "yasmeen"];
new_users.forEach((newUser) => {
    if (
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )

     ){
        console.log(`${newUser} will need to enter a new username.`);
     } else {
        console.log(`${newUser} is availabe.`);
     }
})