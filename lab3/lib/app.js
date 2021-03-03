"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note = /*#__PURE__*/function () {
  function Note(title) {
    _classCallCheck(this, Note);

    this.title = title;
    this.element = this.createElement(title);
  }

  _createClass(Note, [{
    key: "createElement",
    value: function createElement(title) {
      var newNote = document.createElement("li");
      newNote.addEventListener('click', this.remove.bind(newNote));
      console.log("dddd");
      return newNote;
    }
  }, {
    key: "add",
    value: function add(newNote) {// HINT🤩
      // this function should append the note to the screen somehow
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {// HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
  }, {
    key: "remove",
    value: function remove() {// HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
    }
  }]);

  return Note;
}();

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    console.log("👊🏼 The Constructor!"); // HINT🤩
    // pressing the enter key in the text field triggers the createNote function

    this.txtTodo = document.querySelector('#taskInput');
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }

  _createClass(App, [{
    key: "loadNotesFromStorage",
    value: function loadNotesFromStorage() {// HINT🤩
      // load all notes from storage here and add them to the screen
    }
  }, {
    key: "createNote",
    value: function createNote(e) {
      console.log(e);
      console.log(this);

      if (e.key == "Enter") {
        e.preventDefault();
      } // this function should create a new note by using the Note() class
      // HINT🤩
      //  note.add();
      // note.saveToStorage();
      // clear the text field with .reset in this class


      if (e.key === "Enter") {
        document.getElementById("taskEntryForm").reset();
      }
    }
  }, {
    key: "reset",
    value: function reset() {}
  }]);

  return App;
}();

var app = new App();