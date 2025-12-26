let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let dot = document.getElementById('dot');
let add = document.getElementById('add');
let sub = document.getElementById('sub');
let mul = document.getElementById('mul');
let div = document.getElementById('div');
let res = document.getElementById('res');
let number = document.getElementById('number');


one.onclick = function() {
    number.value += '1';
}
two.onclick = function() {
    number.value += '2';
}
three.onclick = function() {
    number.value += '3';
}
four.onclick = function() {
    number.value += '4';
}
five.onclick = function() {
    number.value += '5';
}
six.onclick = function() {
    number.value += '6';
}
seven.onclick = function() {
    number.value += '7';
}
eight.onclick = function() {
    number.value += '8';
}
nine.onclick = function() {
    number.value += '9';
}
zero.onclick = function() {
    number.value += '0';
}
dot.onclick = function() {
    number.value += '.';
}
add.onclick = function() {
    number.value += '+';
}
sub.onclick = function() {
    number.value += '-';
}
mul.onclick = function() {
    number.value += '*';
}
div.onclick = function() {
    number.value += '/';
}
mod.onclick = function(){
    number.value += '%'; 
}
clear.onclick = function(){
    number.value = '';
}
doublezero.onclick = function(){
    number.value += '00';
}
res.onclick = function () {
    if (number.value === '') {
        number.value = '0';
        return;
    }
    try {
        number.value = eval(number.value);
    } catch (e) {
        alert('invalid expression'); 
    } 
};