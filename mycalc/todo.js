const inputBox = document.getElementById("box");
const listcontainer = document.getElementById("list");
// for (let index = 1; index < 4; index++) {
//     const div = document.getElementById("checked+index");
//     div.style.display = "none";
//     console.log(checked+index);
//}
function addTask(){
    if(inputBox.value === ''){
        alert("you must write tak!");
    }
    else{
       let div = document.createElement("div");
       div.innerHTML = inputBox.value;
       listcontainer.appendChild(div);
       let input = document.createElement("input");
       input.type = "checkbox";
       div.appendChild(input);
       let button = document.createElement("button");
       div.appendChild(button);
       
       div.className = "ff";
      // listcontainer.style.display = "block";
       
      // for (let index = 1; index < 4; index++) {
    //     const div = document.getElementById("checked+index");
    //     div.style.display = "block";

        
    //    }
       
       
     //  }
    }
        
       // ff.appendChild(checkbox);

        
    }
    button.addEventListener("click", function(e){
        let div = document.getElementById("ff");
        div.value = "";
    
    
    });
