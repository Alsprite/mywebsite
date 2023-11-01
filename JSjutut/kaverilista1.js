var nimiLista = [];

function lista() {
    let template = nimiLista.map(nimi => `<li>${nimi}</li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
}
lista();
    
    for (var i=0; i < 10; i++) {
        nimiLista.push(prompt("Kymmenen kaverin nimet:"));
        prompt.value = ``;
        lista();
        console.log(nimiLista);
    }
