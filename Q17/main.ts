let guest_list:string[]=['maheen','paras','sobia','maira'];
// for(let i=0; i<guest_list.length; i++)
// {console.log('Respected Madam ' + guest_list[i] + ',\nWe would like to invite you for a dinner tomorrow.\nThank You\n')}

let not_coming:string='maira';
let new_guest:string='ayesha';
guest_list[3]=new_guest;
// for(let i=0; i<guest_list.length; i++)
// {console.log('Respected Madam ' + guest_list[i] + ',\nWe would like to invite you for a dinner tomorrow.\nThank You\n')}

guest_list.unshift('ifrah','laila','mehnaz');
// for(let i=0; i<guest_list.length; i++)
// {console.log('Respected Madam ' + guest_list[i] + ',\nWe found a bigger table so you are invited to the dinner.\nThank You\n')}
console.log('\nUnfortunately the table was not arranged so only two people are invited.')
while(guest_list.length>2){let remove_guest = guest_list.pop();
console.log(`Sorry Madam.${remove_guest} you are not invited to dinner.`);
}
for(let i=0; i<guest_list.length; i++)
{console.log('Respected Madam ' + guest_list[i] + ',\nYou are still invited to dinner tomorrow.\nThank You\n')}
guest_list.splice(0,2)
console.log(guest_list)