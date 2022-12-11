var i = 0;
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
          <p class="lists"></p><button class="list-btn">mark done</button><br />  
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
    // document.querySelector('.para-head').textContent = valueInput
    let arr = document.querySelectorAll('.para-head');
    do {
      arr[i].textContent = valueInput;
      i++
      document.querySelector('#pop-up').style.visibility = "hidden";
    }while(false);





    // add task
    let addBtn = document.querySelectorAll('.fa-brands');
    let addTask = document.querySelector('#pop-up-index');

   for(let k = 0; k<arr.length; k++) {
    addBtn[k].addEventListener('click', () => {
      addTask.innerHTML = popUp;
      document.querySelector('#para-part-2').textContent = "Add New Items"

      // add
      document.querySelector('#add-btn').addEventListener('click', () => {
        document.querySelector('.lists').textContent = valueInput;
        document.querySelector('.list-btn').style.visibility = "visible";
        document.querySelector('#pop-up').style.visibility = "hidden";

        // mark done
        document.querySelector('.list-btn').addEventListener('click', () => {
        document.querySelector('.lists').style.textDecoration = "line-through";
        });
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



