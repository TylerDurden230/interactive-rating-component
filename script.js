let cnt = document.getElementById("cnt");
let cnt2 = document.getElementById("cnt2");
let value = 0;
let rating = document.getElementById("rating");

function setActive(btn){
    value = btn;
}

function submit() {
    if  (value != 0) {
        rating.innerHTML = `You selected ${value} out of 5`;
        cnt.style.display = "none";
        cnt2.style.display = "flex";
    }
}