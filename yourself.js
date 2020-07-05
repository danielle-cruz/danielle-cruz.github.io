
class Yourself {
  constructor() {
    this._currentSlide = null;
    this._forms = null;
    this._logs = null;
    this._interests = null;
    this._slides = null;
    this._beginBtn = null;
    // this._interestBtn = null;
    this._resultsBtn = null;
    this._results = null;


    this._onNext = this._onNext.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._onResults = this._onResults.bind(this)
    // this._onInterests = this._onInterests.bind(this);


    // make separate interest form to extract all checked boxes


  }

  setup() {
    this._beginBtn = document.querySelector("#begin-btn");
    this._beginBtn.addEventListener("click", this._onNext);

    this._slides = document.querySelectorAll(".item");
    console.log(this._slides);

    this._forms = document.querySelectorAll("form");
    console.log(this._forms);

    this._logs = document.querySelectorAll(".log");
    for (let form of this._forms) {
      form.addEventListener("submit", this._onSubmit);
    }

    this._resultsBtn = document.querySelector("#results-btn");
    this._resultsBtn.addEventListener("click", this._onResults);
    this._results = document.querySelector("#fh5co-features-2");
    console.log(this._results)

    //this._interests = document.querySelectorAll("")


  }

  _getCurrIndex() {
    for (let [index, node] of this._slides.entries()) {
      if (node === this._currentSlide) {
        return index;
      }
    }
  }

  _onNext(event) {
    console.log("called on next");

    this._currentSlide = event.target.closest(".item");
    let nextIndex = this._getCurrIndex() + 1;
    if (nextIndex >= this._slides.length) return;

    this._currentSlide.classList.remove("displayed");
    this._slides[nextIndex].classList.add("displayed");
  }

  _onSubmit(event) {
    event.preventDefault();
    console.log("called on submit");

    this._currentSlide = event.target.closest(".item");
    let questionIndex = this._getCurrIndex() - 1;

    let data = new FormData(this._forms[questionIndex]);
    let output = "";

    for (const entry of data) {
      console.log(entry)

      if (output !== "") {
        output = output + ", ";
      }

      if (entry[1] === "") {
        alert("Please select an answer");
        return;
      }
      output = output + entry[0] + "=" + entry[1] + "\r";
    };

    this._logs[questionIndex].innerText = output;
    console.log(output)
    // SAVE OUTPUT TO MONGO

    this._onNext(event);
  }

  _onResults(event) {
    this._results.classList.remove("hide");
  }
}

let yourself = new Yourself();
yourself.setup();
