class Note {
    constructor(title) {
      this.title = title;
       this.element = this.createElement(title);
    }
  
    createElement(title) {
      let newNote = document.createElement("li");
      newNote.addEventListener('click', this.remove.bind(newNote));
      console.log("dddd")
      return newNote;
    }
  
    add(newNote) {
      // HINT🤩
      // this function should append the note to the screen somehow
        
        
            
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
  
    remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
    }
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
  
      // HINT🤩
      // pressing the enter key in the text field triggers the createNote function
     this.txtTodo = document.querySelector('#taskInput');
      this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // when the app loads, we can show previously saved noted from localstorage
      // this.loadNotesFromStorage();
    }
  
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
    }
  
    createNote(e) {
        console.log(e)
        console.log(this)
        if (e.key == "Enter") {
            e.preventDefault()
        }
      // this function should create a new note by using the Note() class
      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // clear the text field with .reset in this class
      // if (e.key === "Enter")
    }
  
    reset() {
        this.txtTodo.value = " ";
    }
  }
  
  let app = new App();
  