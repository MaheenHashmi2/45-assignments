let guest_list:string[]=['maheen','paras','sobia','maira'];
for(let i=0; i<guest_list.length; i++)
{console.log('Respected Madam ' + guest_list[i] + ',\nWe would like to invite you for a dinner tomorrow.\nThank You\n')}

let not_coming:string='maira';
let new_guest:string='ayesha';
guest_list[3]=new_guest;
for(let i=0; i<guest_list.length; i++)
{console.log('Respected Madam ' + guest_list[i] + ',\nWe would like to invite you for a dinner tomorrow.\nThank You\n')}
console.log(`Ms. ${not_coming} will not be coming for dinner tomorrow. `)
