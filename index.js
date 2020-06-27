
class Index {
  constructor() {
    this._characterBtns = null;
    this._selected = null;
    this._steps = null;
    this._step = null;

    /*this._introspective = null;
    this._curious = null;
    this._storyteller = null;
    this._dataExplorer = null;*/

    this._onCharacter = this._onCharacter.bind(this);

  }

  setup() {
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
    if (indexSelected === 0) this._selected = INTROSPECTIVE;
    else if (indexSelected === 1) this._selected = CURIOUS;
    else if (indexSelected === 2) this._selected = STORYTELLER;
    else this._selected = DATA_EXPLORER;
    localStorage.setItem("character", this._selected.name);

    // Update text fields
    let name = document.querySelector("#character-name");
    // console.log(this._selected.name)
    name.textContent = this._selected.name;
    // console.log(name)

    // Update steps
    this._loadSteps();
  }

  _loadSteps() {
    this._steps = document.querySelector("#steps")


  }
}

let index = new Index();
index.setup();
