var pelaajienMaara = 0;
var pelivuoro = 1;
var pelaaja1 = "";
var pelaaja2 = "";
var pelaaja3 = "";
var piste1 = 0;
var piste2 = 0;
var piste3 = 0;
var slot1 = 0;
var slot2 = 0;
var pisteetnyt = 0;
var tuplat = 0;
var noppienMaara = 0;
var peli1 = 0;
var peli2 = 0;
var peli3 = 0;

var noppa0 = new Image()
noppa0.src="juurespeliKuvat/1.png";
var noppa1 = new Image()
noppa1.src="juurespeliKuvat/2.png";
var noppa2 = new Image()
noppa2.src="juurespeliKuvat/3.png";
var noppa3 = new Image()
noppa3.src="juurespeliKuvat/4.png";
var noppa4 = new Image()
noppa4.src="juurespeliKuvat/5.png";
var noppa5 = new Image()
noppa5.src="juurespeliKuvat/6.png";

function yksiNoppa() {
    noppienMaara = 1;
    document.getElementById("noppa1").style.display = "block";
    document.getElementById("tuplaDiv").style.display = "none";
}
function kaksiNoppa() {
    noppienMaara = 2;
    document.getElementById("noppa1").style.display = "inline";
    document.getElementById("noppa2").style.display = "inline";
}

function heita() {
    arvonta();
    vaihda();
    tulos();

    if (noppienMaara == 1) {
        tuplat = 0;
    }
    if (noppienMaara == 2) {
        if (tuplat >=3) {
        pisteetnyt=0;
        document.getElementById("tuplaMaara").innerText=tuplat;
        document.getElementById("pisteetNyt").innerText=pisteetnyt;
        jaa();
        }
    }
}
function lopetaPeli() {
    document.getElementById("voitto").style.display = "block";
    document.getElementById("peliVuoro").style.display = "none";
    document.getElementById("tilasto").style.display = "none";
    document.getElementById("noppa1").style.display = "none";
    document.getElementById("noppa2").style.display = "none";
    document.getElementById("heita").style.display = "none";
    document.getElementById("jaa").style.display = "none";
    document.getElementById("tuplaDiv").style.display = "none";
    document.getElementById("pisteet").style.display = "none";
    var voitto = new Audio("juurespeliKuvat/voitto.mp3");
    voitto.play();
    voitto.onended = function() {
        location.reload();
    }
}
function jaa() {
    if (piste1+pisteetnyt>=100 && pelivuoro == 1) {
        lopetaPeli();   
    }
    if (piste2+pisteetnyt>=100 && pelivuoro == 2) {
        lopetaPeli();   
    }
    if (piste3+pisteetnyt>=100 && pelivuoro == 3) {
        lopetaPeli();   
    }
    if (pelivuoro==3&&pelaajienMaara==3) {
        pelivuoro=1;
        document.getElementById("pelivuoro").innerText=pelaaja1;
        piste3=pisteetnyt+piste3;
        document.getElementById("3pisteet").innerText=piste3;
        vuoronvaihto();
        return;
    }
    if (pelivuoro==2&&pelaajienMaara==2) {
        pelivuoro=1;
        document.getElementById("pelivuoro").innerText=pelaaja1;
        piste2=pisteetnyt+piste2;
        document.getElementById("2pisteet").innerText=piste2;
        vuoronvaihto();
        return;
    }
    if (pelivuoro==3) {
        pelivuoro=pelivuoro+1;
        document.getElementById("pelivuoro").innerText=pelaaja1;
        piste3=pisteetnyt+piste3;
        document.getElementById("3pisteet").innerText=piste3;
        vuoronvaihto();
        return;
    } 
    if (pelivuoro==2) {
        pelivuoro=pelivuoro+1;
        document.getElementById("pelivuoro").innerText=pelaaja3;
        piste2=pisteetnyt+piste2;
        document.getElementById("2pisteet").innerText=piste2;
        vuoronvaihto();
        return;
    } 
    if (pelivuoro==1) {
        pelivuoro=pelivuoro+1;
        document.getElementById("pelivuoro").innerText=pelaaja2;
        piste1=pisteetnyt+piste1;
        document.getElementById("1pisteet").innerText=piste1;
        vuoronvaihto();
        return;
    }  
   
}
    function vuoronvaihto() {
        pisteetnyt=0;
        tuplat=0;
        
        document.getElementById("slot1").src=("juurespeliKuvat/0.png");
        document.getElementById("slot2").src=("juurespeliKuvat/0.png");
        document.getElementById("pisteetNyt").innerText=pisteetnyt;
        document.getElementById("tuplaMaara").innerText=tuplat;
    }
function vaihda() {
    document.getElementById("slot1").src=eval("noppa"+slot1+".src");
    document.getElementById("slot2").src=eval("noppa"+slot2+".src");
}
function arvonta() {
    slot1 = Math.round(Math.random()*5);
    if (noppienMaara == 2) {
        slot2 = Math.round(Math.random()*5);
    }
}
function tulos() {
    if (noppienMaara == 1) {
        if (slot1 == 0) {
                ykkonen();
                return;
            }
    } else {
        if (slot1==0 && slot2!=0) {
        ykkonen();
        return;
        }
        if (slot2==0 && slot1!=0) {
            ykkonen();
            return;
        }
        if (slot1==0 && slot2==0) {
            ykkonen();
            return;
        }
        if (slot2==0 && slot1==0) {
            ykkonen();
            return;
        }
    }

    if (noppienMaara == 1) {
        pisteetnyt=1+slot1+pisteetnyt;
        document.getElementById("pisteetNyt").innerHTML=pisteetnyt;
    } else {
        if (slot1+slot2 == 0 && tuplat<=2) {
        pisteetnyt=25+pisteetnyt;
        tuplat=tuplat+1;
        tupla();
        document.getElementById("tuplaMaara").innerText=tuplat;
        document.getElementById("pisteetNyt").innerText=pisteetnyt;
        return;
    } else if (slot1==slot2 && slot1 != 0 && tuplat<=2) {
        pisteetnyt=((2+slot1+slot2)*2)+pisteetnyt;
        tuplat=tuplat+1;
        tupla();
        document.getElementById("tuplaMaara").innerText=tuplat;
        document.getElementById("pisteetNyt").innerText=pisteetnyt;
        return;
    } else {
        pisteetnyt=2+slot1+slot2+pisteetnyt;
        document.getElementById("pisteetNyt").innerText=pisteetnyt;
    }
    }
}
    
function kaksiNimea() {
    document.getElementById("nimet2").style.display = "block";
}
function kolmeNimea() {
    document.getElementById("nimet3").style.display = "block";
}

function kaksiPelaajaa() {
    pelaajienMaara = 2;
    document.getElementById("laatikko1").style.display = "none";
    document.getElementById("laatikko2").style.display = "block";
    document.getElementById("tilasto").style.display = "block";
    document.getElementById("pelaaja1").style.display = "block";
    document.getElementById("pelaaja2").style.display = "block";
}
function kolmePelaajaa() {
    pelaajienMaara = 3;
    document.getElementById("laatikko1").style.display = "none";
    document.getElementById("laatikko2").style.display = "block";
    document.getElementById("tilasto").style.display = "block";
    document.getElementById("pelaaja1").style.display = "block";
    document.getElementById("pelaaja2").style.display = "block";
    document.getElementById("pelaaja3").style.display = "block";
}
function validateKaksi() {
    if (document.getElementById("user2.1").value.trim().length == 0) {
        pelaaja1 = "Pelaaja 1";
    } else {
        pelaaja1 = document.getElementById("user2.1").value;
        document.getElementById("nimi1").innerHTML = pelaaja1;
    }

    if (document.getElementById("user2.2").value.trim().length == 0) {
        pelaaja2 = "Pelaaja 2";
    } else {
        pelaaja2 = document.getElementById("user2.2").value;
        document.getElementById("nimi2").innerHTML = pelaaja2;
    }
    document.getElementById('pelivuoro').innerHTML = pelaaja1;
    return false;
}
function validateKolme() {
    if (document.getElementById("user3.1").value.trim().length == 0) {
        pelaaja1 = "Pelaaja 1";
    } else {
        pelaaja1 = document.getElementById("user3.1").value;
        document.getElementById("nimi1").innerHTML = pelaaja1;
    }

    if (document.getElementById("user3.2").value.trim().length == 0) {
        pelaaja2 = "Pelaaja 2";
    } else {
        pelaaja2 = document.getElementById("user3.2").value;
        document.getElementById("nimi2").innerHTML = pelaaja2;
    }
    if (document.getElementById("user3.3").value.trim().length == 0) {
        pelaaja3 = "Pelaaja 3";
    } else {
        pelaaja3 = document.getElementById("user3.3").value;
        document.getElementById("nimi3").innerHTML = pelaaja3;
    }
    document.getElementById('pelivuoro').innerHTML = pelaaja1;
    return false;
}
function ykkonen() {
    pisteetnyt = 0;
    var yksi = new Audio("juurespeliKuvat/ykkoset.mp3");
    yksi.play();
    jaa();
}
function tupla() {
    if (noppienMaara == 2) {
    var tuplaAani = new Audio("juurespeliKuvat/tuplat.mp3");
    tuplaAani.play();
    }
    
}
function valikkoAani() {
    var aani = new Audio("juurespeliKuvat/closedhihat.mp3");
    aani.play();
}
function aloitusAani() {
    var aloitusaani = new Audio("juurespeliKuvat/halfhihat.mp3");
    aloitusaani.play();
}
function heittoAani() {
    var heitoaani = new Audio("juurespeliKuvat/heitto.mp3");
    heitoaani.play();
}

document.getElementById('saantobutton').addEventListener("click", function()
    {
saannot = document.getElementById("saannot");
if (saannot.style.display == "none") {
   document.getElementById("saannot").style.display="block";
        } else {
            document.getElementById("saannot").style.display="none";
        }
    }, false);