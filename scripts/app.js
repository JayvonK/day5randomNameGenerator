let addBtn = document.getElementById("addBtn");
let nameInput = document.getElementById("nameInput");

let nameArray=[];

addBtn.addEventListener('click', function(){
    nameArray.push(nameInput.value);
    nameInput.value = "";
    console.log(nameArray);
})