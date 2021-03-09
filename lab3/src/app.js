class Note {
    constructor(title) {
      this.title = title;
       this.element = this.createElement(title);
    }
  
    createElement() {
      let newNote = document.createElement("li");
      newNote.addEventListener('click', this.remove.bind(newNote));
    
      return newNote;
    }
  
    add() {
     console.log("added")
      document.getElementById("taskList").appendChild(this.element);
        
            
    }
  
    saveToStorage() {
     console.log(localStorage);
     let note = localStorage.getItem("note");
     note = JSON.parse(note) || [];

     note.push(this.title);
     localStorage.setItem("note", JSON.stringify(note));
    }
  
    remove() {
      
      document.getElementById("taskList").removeChild(this);
      let value = this.innerText;

        let note = localStorage.getItem("note");
        note = JSON.parse(note) || [];

        let index = note.indexOf(value);
        note.splice(index, 1);

        localStorage.setItem("notes", JSON.stringify(note));
    }
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
  
     this.txtTodo = document.querySelector('#taskInput');
      this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
      
       this.loadNotesFromStorage();
    }
  
    loadNotesFromStorage() {
 
      let note = localStorage.getItem("note");
      note = JSON.parse(note) || [];

      for(let i = 0; i < note.length; i++) {
          let title = note[i];
          let newNote = new Note(title);
          newNote.add();
    }
  }
  
    createNote(e) {
        console.log(e)
        console.log(this)
        if (e.key == "Enter") {
            e.preventDefault();
            
        
        if(this.txtTodo.value !== "") {
          let newNote = new Note(this.txtTodo.value);
          newNote.add();
          newNote.saveToStorage();
      }

      this.reset();
  }
    }
  
    reset() {
      this.txtTodo.value = " ";
      console.log(localStorage);
    }
  }
  
  let app = new App();
  