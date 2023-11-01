var klikkaukset = 0;
var Cps = 0;
var apurimaara = 0;
var apuricost = 10;
var henrimaara = 0;
var henricost = 20;
var posomaara = 0;
var posocost = 40;

function timer() {
    klikkaukset = klikkaukset + Cps;
    maara.innerHTML = klikkaukset;
}
function peli() {
    klikkaukset = klikkaukset + 1;
    maara.innerHTML = klikkaukset;
}
function reset() {
    location.reload();
}
function bongo() {
    var audio = new Audio("../media/bongo.wav");
    audio.play();
}
function ostaApuri() {
    if (klikkaukset >= apuricost) {
        klikkaukset -= apuricost;
        apurimaara += 1;
        apuricost += 2.5;
        apuriCost.innerHTML = apuricost;
        apuriMaara.innerHTML = apurimaara;
        Cps += 1;
        CpS.innerHTML = Cps;
    } else {
        maara.innerHTML = "Keksisi eivät riitä ostokseen!";
    }
}
function ostaHenri() {
    if (klikkaukset >= henricost) {
        klikkaukset -= henricost;
        henrimaara += 1;
        henricost += 5;
        henriCost.innerHTML = henricost;
        henriMaara.innerHTML = henrimaara;
        Cps += 2.5;
        CpS.innerHTML = Cps;
    } else {
        maara.innerHTML = "Keksisi eivät riitä ostokseen!";
    }
}
function ostaPoso() {
    if (klikkaukset >= posocost) {
        klikkaukset -= posocost;
        posomaara += 1;
        posocost += 7.5;
        posoCost.innerHTML = posocost;
        posoMaara.innerHTML = posomaara;
        Cps += 4;
        CpS.innerHTML = Cps;
    } else {
        maara.innerHTML = "Keksisi eivät riitä ostokseen!";
    }
}
setInterval(timer, 1000);