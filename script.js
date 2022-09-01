let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let cnt = document.getElementById("cnt");
let cnt2 = document.getElementById("cnt2");
let value = 0;

function setActive(btn){
    value = btn;
}

function submit() {
    if  (!value)
        console.log("Select a value please")
    else {
        cnt.style.display = "none";
        cnt2.style.display = "flex";
        console.log(`You selected ${value} out of 5`);
    }
}

