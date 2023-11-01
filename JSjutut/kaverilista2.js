var nimiLista = [];

function lisaaNimi() {
    let template = nimiLista.map(nimi => `<li>${nimi}</li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
}
lisaaNimi();

let nappiLisaa = document.getElementById('lisays');
let syote = document.querySelector('input');

nappiLisaa.addEventListener('click', () => {
    nimiLista.push(syote.value);
    syote.value = ``;
    lisaaNimi();
    console.log(nimiLista);
});

function poistaNimi() {
    let template = nimiLista.map(nimi => `<li>${nimi}</li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
}
poistaNimi();

let nappiPoisto = document.getElementById('poisto');
let syote2 = document.querySelector('input');

nappiPoisto.addEventListener('click', () => {
    for(var i=0; i < nimiLista.length; i++) {
        if (nimiLista[i] === syote2.value) {
            nimiLista.splice(i, 1);
        }
    }
    poistaNimi();
});

function jarjestaNimet() {
    let template = nimiLista.map(nimi => `<li>${nimi}</li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
}
jarjestaNimet();

let nappiJarjesta = document.getElementById('jarjesta');

nappiJarjesta.addEventListener('click', () => {
    nimiLista.sort();
    jarjestaNimet();
    return false;
});
