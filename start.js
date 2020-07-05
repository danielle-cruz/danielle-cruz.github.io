
class Index {
  constructor() {
    this._characterBtns = null;
    this._selected = null;
    // this._steps = null;
    // this._step = null;
    this._onCharacter = this._onCharacter.bind(this);

  }

  setup() {
    // Set current character as active
    let character;
    if(getCharacter()) {
      character = CHARACTERS[getCharacter()];
    } else {
      character = CHARACTERS[0];
    }
    let element = document.querySelector(`#${character.id}`);
    element.classList.add("active");

    // Add click character event listeners
    this._characterBtns = document.querySelectorAll(".select");
    console.log(this._characterBtns)
    for (let button of this._characterBtns) {
      button.addEventListener("click", this._onCharacter);
    }
    this._loadCharacter();
  }

  _onCharacter(event) {
    for (let button of this._characterBtns) {
      let character = button.parentNode;
      if (character.classList.contains("active")) {
        character.classList.remove("active");
      }
    }
    event.target.parentNode.classList.add("active");
    this._loadCharacter();
  }

  _loadCharacter() {
    let indexSelected;
    // Find which character is active
    for (let i = 0; i < this._characterBtns.length; i++) {
      let button = this._characterBtns[i];
      let character = button.parentNode;
      if (character.classList.contains("active")) {
        console.log("set");
        indexSelected = i;
        break;
      }
    }
    // Populate
    this._selected = CHARACTERS[indexSelected];
    console.log(this._selected);
    sessionStorage.setItem("character", this._selected.num);


    // SAVE TO MONGO

    // Update text fields
    // let name = document.querySelector("#character-name");
    // name.textContent = this._selected.name;

    // Update steps
    // this._loadSteps();
  }

  /*_loadSteps() {
    this._steps = document.querySelector("#steps")

  }*/
}

let index = new Index();
index.setup();
