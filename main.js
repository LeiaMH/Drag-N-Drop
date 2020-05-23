const full = document.querySelector('.full');
const empties = document.querySelectorAll('.empty');

//EventListeners
full.addEventListener('dragstart', dragStart);
full.addEventListener('dragend', dragEnd);

//Loop through Empties
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

//Functions (Full)
function dragStart(){
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(){
  this.className = 'full';  
}

//Functions (Empties)
function dragOver(event){
    event.preventDefault();  
}

function dragEnter(event){
    event.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className = 'empty';
}

function dragDrop(){
    this.className = 'empty';
    this.append(full);  
}