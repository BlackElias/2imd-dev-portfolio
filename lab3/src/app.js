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
     localStorage.setItem("notes", JSON.stringify(note));
    }
  
    remove() {
      
      document.getElementById("taskList").removeChild(this);
     
    }
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
  
      // HINT🤩
      // pressing the enter key in the text field triggers the createNote function
     this.txtTodo = document.querySelector('#taskInput');
      this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
      
       this.loadNotesFromStorage();
    }
  
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
    }
  
    createNote(e) {
        console.log(e)
        console.log(this)
        if (e.key == "Enter") {
            e.preventDefault();
            
        }
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
    }
  }
  
  let app = new App();
  