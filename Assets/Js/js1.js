function limpiarMn() {
    document.getElementById("b1000").value = "";
    document.getElementById("b10").value = "";
    document.getElementById("b500").value = "";
    document.getElementById("b5").value = "";
    document.getElementById("b200").value = "";
    document.getElementById("b3").value = "";
    document.getElementById("b100").value = "";
    document.getElementById("b1").value = "";
    document.getElementById("b50").value = "";
    document.getElementById("b0.2").value = "";
    document.getElementById("b20").value = "";
    document.getElementById("b0.05").value = "";
    document.getElementById("pcup").value = "";
    document.getElementById("tcup").value = "";
    document.getElementById("tusd").value = "";


};

function limpiarUsd() {
    document.getElementById("u1000").value = "";
    document.getElementById("u10").value = "";
    document.getElementById("u500").value = "";
    document.getElementById("u5").value = "";
    document.getElementById("u200").value = "";
    document.getElementById("u3").value = "";
    document.getElementById("u100").value = "";
    document.getElementById("u1").value = "";
    document.getElementById("u50").value = "";
    document.getElementById("u0.2").value = "";
    document.getElementById("u20").value = "";
    document.getElementById("u0.05").value = "";
    document.getElementById("pusd").value = "";
    document.getElementById("tcup").value = "";
    document.getElementById("tusd").value = "";

};

function sabermn() {
    let mn = 0;
    mn = parseFloat(document.getElementById("b1000").value * 1000) +
        parseFloat(document.getElementById("b10").value * 10) +
        parseFloat(document.getElementById("b500").value * 500) +
        parseFloat(document.getElementById("b5").value * 5) +
        parseFloat(document.getElementById("b200").value * 200) +
        parseFloat(document.getElementById("b3").value * 3) +
        parseFloat(document.getElementById("b100").value * 100) +
        parseFloat(document.getElementById("b1").value * 1) +
        parseFloat(document.getElementById("b50").value * 50) +
        parseFloat(document.getElementById("b0.2").value * 0.2) +
        parseFloat(document.getElementById("b20").value * 20) +
        parseFloat(document.getElementById("b0.05").value * 0.05);

    return mn;

}


function saberusd() {
    let usd = 0;
    usd = parseFloat(document.getElementById("u1000").value * 1000) +
          parseFloat(document.getElementById("u10").value * 10) +
          parseFloat(document.getElementById("u500").value * 500) +
          parseFloat(document.getElementById("u5").value * 5) + 
          parseFloat(document.getElementById("u200").value * 200) +
          parseFloat(document.getElementById("u3").value * 3) +
          parseFloat(document.getElementById("u100").value * 100) +
          parseFloat(document.getElementById("u1").value * 1) +
          parseFloat(document.getElementById("u50").value * 50) +
          parseFloat(document.getElementById("u0.2").value * 0.2) +
          parseFloat(document.getElementById("u20").value * 20) +
          parseFloat(document.getElementById("u0.05").value * 0.05);
          return usd;

}


function totalcup(){
  return  sabermn() + saberusd() * parseFloat(document.getElementById("tasa-cambio").value);                    

};


function totalusd(){
    return  saberusd() + sabermn() /  parseFloat(document.getElementById("tasa-cambio").value);             
  
  };


  function tasatoque(){
   document.getElementById("tasa2").value ="";
  }