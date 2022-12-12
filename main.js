var i = 0;
let d = 0;
document.querySelector('.fa-dice-d20').addEventListener('click', () =>{
    const popUp = `<div id="pop-up">

    <header>
      <p id="para-part-2">Add new list</header></p>
    </header>

    <section>
        <div id="input-div">
      <form>
         <input type="text" placeholder="write text to add list" id="todo-input">
      </form>
        </div>
    </section>

    <footer>
      <div id="pop-up-btn">
        <div style="margin-left:2em">
          <button class="btn" id="add-btn">Add</button>
      </div>
      <div style="margin-right:2em">
        <button class="btn" id="close-btn">Close</button>
      </div>
    </div>
    </footer>

</div>`

document.querySelector('#pop-up-index').innerHTML = popUp;

// making todo lists
todo = ` <div class="list-pop-up-div">
<header id="input-head">
    <p class="para-head"></p><hr />
</header>

      <div id="lists" class="markdone">
          
      </div>

<div id="flex-awesome">
  <i class="fa-brands fa-teamspeak"></i>
  <i class="fa-solid fa-dragon"></i>
</div>
</div>`


// add pop - up
  document.querySelector('#add-btn').addEventListener('click', () => {
    valueInput = document.querySelector('#todo-input').value


    document.querySelector('.lists-div').innerHTML += todo;
    let arr = document.querySelectorAll('.para-head');
    do {
      arr[i].textContent = valueInput;
      i++
      document.querySelector('#pop-up').style.visibility = "hidden";
    }while(false);


    // add task
    let addBtn = document.querySelectorAll('.fa-brands');
    let addTask = document.querySelector('#pop-up-index');
    let addItemDiv = document.querySelectorAll('.markdone')

   for(let k = 0; k<arr.length; k++) {
    addBtn[k].addEventListener('click', () => {
      addTask.innerHTML = popUp;
      document.querySelector('#para-part-2').textContent = "Add New Items"

      // add
      document.querySelector('#add-btn').addEventListener('click', () => {

        addItemDiv[k].innerHTML += '<p class="lists"></p><button class="list-btn">mark done</button><br />'
        let addItem = document.querySelectorAll('.lists')
        let markDoneBtn = document.querySelectorAll('.list-btn')

      for(let a = 0; a < addItem.length; a++) {
        document.querySelector('#pop-up').style.visibility = "hidden";
        addItem[d].textContent = document.querySelector('#todo-input').value 
        markDoneBtn[a].style.visibility = "visible";

        markDoneBtn[a].addEventListener('click', () => {
          addItem[a].style.textDecoration = "line-through";
          markDoneBtn[a].style.display = "none";
          });

      }
          d++

      });


      // close
      document.querySelector('#close-btn').addEventListener('click', () => {
        document.querySelector('#pop-up').style.visibility = "hidden";
      });
});

   }


  // removing container task
    let deleteBtn = document.querySelectorAll('.fa-dragon');
    let remove = document.querySelectorAll('.list-pop-up-div');

   for(let j = 0; j<arr.length; j++) {
    deleteBtn[j].addEventListener('click', () => {
      // document.querySelector('.list-pop-up-div').style.display = "none";
       remove[j].style.display = "none";
   });
   
   }
      
});


// close pop-up
document.querySelector('#close-btn').addEventListener('click', () => {
  document.querySelector('#pop-up').style.visibility = "hidden";
});

});



