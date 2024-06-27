`use strict`
function addClass() {
    let element = document.getElementById("classinput");
    let text = document.getElementById("text");
    text.classList.add(element.value);
}
function deleteOrRestoreP1() {
    let p1 = document.getElementById("p1");
    if (p1.style.display === "none") {
        p1.style.display = "block";
    }
    else {
        p1.style.display = "none";
    }

}
function deleteOrRestoreP2() {
    let p2 = document.getElementById("p2");
    if (p2.style.display === "none") {
        p2.style.display = "block";
    }
    else {
        p2.style.display = "none";
    }

}
function deleteOrRestoreP3() {
    let p3 = document.getElementById("p3");
    if (p3.style.display === "none") {
        p3.style.display = "block";
    }
    else {
        p3.style.display = "none";
    }

}
function clicked() {
    let button = document.querySelector('#clicked');
    button.innerText = "Clicked!";
    button.classList.add("disabled");
}
