let inputBox=document.getElementById("input-box");
let listcontainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value ===''){
         alert("Please add a Task First");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value="";
    database();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        database();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        database();
    }
},false);

function database(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();