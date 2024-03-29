const COLORS = {
    "altogether": "#FF0404",
    "tedLasso": "#0041FF",
    "guia": "#EF9D23",
    "soundsight": "#45863A",
    "buildagram": "#500484",
    "filAm": "#FF0D86",
    "linkedOut": "#0041FF",
    "inFlux": "#52A6D4"
}

/* Get elements that should be re-colored */
var colorElements = document.querySelectorAll("h1, .block-quote, .external-link");
var altogetherTitle = document.querySelector("#altogether > h2")


/* Get all thumbnails */
var altogether = document.querySelector("#altogether");
var tedLasso = document.querySelector("#ted-lasso");
var guia = document.querySelector("#guia");
var soundsight = document.querySelector("#soundsight");
var buildagram = document.querySelector("#buildagram");
var filAm = document.querySelector("#fil-am");
var linkedOut = document.querySelector("#linked-out");
var inFlux = document.querySelector("#in-flux");

/* ALTogether */
altogether.addEventListener("mouseover", (event) => {
    for(var i = 0; i < colorElements.length; i++) {
        colorElements[i].style.color = COLORS.altogether;
    }
});

tedLasso.addEventListener("mouseover", (event) => {
    for(var i = 0; i < colorElements.length; i++) {
        colorElements[i].style.color = COLORS.tedLasso;
    }
});

guia.addEventListener("mouseover", (event) => {
    for(var i = 0; i < colorElements.length; i++) {
        colorElements[i].style.color = COLORS.guia;
    }
});

soundsight.addEventListener("mouseover", (event) => {
    for(var i = 0; i < colorElements.length; i++) {
        colorElements[i].style.color = COLORS.soundsight;
    }
});

buildagram.addEventListener("mouseover", (event) => {
    for(var i = 0; i < colorElements.length; i++) {
        colorElements[i].style.color = COLORS.buildagram;
    }
});

filAm.addEventListener("mouseover", (event) => {
    for(var i = 0; i < colorElements.length; i++) {
        colorElements[i].style.color = COLORS.filAm;
    }
});

linkedOut.addEventListener("mouseover", (event) => {
    for(var i = 0; i < colorElements.length; i++) {
        colorElements[i].style.color = COLORS.linkedOut;
    }
});
inFlux.addEventListener("mouseover", (event) => {
    for(var i = 0; i < colorElements.length; i++) {
        colorElements[i].style.color = COLORS.inFlux;
    }
});
