// Select Element by Using ID

// const mainHeading= document.getElementById("main-heading");

//select Element using Query Selector

// const mainHeading= document.querySelector("#main-heading");
// const header= document.querySelector(".header");
// console.log(header);

// select Element using query Selector All
// it will select all the elements of a particular class

//change Text

// const mainHeading= document.getElementById("main-heading");
// mainHeading.textContent="This is Something Intresting"; 
//Using this you can change text

//Inner Text
// it will select the text which is displaying in the website

//change style
// const mainHeading= document.querySelector("#main-heading");
// mainHeading.style.color="blue";
// mainHeading.style.backgroundColor="red";
// mainHeading.style.border="10px solid green"

// Get and Set Attribute
// const link=document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href","https://Google.com");
// const input=document.querySelector(".form-todo input");
// console.log(input.getAttribute("type"));

//Get multiple elements using getElements By Class Name
// const navItems=document.getElementsByClassName("nav-item") //HTML Collection
// console.log(navItems[1]); // it returns array like object
//Get multiple elements using querySelectorAll 

// const navItems=document.querySelectorAll(".nav-item") // returns Node List
// console.log(navItems[1]);

//loop
// const navItems=document.getElementsByClassName("nav-item") // returns Node List
// const navItems=document.getElementsByTagName("a") 
// // console.log(navItems[1]);
// //We can't use for eact method to iterate through HTML COllection
// for(let i=0;i<navItems.length;i++)
// {
// navItems[i].style.color="green";
// navItems[i].style.backgroundColor="white";
// navItems[i].style.fontWeight="bold";
// }

// const navItems=document.querySelectorAll("a")
// for(let i=0;i<navItems.length;i++)
// {
// navItems[i].style.color="green";
// navItems[i].style.backgroundColor="white";
// navItems[i].style.fontWeight="bold";
// }


//Inner HTML

// const headline=document.querySelector(".headline")
// // console.log(headline.innerHTML)
// headline.innerHTML="<h1>Inner html changed</h1>";
// headline.innerHTML +="<button class=\"btn\">Learn More</button>"

// const sectionTodo=document.querySelector(".todo-section");
// console.log(sectionTodo.classList)
//To add new class
// sectionTodo.classList.add("bg-dark")
//To remove an existing class
// sectionTodo.classList.remove("container")
//If class exist it will remove the class else add the class(toggle)
// sectionTodo.classList.toggle("bg-dark");

// const header=document.querySelector(".header");

// Create HTML Elements using JavaScript
//document.createElement()
//append
//prepend
//remove
// const newTodoItem=document.createElement("li");
// // const newTodoItemText=document.createTextNode("Teach Students")
// newTodoItem.textContent="Teach Students";
// const todoList=document.querySelector(".todo-list");
// todoList.append(newTodoItem)// Add in last
// todoList.prepend(newTodoItem)//Add in start

// console.log(newTodoItem)

// const todo1=document.querySelector('.todo-list li');
// todo1.remove(); //remove element

//before
//after

// const newTodoItem=document.createElement("li");
// // const newTodoItemText=document.createTextNode("Teach Students");
// newTodoItem.textContent="teachStudents"
// const todoList=document.querySelector(".todo-list");
// todoList.before(newTodoItem)

//clone nodes

// const ul=document.querySelector(".todo-list")
// const li=document.createElement("li");
// li.textContent="new Node";
// const li2=li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);

//Static list vs live list
//querySelectorAll gives us Static list
// // getElementsBySomething gives us live list
// const listItems=document.querySelectorAll(".todo-list li");
// const sixthLi=document.createElement("li");
// sixthLi.textContent="item 6";
// const ul=document.querySelector(".todo-list");
// ul.append(sixthLi);

//How to get the dimensions of element
//height width
// const sectionTodo=document.querySelector(".todo-section");
// const info =sectionTodo.getBoundingClientRect().height;
// console.log(info);

// Intro To events
//click
//3 ways to add event

// const btn=document.querySelector(".btn-headline");
// //method ---addEventListener
// btn.addEventListener("click",()=>console.log("you clicked"))

//this keyword
// const btn=document.querySelector(".btn-headline");
// btn.addEventListener("click",()=>{
//     console.log("you clicked"); 
//     console.log(this);
// });

const todoForm=document.querySelector(".form-todo")
const todoInput=document.querySelector(".form-todo input[type='text']")
const todoList=document.querySelector(".todo-list")
const li=document.querySelector
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const newTask= todoInput.value;
    const newLi=document.createElement("Li");
    const newLiInnerHtml=`
        <Span class="text">${newTask}</Span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>
        
    `
newLi.innerHTML=newLiInnerHtml;
todoList.append(newLi);
    todoInput.value="";

})

todoList.addEventListener("click",(e)=>{
    //Check if user clicked on DOne
    if(e.target.classList.contains("done")){
     console.log("Task Done"); 
     const liSpan=e.target.parentNode.previousElementSibling;
     liSpan.style.backgroundColor="green"
     liSpan.style.textDecoration="line-through"
    // console.log(liSpan)
    }
    if(e.target.classList.contains("remove")){
         const rmvbtn=e.target.parentNode.parentNode;
         console.log(rmvbtn)
        rmvbtn.remove();
        }
})