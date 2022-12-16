function calcularmn() {

    var a = parseFloat(document.getElementById("b1000").value * 1000);
    var b = parseFloat(document.getElementById("b10").value * 10);
    var c = parseFloat(document.getElementById("b500").value * 500);
    var d = parseFloat(document.getElementById("b5").value * 5);
    var e = parseFloat(document.getElementById("b200").value * 200);
    var f = parseFloat(document.getElementById("b3").value * 3);
    var g = parseFloat(document.getElementById("b100").value * 100);
    var h = parseFloat(document.getElementById("b1").value * 1);
    var i = parseFloat(document.getElementById("b50").value * 50);
    var j = parseFloat(document.getElementById("b0.2").value * 0.2);
    var k = parseFloat(document.getElementById("b20").value * 20);
    var l = parseFloat(document.getElementById("b0.05").value * 0.05);

    var a1 = parseFloat(document.getElementById("u1000").value * 1000);
    var b1 = parseFloat(document.getElementById("u10").value * 10);
    var c1 = parseFloat(document.getElementById("u500").value * 500);
    var d1 = parseFloat(document.getElementById("u5").value * 5);
    var e1 = parseFloat(document.getElementById("u200").value * 200);
    var f1 = parseFloat(document.getElementById("u3").value * 3);
    var g1 = parseFloat(document.getElementById("u100").value * 100);
    var h1 = parseFloat(document.getElementById("u1").value * 1);
    var i1 = parseFloat(document.getElementById("u50").value * 50);
    var j1 = parseFloat(document.getElementById("u0.2").value * 0.2);
    var k1 = parseFloat(document.getElementById("u20").value * 20);
    var l1 = parseFloat(document.getElementById("u0.05").value * 0.05);

    document.getElementById("pcup").value = a + b + c + d + e + f + g + h + i + j + k + l + " cup";

    if (document.getElementById("tasa-cambio").value != "") {
        document.getElementById("tcup").value = (a + b + c + d + e + f + g + h + i + j + k + l) +
            (a1 + b1 + c1 + d1 + e1 + f1 + g1 + h1 + i1 + j1 + k1 + l1) * parseFloat(document.getElementById("tasa-cambio").value);
    };

    if (document.getElementById("tasa-cambio").value != "") {
        document.getElementById("tusd").value = (a + b + c + d + e + f + g + h + i + j + k + l) /
            parseFloat(document.getElementById("tasa-cambio").value) +
            (a1 + b1 + c1 + d1 + e1 + f1 + g1 + h1 + i1 + j1 + k1 + l1);
    };


};

function calcularusd() {

    var a = parseFloat(document.getElementById("b1000").value * 1000);
    var b = parseFloat(document.getElementById("b10").value * 10);
    var c = parseFloat(document.getElementById("b500").value * 500);
    var d = parseFloat(document.getElementById("b5").value * 5);
    var e = parseFloat(document.getElementById("b200").value * 200);
    var f = parseFloat(document.getElementById("b3").value * 3);
    var g = parseFloat(document.getElementById("b100").value * 100);
    var h = parseFloat(document.getElementById("b1").value * 1);
    var i = parseFloat(document.getElementById("b50").value * 50);
    var j = parseFloat(document.getElementById("b0.2").value * 0.2);
    var k = parseFloat(document.getElementById("b20").value * 20);
    var l = parseFloat(document.getElementById("b0.05").value * 0.05);

    var a1 = parseFloat(document.getElementById("u1000").value * 1000);
    var b1 = parseFloat(document.getElementById("u10").value * 10);
    var c1 = parseFloat(document.getElementById("u500").value * 500);
    var d1 = parseFloat(document.getElementById("u5").value * 5);
    var e1 = parseFloat(document.getElementById("u200").value * 200);
    var f1 = parseFloat(document.getElementById("u3").value * 3);
    var g1 = parseFloat(document.getElementById("u100").value * 100);
    var h1 = parseFloat(document.getElementById("u1").value * 1);
    var i1 = parseFloat(document.getElementById("u50").value * 50);
    var j1 = parseFloat(document.getElementById("u0.2").value * 0.2);
    var k1 = parseFloat(document.getElementById("u20").value * 20);
    var l1 = parseFloat(document.getElementById("u0.05").value * 0.05);

    document.getElementById("pusd").value = a1 + b1 + c1 + d1 + e1 + f1 + g1 + h1 + i1 + j1 + k1 + l1 + " usd";

    if (document.getElementById("tasa-cambio").value != "") {
        document.getElementById("tusd").value = (a + b + c + d + e + f + g + h + i + j + k + l) /
            parseFloat(document.getElementById("tasa-cambio").value) +
            (a1 + b1 + c1 + d1 + e1 + f1 + g1 + h1 + i1 + j1 + k1 + l1);
    };

    if (document.getElementById("tasa-cambio").value != "") {
        document.getElementById("tcup").value = (a + b + c + d + e + f + g + h + i + j + k + l) +
            (a1 + b1 + c1 + d1 + e1 + f1 + g1 + h1 + i1 + j1 + k1 + l1) * parseFloat(document.getElementById("tasa-cambio").value);
    };


};


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




function cup() {
    document.getElementById("section1").style.display = "contents";
    document.getElementById("section2").style.display = "none";

};

function usd() {
    document.getElementById("section2").style.display = "contents";
    document.getElementById("section1").style.display = "none";

};

