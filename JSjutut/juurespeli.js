var panos=1;
var rahaa=50;
var havioaani = new Audio("juurespeliKuvat/havioaani.mp3");


var lukitseminen=false;
var lukko1=false;
var lukko2=false;
var lukko3=false;
var lukko4=false;

function lukitusAani() {
  var lukitusaani = new Audio("juurespeliKuvat/lukkoaani.mp3");
  lukitusaani.play();
}
function velanOtto() {
  var velkaSound = new Audio("juurespeliKuvat/velkaAani.mp3");
  velkaSound.play();
  velkaSound.onended = function() {
    location.reload();
  }
}

function peliAani() {
  var peliaani = new Audio("juurespeliKuvat/peliaani.mp3");
  peliaani.play();
}
function pelaa() {
  if (panos>rahaa) {
    document.getElementById("rahaMaara").innerHTML = 0;
    havioaani.play();
    document.getElementById("voittotaulukko").src = "juurespeliKuvat/ulosotto.jpg";
    document.style.display = "block";
    document.getElementById("pelaaNappi").disabled = true;
  } else {
    rahaa -= panos;
  document.getElementById("rahaMaara").innerHTML = rahaa;
  }

  if (lukko1 == true || lukko2 == true || lukko3 == true || lukko4 == true){
    lukitseminen = true;
  } else {
    lukitseminen = false;
  }
  if (lukko1==false) {
    vaihdaKuva("slot1");
  }
  if (lukko2==false) {
    vaihdaKuva("slot2");
  }
  if (lukko3==false) {
    vaihdaKuva("slot3");
  }
  if (lukko4==false) {
    vaihdaKuva("slot4");
  }
  tarkista_voitto();
  lukko1=false;
  lukko2=false;
  lukko3=false;
  lukko4=false;

  if (lukitseminen==false) {
    document.getElementById("lukitus1").src = "juurespeliKuvat/lukko.png";
    document.getElementById("lukitus1").disabled = false;
    document.getElementById("lukitus2").src = "juurespeliKuvat/lukko.png";
    document.getElementById("lukitus2").disabled = false;
    document.getElementById("lukitus3").src = "juurespeliKuvat/lukko.png";
    document.getElementById("lukitus3").disabled = false;
    document.getElementById("lukitus4").src = "juurespeliKuvat/lukko.png";
    document.getElementById("lukitus4").disabled = false;
  }
  else {
    document.getElementById("lukitus1").src = "juurespeliKuvat/lukko3.png";
    document.getElementById("lukitus1").disabled = true;
    document.getElementById("lukitus2").src = "juurespeliKuvat/lukko3.png";
    document.getElementById("lukitus2").disabled = true;
    document.getElementById("lukitus3").src = "juurespeliKuvat/lukko3.png";
    document.getElementById("lukitus3").disabled = true;
    document.getElementById("lukitus4").src = "juurespeliKuvat/lukko3.png";
    document.getElementById("lukitus4").disabled = true;
  }
}

function vaihdaKuva(slot) {
  var image = "";
  randInt = Math.floor((Math.random() * 5) + 1);
  console.log(randInt);
  switch(randInt) {
    case 1 :
        image = "juurespeliKuvat/porkkana.png";
        break;
    case 2 :
        image = "juurespeliKuvat/lanttu.png";
        break;
    case 3:
        image = "juurespeliKuvat/nauris.png";
        break;
    case 4:
        image = "juurespeliKuvat/punajuuri.png";
        break;
    case 5:
        image = "juurespeliKuvat/seiska.png";
        break;
      }
  document.getElementById(slot).src = image;
}

function lukitus(slot_nro) {
  switch(slot_nro) {
    case 1 :
      if (lukko1==true) {
        lukko1=false;
        document.getElementById("lukitus1").src = "juurespeliKuvat/lukko.png";
      }
      else {
        lukko1=true;
        document.getElementById("lukitus1").src = "juurespeliKuvat/lukko2.png";
      }
      break;
    case 2 :
      if (lukko2==true) {
        lukko2=false;
        document.getElementById("lukitus2").src = "juurespeliKuvat/lukko.png";
      }
      else {
        lukko2=true;
        document.getElementById("lukitus2").src = "juurespeliKuvat/lukko2.png";
      }
      break;
    case 3 :
      if (lukko3==true) {
        lukko3=false;
        document.getElementById("lukitus3").src = "juurespeliKuvat/lukko.png";
      }
      else {
        lukko3=true;
        document.getElementById("lukitus3").src = "juurespeliKuvat/lukko2.png";
      }
      break;
    case 4 :
      if (lukko4==true) {
        lukko4=false;
        document.getElementById("lukitus4").src = "juurespeliKuvat/lukko.png";
      }
      else {
        lukko4=true;
        document.getElementById("lukitus4").src = "juurespeliKuvat/lukko2.png";
      }
      break;
    }
  }

function asetaPanos(x) {
  document.getElementById("panosMaara").innerHTML = x;  
  panos = x;
  console.log("Panos:" + panos);
  if (panos == 1) {
    document.getElementById("voittotaulukko").src = "juurespeliKuvat/taulukko1.png";
  } else if (panos == 2) {
    document.getElementById("voittotaulukko").src = "juurespeliKuvat/taulukko2.png";
  } else {
    document.getElementById("voittotaulukko").src = "juurespeliKuvat/taulukko3.png";
  }
}

function tarkista_voitto() {
    var kuva1 = document.getElementById("slot1").src;
    var kuva2 = document.getElementById("slot2").src;
    var kuva3 = document.getElementById("slot3").src;
    var kuva4 = document.getElementById("slot4").src;
    var audio = new Audio("juurespeliKuvat/voittoaani.mp3");

    if (kuva1 == kuva2 && kuva2 == kuva3 && kuva3 == kuva4) {
        var kuvaNimi = kuva1.split('/').pop();
          switch  (kuvaNimi) {
            case "juurespeliKuvat/porkkana.png" :
                  if (panos==1) {
                    rahaa = rahaa + 2;
                    audio.play();
                  }
                  else if (panos==2) {
                    rahaa = rahaa + 4;
                    audio.play();
                  }
                  else {
                    rahaa = rahaa + 6;
                    audio.play();
                  }
              break;
            case "juurespeliKuvat/lanttu.png" :
                  if (panos==1) {
                    rahaa = rahaa + 4;
                    audio.play();
                  }
                  else if (panos==2) {
                    rahaa = rahaa + 6;
                    audio.play();
                  }
                  else {
                    rahaa = rahaa + 8;
                    audio.play();
                  }
              break;
            case "juurespeliKuvat/nauris.png" :
                  if (panos==1) {
                    rahaa = rahaa + 6;
                    audio.play();
                  }
                  else if (panos==2) {
                    rahaa = rahaa + 8;
                    audio.play();
                  }
                  else {
                    rahaa = rahaa + 10;
                    audio.play();
                  }
              break;
            case "juurespeliKuvat/punajuuri.png" :
                if (panos==1) {
                  rahaa = rahaa + 8;
                  audio.play();
                }
                else if (panos==2) {
                  rahaa = rahaa + 10;
                  audio.play();
                }
                else {
                  rahaa = rahaa + 12;
                  audio.play();
                }
              break;
            case "juurespeliKuvat/seiska.png" :
              if (panos==1) {
                rahaa = rahaa + 10;
                audio.play();
              } 
              else if (panos==2) {
                  rahaa = rahaa + 12;
                  audio.play();
                } 
                else {
                  rahaa = rahaa + 15;
                  audio.play();
                }
              }
            }
          }