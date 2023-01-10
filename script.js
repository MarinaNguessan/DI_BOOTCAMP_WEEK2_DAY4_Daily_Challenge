/*Parcourons le tableau afin d'afficher les étoiles après la saisie de l'utilisateur*/
let wordSeparetedByComa = prompt("Saisissez des mots séparé par des virgule svp :");
let wordTab = wordSeparetedByComa.split(",");
let maxLenght = -1;
let asterix = '';
let space = ' ';
for(let i of wordTab) {
    if(i.length > maxLenght) {
        maxLenght = i.length;
    }
}

maxLenght+=4;

for(let i = 1; i <= maxLenght;i++) {
    asterix+='*';
}
console.log(asterix);
for(let i of wordTab) {
    if(i.length < (maxLenght -4)) {
        //space*=(maxLenght-4-Number(i.length));
        for(let j=0; j<(maxLenght-4-Number(i.length));j++) {
            space+=' ';
        }
        console.log(`* ${i}${space}*`);
        space = ' ';
    }else {
        console.log(`* ${i} *`);
    }

}
console.log(asterix);//hello,world,in,a,frame


