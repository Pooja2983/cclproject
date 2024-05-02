let sq1 = document.getElementById('one');
let sq2 = document.getElementById('two');
let sq3 = document.getElementById('three');
let sq4 = document.getElementById('four');
let sq5 = document.getElementById('five');
let sq6 = document.getElementById('six');
let sq7 = document.getElementById('seven');
let sq8 = document.getElementById('eight');

let find = document.getElementById('find');
let gen = document.getElementById('gen');
let search = document.getElementById('Search');
let txt = document.getElementById('txt');

let value;
function config(){
    sq1.style.backgroundColor = "yellow";
    sq2.style.backgroundColor = "yellow";
    sq3.style.backgroundColor = "yellow";
    sq4.style.backgroundColor = "yellow";
    sq5.style.backgroundColor = "yellow";
    sq6.style.backgroundColor = "yellow";
    sq7.style.backgroundColor = "yellow";
    sq8.style.backgroundColor = "yellow";
    find.value = "";
    txt.innerHTML = "Type the Element you want to Search ! !";
    txt.style.color = "aliceblue";
}

function numberGenerate()
{
    config();

    sq1.innerHTML = Math.floor((Math.random()*10)+1);
    sq2.innerHTML = Math.floor((Math.random()*10)+1);
    sq3.innerHTML = Math.floor((Math.random()*10)+1);
    sq4.innerHTML = Math.floor((Math.random()*10)+1);
    sq5.innerHTML = Math.floor((Math.random()*10)+1);
    sq6.innerHTML = Math.floor((Math.random()*10)+1);
    sq7.innerHTML = Math.floor((Math.random()*10)+1);
    sq8.innerHTML = Math.floor((Math.random()*10)+1);
}

function check() {
    if(String(sq1.innerHTML) == value){
        sq1.style.backgroundColor = "green";
    }
    else if(String(sq2.innerHTML) == value) {
        sq1.style.backgroundColor = "red";
        sq2.style.backgroundColor = "green";
    }
    else if(String(sq3.innerHTML) === value) {
        sq1.style.backgroundColor = "red";
        sq2.style.backgroundColor = "red";
        sq3.style.backgroundColor = "green";
    }
    else if(String(sq4.innerHTML) === value) {
        sq1.style.backgroundColor = "red";
        sq2.style.backgroundColor = "red";
        sq3.style.backgroundColor = "red";
        sq4.style.backgroundColor = "green";
    }
    else if(String(sq5.innerHTML) === value) {
        sq1.style.backgroundColor = "red";
        sq2.style.backgroundColor = "red";
        sq3.style.backgroundColor = "red";
        sq4.style.backgroundColor = "red";
        sq5.style.backgroundColor = "green";
    }
    else if(String(sq6.innerHTML) === value) {
        sq1.style.backgroundColor = "red";
        sq2.style.backgroundColor = "red";
        sq3.style.backgroundColor = "red";
        sq4.style.backgroundColor = "red";
        sq5.style.backgroundColor = "red";
        sq6.style.backgroundColor = "green";
    }
    else if(String(sq7.innerHTML) === value) {
        sq1.style.backgroundColor = "red";
        sq2.style.backgroundColor = "red";
        sq3.style.backgroundColor = "red";
        sq4.style.backgroundColor = "red";
        sq5.style.backgroundColor = "red";
        sq6.style.backgroundColor = "red";
        sq7.style.backgroundColor = "green";
    }
    else if(String(sq8.innerHTML) === value) {
        sq1.style.backgroundColor = "red";
        sq2.style.backgroundColor = "red";
        sq3.style.backgroundColor = "red";
        sq4.style.backgroundColor = "red";
        sq5.style.backgroundColor = "red";
        sq6.style.backgroundColor = "red";
        sq7.style.backgroundColor = "red";
        sq8.style.backgroundColor = "green";
    }
    
    else{
        sq1.style.backgroundColor = "red";
        sq2.style.backgroundColor = "red";
        sq3.style.backgroundColor = "red";
        sq4.style.backgroundColor = "red";
        sq5.style.backgroundColor = "red";
        sq6.style.backgroundColor = "red";
        sq7.style.backgroundColor = "red";
        sq8.style.backgroundColor = "red";
        txt.innerHTML = "Sorry the element does not exist!";
        txt.style.color = "red";
    }
}


function numberSearch(){
    value = find.value;
    check();
}
