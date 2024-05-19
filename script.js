const sec = document.querySelector("section");
const input = sec.querySelector("input");
const button = sec.querySelector("button");
const div = sec.querySelector("div");

let list = JSON.parse(localStorage.getItem("list")) || [];

function reload(){
    for(i=0;i<list.length;i++){
        let value = list[i];
        addTask(value,false);
    }
}

function newtask() {
    let value = input.value;
    list.push(value);
    console.log(list);
    addTask(value,true);
}

function removeTask(value) {
    let index = list.indexOf(value);
        if (index>-1){
            list.splice(index,1);
            localStorage.setItem("list",JSON.stringify(list));
        }
}

function addTask(value,storage = true) {
    let p = document.createElement("p");
    p.innerHTML = value;
    div.appendChild(p);
    if (storage) {
    localStorage.setItem("list",JSON.stringify(list));
    }
    input.value = "";

    p.addEventListener("click",()=>{
        p.style.textDecoration = "line-through";
        removeTask(value);
    });

    p.addEventListener("dblclick",()=>{
        div.removeChild(p);
        setTimeout(()=>{
        removeTask(value);},300);
    });
}

button.addEventListener("click",newtask);

window.onload = reload;