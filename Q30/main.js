var users = ['sana', 'ali', 'sara', 'talha', 'ashar'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "ashar") {
        console.log("Hello ashar, would you like to see the status report?");
    }
    else {
        console.log("Hello ".concat(user, ", 'thank you for logging in again."));
    }
}
