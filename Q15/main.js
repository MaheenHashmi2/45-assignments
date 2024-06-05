var guest_list = ['maheen', 'paras', 'sobia', 'maira'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nWe would like to invite you for a dinner tomorrow.\nThank You\n');
}
var not_coming = 'maira';
var new_guest = 'ayesha';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nWe would like to invite you for a dinner tomorrow.\nThank You\n');
}
console.log("Ms. ".concat(not_coming, " will not be coming for dinner tomorrow. "));
