function temperatureConverter(valNum) {
  if (document.getElementById("select").value == "cTOf") {
    celsius = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=celsius*9/5+32;
  }
  if (document.getElementById("select").value == "fTOc") {
    fahrenheit = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(fahrenheit-32)*5/9;
  }
  if (document.getElementById("select").value == "cTOk") {
    kelvin = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=kelvin+273.15;
  }
  if (document.getElementById("select").value == "kTOc") {
    kelvin = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=kelvin-273.15;
  }
}




//cTOf = celsius * 9/5+32
//fTOc = (fahrenheit - 32) * 5/9