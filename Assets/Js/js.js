function calcularmn() {
    document.getElementById("pcup").value = sabermn().toFixed(2) + " CUP";
    document.getElementById("pusd").value = saberusd().toFixed(2) + " USD";

    if (document.getElementById("tasa-cambio").value != "") {
        document.getElementById("tcup").value = totalcup().toFixed(2) + " CUP";
        document.getElementById("tusd").value = totalusd().toFixed(2) + " USD";
    }

    else {
        document.getElementById("tcup").value = "";
        document.getElementById("tusd").value = "";
    }

};

function calcularusd() {
    document.getElementById("pusd").value = saberusd().toFixed(2) + " USD";
    document.getElementById("pcup").value = sabermn().toFixed(2) + " CUP";

    if (document.getElementById("tasa-cambio").value != "") {
        document.getElementById("tcup").value = totalcup().toFixed(2) + " CUP";
        document.getElementById("tusd").value = totalusd().toFixed(2) + " USD";
    }

    else {
        document.getElementById("tcup").value = "";
        document.getElementById("tusd").value = "";
    }

};







function cup() {
    document.getElementById("section1").style.display = "contents";
    document.getElementById("section2").style.display = "none";

};

function usd() {
    document.getElementById("section2").style.display = "contents";
    document.getElementById("section1").style.display = "none";

};


function tasacambio() {
    if (document.getElementById("tc").innerHTML == "Usar Tasa de Cambio Manual") {
       document.getElementById("tc").innerHTML = "Usar Tasa de Cambio del Toque";
       document.getElementById("tasa-cambio").value = "";
      
        
    }

     else {
        document.getElementById("tc").innerHTML = "Usar Tasa de Cambio Manual";
       
    }

};




