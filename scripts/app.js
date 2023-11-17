import { RandomName } from "./randomFunction.js";

let addBtn = document.getElementById("addBtn");
let nameInput = document.getElementById("nameInput");
let randomBtn = document.getElementById("randomBtn");

let nameArray=[];

addBtn.addEventListener('click', function(){
    nameArray.push(nameInput.value);
    nameInput.value = "";
    console.log(nameArray);
});

randomBtn.addEventListener('click', function(){
    RandomName(nameArray);
});
