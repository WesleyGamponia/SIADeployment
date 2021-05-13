"use strict";
function addText(val) {
    document.getElementById('numberfield').value += val;
}
function calculate() {
    var output = document.getElementById('numberfield').value;
    if (output != '') {
        hist(output);
        document.getElementById('numberfield').value = '';
    }
}
function hist(hist) {
    document.getElementById('history').innerHTML += ("<label for=''>" + hist + "=" + eval(hist) + "</option><br>");
}
