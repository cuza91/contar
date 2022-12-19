function cup1() {
    document.getElementById("sectionm1").style.display = "contents";
    document.getElementById("sectionm2").style.display = "none";

};

function usd1() {
    document.getElementById("sectionm2").style.display = "contents";
    document.getElementById("sectionm1").style.display = "none";

};


function limpiarMn1() {
    document.getElementById("m1000").value = "";
    document.getElementById("m10").value = "";
    document.getElementById("m500").value = "";
    document.getElementById("m5").value = "";
    document.getElementById("m200").value = "";
    document.getElementById("m3").value = "";
    document.getElementById("m100").value = "";
    document.getElementById("m1").value = "";
    document.getElementById("m50").value = "";
    document.getElementById("m0.20").value = "";
    document.getElementById("m20").value = "";
    document.getElementById("m0.05").value = "";
    document.getElementById("pcup1").value = "";
    document.getElementById("tcup1").value = "";
    document.getElementById("tusd1").value = "";


};

function limpiarUsd1() {
    document.getElementById("i1000").value = "";
    document.getElementById("i10").value = "";
    document.getElementById("i500").value = "";
    document.getElementById("i5").value = "";
    document.getElementById("i200").value = "";
    document.getElementById("i3").value = "";
    document.getElementById("i100").value = "";
    document.getElementById("i1").value = "";
    document.getElementById("i50").value = "";
    document.getElementById("i0.20").value = "";
    document.getElementById("i20").value = "";
    document.getElementById("i0.05").value = "";
    document.getElementById("pusd1").value = "";
    document.getElementById("tcup1").value = "";
    document.getElementById("tusd1").value = "";

};


function calcularmn1() {
    document.getElementById("pcup1").value = sabermn1().toFixed(2) + " CUP";
    document.getElementById("pusd1").value = saberusd1().toFixed(2) + " USD";

    if (document.getElementById("tasa2").value != "") {
        document.getElementById("tcup1").value = totalcup1().toFixed(2) + " CUP";
        document.getElementById("tusd1").value = totalusd1().toFixed(2) + " USD";
    }

    else {
        document.getElementById("tcup1").value = "";
        document.getElementById("tusd1").value = "";
    }

};

function calcularusd1() {
    document.getElementById("pusd1").value = saberusd1().toFixed(2) + " USD";
    document.getElementById("pcup1").value = sabermn1().toFixed(2) + " CUP";

    if (document.getElementById("tasa2").value != "") {
        document.getElementById("tcup1").value = totalcup1().toFixed(2) + " CUP";
        document.getElementById("tusd1").value = totalusd1().toFixed(2) + " USD";
    }

    else {
        document.getElementById("tcup1").value = "";
        document.getElementById("tusd1").value = "";
    }

};




function sabermn1() {
    let mn = 0;
    mn = parseFloat(document.getElementById("m1000").value * 1000) +
        parseFloat(document.getElementById("m10").value * 10) +
        parseFloat(document.getElementById("m500").value * 500) +
        parseFloat(document.getElementById("m5").value * 5) +
        parseFloat(document.getElementById("m200").value * 200) +
        parseFloat(document.getElementById("m3").value * 3) +
        parseFloat(document.getElementById("m100").value * 100) +
        parseFloat(document.getElementById("m1").value * 1) +
        parseFloat(document.getElementById("m50").value * 50) +
        parseFloat(document.getElementById("m0.20").value * 0.2) +
        parseFloat(document.getElementById("m20").value * 20) +
        parseFloat(document.getElementById("m0.05").value * 0.05);

    return mn;

}


function saberusd1() {
    let usd = 0;
    usd = parseFloat(document.getElementById("i1000").value * 1000) +
          parseFloat(document.getElementById("i10").value * 10) +
          parseFloat(document.getElementById("i500").value * 500) +
          parseFloat(document.getElementById("i5").value * 5) + 
          parseFloat(document.getElementById("i200").value * 200) +
          parseFloat(document.getElementById("i3").value * 3) +
          parseFloat(document.getElementById("i100").value * 100) +
          parseFloat(document.getElementById("i1").value * 1) +
          parseFloat(document.getElementById("i50").value * 50) +
          parseFloat(document.getElementById("i0.20").value * 0.2) +
          parseFloat(document.getElementById("i20").value * 20) +
          parseFloat(document.getElementById("i0.05").value * 0.05);
          return usd;

}


function totalcup1(){
  return  sabermn1() + saberusd1() * parseFloat(document.getElementById("tasa2").value);                    

};


function totalusd1(){
    return  saberusd1() + sabermn1() /  parseFloat(document.getElementById("tasa2").value);             
  
  };


  function tasatoque(){
   document.getElementById("tasa2").value ="";
  }