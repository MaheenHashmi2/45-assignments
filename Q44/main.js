function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(', '), "."));
}
make_sandwich("cheese", "patty");
make_sandwich("jalapeno", "ranch", "steak");
make_sandwich("crust", "cheddar", "mustard");
