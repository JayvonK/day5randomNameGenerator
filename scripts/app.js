import { RandomName } from "./randomFunction.js";

let addBtn = document.getElementById("addBtn");
let nameInput = document.getElementById("nameInput");
let randomBtn = document.getElementById("randomBtn");
let nameText = document.getElementById("nameText");
let removeBtn = document.getElementById("removeBtn");

let nameArray=[];
if(localStorage.getItem("names")) {
    nameArray = JSON.parse(localStorage.getItem("names"));
}

addBtn.addEventListener('click', function(){
    nameArray.push(nameInput.value);
    nameInput.value = "";
    console.log(nameArray);

    localStorage.setItem("names", JSON.stringify(nameArray));
});

randomBtn.addEventListener('click', function(){
    nameText.innerText = RandomName(nameArray);
});

removeBtn.addEventListener('click', function(){
    let index = nameArray.indexOf(nameInput.value);
    //can add third parameter in splice to add something
    nameArray.splice(index, 1);
    nameInput.value = "";
    console.log(nameArray);

    localStorage.setItem("names", JSON.stringify(nameArray));
});
