var guest_list = ['maheen', 'paras', 'sobia', 'maira'];
// for(let i=0; i<guest_list.length; i++)
// {console.log('Respected Madam ' + guest_list[i] + ',\nWe would like to invite you for a dinner tomorrow.\nThank You\n')}
var not_coming = 'maira';
var new_guest = 'ayesha';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nWe would like to invite you for a dinner tomorrow.\nThank You\n');
}
guest_list.unshift('ifrah', 'laila', 'mehnaz');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nWe found a bigger table so you are invited to the dinner.\nThank You\n');
}
