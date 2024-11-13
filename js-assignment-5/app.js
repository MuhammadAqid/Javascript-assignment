const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");
const item = document.querySelector("li");
let index = null

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = e.target.add.value;
  

  if(text == ""){
    alert("please write something")
  }else{
    list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${text}</span>
          <span>
          <i class="fas fa-edit edit" ></i>
          <i class="far fa-trash-alt delete"></i>
          </span>
        </li>`;
  }
  

  addForm.reset();
});

list.addEventListener("click", function (e) {
  // console.log("Parent");
  if(e.target.classList.contains('delete')){    
  e.target.parentElement.parentElement.remove();
}
  let edit = document.querySelectorAll('.edit')
  edit.forEach(function(edit) {
    edit.addEventListener("click", function(){
        let targetElement = e.target;
        if(!(e.target.className == "edit")){ 
                  targetElement = e.target.parentElement;          
                }
                addForm.add.value =  targetElement.previousElementSibling.textContent
                targetElement.parentElement.remove()
        
    })
  })
  
});

function filterTodos(searchText) {
  for (let i = 0; i < list.children.length; i++) {
    const li = list.children[i];
    if (!li.textContent.includes(searchText)) {
      li.classList.add("filtered");
    } else {
      li.classList.remove("filtered");
    }
  }
}

search.addEventListener("keyup", function (e) {
  //   console.log(e);
  const searchText = e.target.value;
  filterTodos(searchText);
});