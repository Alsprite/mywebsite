function validateKayttajaID() {
    let x = document.forms["kokohomma"]["userID"].value;
    if (x == "") {
        alert("Käyttäjä ID-kenttä on tyhjä");
    }
    else if (x.length < 6) {
        alert("Käyttäjä ID pitää olla vähintään 6 merkkiä pitkä");
        return false;
    } else {
        console.log(x);
    }
}
function validateSalasana() {
    let ss = document.forms["kokohomma"]["salasana"].value;
    if (ss == "") {
        alert("Salasana-kenttä on tyhjä");
    } else {
        console.log(ss);
    }
}
function validateNimi() {
    let nimi = document.forms["kokohomma"]["nimi"].value;
    if (nimi == "") {
        alert("Nimi-kenttä on tyhjä");
    } else {
        console.log(nimi);
    }
}
function validateOsoite() {
    let osoite = document.forms["kokohomma"]["osoite"].value;
    if (osoite == "") {
        alert("Osoite-kenttä on tyhjä");
    } else {
        console.log(osoite);
    }
}
function validateMaa() {
    let maa = document.forms["kokohomma"]["select"].value;
    if (maa == "eivalittu") {
        alert("Maata ei ole valittu!");
    } else {
        console.log(maa);
    }
}
function validatePostinumero() {
    let postiNro = document.forms["kokohomma"]["postinumero"].value;
    if (postiNro.length == 5) {
        console.log(postiNro);
    } else {
        alert("Postinumeron pitää olla 5 merkkiä")
    }
}
function validateSahkoposti() {
    let sposti = document.forms["kokohomma"]["sahkoposti"].value;
    if (sposti.includes("@")) {
        console.log(sposti);
    } else {
        alert("Sähköpostiosoitteen tulee olla sähköpostiosoitteen muotoinen");
    }
}
function validateSukupuoli() {
    let sukupuoli = document.forms["kokohomma"]["sukupuoli"].value;
    if (sukupuoli.value == "") {
        alert("Sukupuoli on valitsematta");
    } else {
        console.log(sukupuoli);   
    }
}
function validateKieli() {
    let kieli = document.forms["kokohomma"]["kieli"].value;
    if (kieli.value == "") {
        alert("Sukupuoli on valitsematta");
    } else {
        console.log(kieli);   
    }
}
function validateLisatietoja() {
    let lisatietoja = document.forms["kokohomma"]["lisatietoja"].value;
    console.log(lisatietoja);
}
let nappiSubmit = document.getElementById("submit");

nappiSubmit.addEventListener('click', () => {
    validateKayttajaID();
    validateSalasana();
    validateNimi();
    validateOsoite();
    validateMaa();
    validatePostinumero();
    validateSahkoposti();
    validateSukupuoli();
    validateKieli();
    validateLisatietoja();
    return false;
});