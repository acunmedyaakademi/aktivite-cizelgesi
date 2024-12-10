// Bir haftalık aktivite çizelgesi oluşturun. Kullanıcıdan her gün için bir gün adı ve o güne ait bir aktivite girilmesini isteyin. Girilen bilgileri bir diziye obje olarak kaydedin ve tüm çizelgeyi konsola yazdırın


let haftalikCizelge = [
    {

    }
];
for (let i = 1; i <= 7; i++) {
    gun = prompt(`${i}. gün için günün adi`);
    aktivite = prompt(`${i}. gün için aktivite giriniz.`);

    cizelge = {
        gun: gun,
        aktivite: aktivite,
    }
    haftalikCizelge.push(cizelge);
}

console.log(haftalikCizelge);




