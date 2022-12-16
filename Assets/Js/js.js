function calcularmn() {
    document.getElementById("pcup").value = sabermn();
    document.getElementById("pusd").value = saberusd();

    if (document.getElementById("tasa-cambio").value != "") {
        document.getElementById("tcup").value = totalcup();
        document.getElementById("tusd").value = totalusd();
    }

    else {
        document.getElementById("tcup").value = "";
        document.getElementById("tusd").value = "";
    }

};

function calcularusd() {
    document.getElementById("pusd").value = saberusd();
    document.getElementById("pcup").value = sabermn();

    if (document.getElementById("tasa-cambio").value != "") {
        document.getElementById("tcup").value = totalcup();
        document.getElementById("tusd").value = totalusd();
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




