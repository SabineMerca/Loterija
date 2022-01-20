const vardi=['Jana Zilupe', 'Ilze Gulbe', 'Edmunds Mūks', 'Letīcija Zepa', 'Jānis Priede']
const balvas=['Telefons', 'Auto', 'Māja', 'Putekļusūcējs', 'Dators']
const naudaKopa=1000000; //kopeja summa
let uzvaretajuSkaits=5;
let rand= Math.random()*5;
rand= Math.floor(rand); //noapaļo uz leju
console.log(vardi[rand]); //izvada konsolē