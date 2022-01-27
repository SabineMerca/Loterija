const vardi=['Jana Zilupe', 'Ilze Gulbe', 'Edmunds Mūks', 'Letīcija Zepa', 'Jānis Priede']
const balvas=['Telefons', 'Auto', 'Māja', 'Putekļusūcējs', 'Dators']
const naudaKopa=1000000; //kopeja summa

let uzvaretajuSkaits=5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
for (let i = 0; i<uzvaretajuSkaits; i++){
let rand= Math.random()*5;

rand= Math.floor(rand); //noapaļo uz leju
let uzvaretajs = vardi[rand]; //izvada konsole
rindas.innerHTML += `
<tr>
<td>${i+1}</td>
<td>${uzvaretajs}</td>
</tr>`
}