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
    value: function createElement() {
      var newNote = document.createElement("li");
      newNote.addEventListener('click', this.remove.bind(newNote));
      return newNote;
    }
  }, {
    key: "add",
    value: function add() {
      console.log("added");
      document.getElementById("taskList").appendChild(this.element);
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {
      var note = localStorage.getItem("note");
      note = JSON.parse(note) || [];
      note.push(this.title);
      localStorage.setItem("note", JSON.stringify(note));
    }
  }, {
    key: "remove",
    value: function remove() {
      document.getElementById("taskList").removeChild(this);
      var value = this.innerText;
      var note = localStorage.getItem("note");
      note = JSON.parse(note) || [];
      var index = note.indexOf(value);
      note.splice(index, 1);
      localStorage.setItem("note", JSON.stringify(note));
    }
  }]);

  return Note;
}();

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    console.log("👊🏼 The Constructor!");
    this.txtTodo = document.querySelector('#taskInput');
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }

  _createClass(App, [{
    key: "loadNotesFromStorage",
    value: function loadNotesFromStorage() {
      var note = localStorage.getItem("note");
      note = JSON.parse(note) || [];

      for (var i = 0; i < note.length; i++) {
        var title = note[i];
        var newNote = new Note(title);
        newNote.add();
      }
    }
  }, {
    key: "createNote",
    value: function createNote(e) {
      console.log(e);
      console.log(this);

      if (e.key == "Enter") {
        e.preventDefault();

        if (this.txtTodo.value !== "") {
          var newNote = new Note(this.txtTodo.value);
          newNote.add();
          newNote.saveToStorage();
        }

        this.reset();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.txtTodo.value = " ";
    }
  }]);

  return App;
}();

var app = new App();