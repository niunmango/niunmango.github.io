document.getElementById("rojo").style.background = "red";
document.getElementById("azul").style.background = "blue";
document.getElementById("verde").style.background = "green";
document.getElementById("amarillo").style.background = "yellow";



function rosa() {
    "use strict";
    if (document.getElementById("rojo").style.background === "red") {
        document.getElementById("rojo").style.background = "pink";
    }
}

function rojo() {
    "use strict";
    if (document.getElementById("rojo").style.background === "pink") {
        document.getElementById("rojo").style.background = "red";
    }
}
function rojonegro() {
    "use strict";
     if (document.getElementById("rojo").style.background == "red" || document.getElementById("rojo").style.background == "pink") {
            document.getElementById("rojo").style.background = "black";
     } else {
         document.getElementById("rojo").style.background = "red";
     }
}

document.getElementById("rojo").onmouseover = function () {rosa()};
document.getElementById("rojo").onmouseout = function() {rojo()};
document.getElementById("rojo").onmousedown = function() {rojonegro()};
        
function celeste() {
    if (document.getElementById("azul").style.background == "blue") {
        document.getElementById("azul").style.background = "lightblue";
    }
}

function azul() {
    if (document.getElementById("azul").style.background == "lightblue") {
        document.getElementById("azul").style.background = "blue";
    }
}
function azulnegro() {
     if (document.getElementById("azul").style.background == "blue" || document.getElementById("azul").style.background == "lightblue") {
            document.getElementById("azul").style.background = "black";
     } else {
         document.getElementById("azul").style.background = "blue";
     }
}

document.getElementById("azul").onmouseover = function() {celeste()};
document.getElementById("azul").onmouseout = function() {azul()};
document.getElementById("azul").onmousedown = function() {azulnegro()};

function verdeclaro() {
    if (document.getElementById("verde").style.background == "green") {
        document.getElementById("verde").style.background = "lightgreen";
    }
}

function verde() {
    if (document.getElementById("verde").style.background == "lightgreen") {
        document.getElementById("verde").style.background = "green";
    }
}
function verdenegro() {
     if (document.getElementById("verde").style.background == "green" || document.getElementById("verde").style.background == "lightgreen") {
            document.getElementById("verde").style.background = "black";
     } else {
         document.getElementById("verde").style.background = "green";
     }
}

document.getElementById("verde").onmouseover = function() {verdeclaro()};
document.getElementById("verde").onmouseout = function() {verde()};
document.getElementById("verde").onmousedown = function() {verdenegro()};

function amarilloclaro() {
    if (document.getElementById("amarillo").style.background == "yellow") {
        document.getElementById("amarillo").style.background = "lightyellow";
    }
}

function amarillo() {
    if (document.getElementById("amarillo").style.background == "lightyellow") {
        document.getElementById("amarillo").style.background = "yellow";
    }
}
function amarillonegro() {
     if (document.getElementById("amarillo").style.background == "yellow" || document.getElementById("amarillo").style.background == "lightyellow") {
            document.getElementById("amarillo").style.background = "black";
     } else {
         document.getElementById("amarillo").style.background = "yellow";
     }
}

document.getElementById("amarillo").onmouseover = function() {amarilloclaro()};
document.getElementById("amarillo").onmouseout = function() {amarillo()};
document.getElementById("amarillo").onmousedown = function() {amarillonegro()};

