
class Yourself {
  constructor() {

  }

  setup() {
    let name = document.querySelector("#character-name");
    name.textContent = getCharacter();

  }
}

let yourself = new Yourself();
yourself.setup();
console.log(getCharacter());
