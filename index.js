let form=document.getElementById("form")
let todoinput=document.getElementById("todo-input")
let todoitemcontainer=document.getElementById("todo-item-container")


 //array collecting all todo item object literals

let todoitemarray=[]
let editingSignal= -1

 // collecting todo from input feild
form.addEventListener("submit", collecttodo)
function collecttodo(event){
    event.preventDefault()
    
    let todoinputvalue=todoinput.value
    if(todoinputvalue.length === 0){
        alert("Enter to do")
        
    }else if(editingSignal >=0){
        todoitemarray=todoitemarray.map(function(todoObject,index){
            if(editingSignal===index){
                return{
                    todoitementered: todoinputvalue,
                    completed : todoObject.completed
                }
            }else{
                return{
                    todoitementered: todoObject.todoitementered,
                    completed : todoObject.completed
                }

            }
        })
    }else{
        const todoobjectliteral={
            todoitementered: todoinputvalue,
            completed : false
        }
        //push the todo object into the todo item array

        todoitemarray.push(todoobjectliteral)
    }
    localStorage.setItem("todos",JSON.stringify(todoitemarray))
    form.reset()
    fetchTodoItems()
    showTodosOnUI() 
}
// fetch todo item from local storage 
function  fetchTodoItems(){
    if(localStorage.getItem("todos")){
        todoitemarray=JSON.parse(localStorage.getItem("todos"))
    }
    showTodosOnUI()
}
fetchTodoItems()

//show todo items on ui 

function showTodosOnUI(){
    todoitemcontainer.innerText=' '
    todoitemarray.forEach(function(todoitem, index){
        let todotobeprinted=todoitem.todoitementered
        
        let todoitemdiv=document.createElement("div")
        todoitemdiv.classList.add("todo-item")
        todoitemdiv.setAttribute("id",`${index}`)
        
        let leftside=document.createElement("div")
        leftside.classList.add("leftside")

        let unchecked=document.createElement("i")
        unchecked.classList.add("fa-regular", "fa-circle")
        unchecked.setAttribute("data-action",'check')

        let checkedicon=document.createElement("i")
        checkedicon.classList.add("fa-regular", "fa-circle-check")
        checkedicon.setAttribute("data-action", 'check')

        let todotext=document.createElement("p")
        todotext.textContent=todotobeprinted
        todotext.setAttribute("data-action", "check")
        

        let rightside=document.createElement("div")
        rightside.classList.add("right-side")

        let editicon=document.createElement("i")
        editicon.classList.add("fa-solid", "fa-pen")
        editicon.setAttribute("data-action", "edit")

        let deleteicon=document.createElement("i")
        deleteicon.classList.add("fa-solid", "fa-trash")
        deleteicon.setAttribute("data-action", "delete")
        
        if(!todoitem.completed){
           leftside.append(unchecked,todotext)
           rightside.append(editicon,deleteicon) 
           todoitemdiv.append(leftside,rightside)
           todoitemcontainer.append(todoitemdiv)

        }else{
            leftside.append(checkedicon,todotext)
            rightside.append(editicon,deleteicon) 
            todoitemdiv.append(leftside,rightside)
            todoitemcontainer.append(todoitemdiv)
            todotext.style.textDecoration="line-through"
        }
    })


}
todoitemcontainer.addEventListener("click", targettodoitem)
function targettodoitem(event){
    let targetofuser=event.target
    let grandParentElement=targetofuser.parentElement.parentElement
    if(!grandParentElement.classList.contains("todo-item"))return
    
    let todoid=Number(grandParentElement.id)
    let clickaction=targetofuser.dataset.action
    

    
    if(clickaction=== "check"){
        checkTodoItem(todoid)
    }else if(clickaction==="edit"){
        editToDoItem(todoid)
    }else if(clickaction==="delete"){
        deleteTodoItem(todoid)
    }

}
function checkTodoItem(id){
    todoitemarray = todoitemarray.map(function(todoObject, index){
        if(index===id){
            return{
                todoitementered:todoObject.todoitementered,
                completed:!todoObject.completed
            }
            
        }else{
            return{
                todoitementered:todoObject.todoitementered,
                completed:todoObject.completed
            }
        }  
    })
    showTodosOnUI()
}
function editToDoItem(id){
    todoinput.value=todoitemarray[id].todoitementered
    editingSignal =id
 
}
function deleteTodoItem(id){
    todoitemarray=todoitemarray.filter(function(item,index){
        return index!==id
    })
    showTodosOnUI()
}