const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup" ,  //when user keyup we run function
    function(event){
        if(event.key =="Enter"){
            addToDo(this.value);  //this refers item
            this.value= ""  //clear input type after adding item

        }
    }
)
//  add vaulue of input box into next line 
const addToDo = (item)=> {
    const listItem = document.createElement("li");
    listItem.innerHTML =`
    ${item} 
   <i class="fas fa-times"></i>
   `;
//    adding event listener to mark as done      Toggle means add or remove the class
listItem.addEventListener( 
    "click",
    function(){
        this.classList.toggle("done") 
    }
)
// For X sign
    listItem.querySelector("i").addEventListener(
        "click", 
        function(){
            listItem.remove()
        }
    )
   toDoBox.appendChild(listItem)
}