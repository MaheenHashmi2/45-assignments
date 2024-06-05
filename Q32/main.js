var current_users = ["mehwish", "dania", "faisal", "nasreen", "majid"];
var new_users = ["nabeel", "sameen", "dania", "maheen", "yasmeen"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is availabe."));
    }
});
