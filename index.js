/* const COLORS = [
    "#52A6D4",
    "#FF0404",
    "#EF9D23",
    "#45863A",
    "#0041FF",
    "#FF0D86",
    "#500484",
];

const COLORS = [
    {
        name: "index",
        color: "#52A6D4"
    },
    {
        name: "altogether",
        color: "#FF0404"
    },
    {
        name: "ted-lasso",
        color: "#EF9D23"
    },
    {
        name: "guia",
        color: "#0041FF"
    },
    {
        name: "soundsight",
        color: "#45863A"
    },
    {
        name: "buildagram",
        color: "#500484"
    },
    {
        name: "fil-am",
        color: "#52A6D4"
    },
    {
        name: "linked-out",
        color: "#FF0D86"
    },
    {
        name: "in-flux",
        color: "#EF9D23"
    },

]

var colorIndex = 0;
var currentColor = COLORS[colorIndex];

function getRandomColor() {
    colorIndex = (colorIndex + 1) % COLORS.length;
    return COLORS[colorIndex];
}

var altogetherThumbnail = document.querySelector("#altogether");
var colorElements = document.querySelectorAll("h1, .block-quote, .external-link");

altogetherThumbnail.addEventListener("mouseover", (event) => {
    for(var i = 0; i < colorElements.length; i++) {
        colorElements[i].style.color = getRandomColor();
    }
}); */

const COLORS = {
    "index": "#52A6D4",
    "altogether": "#FF0404",
    "ted-lasso": "#EF9D23",
    "guia": "#0041FF",
    "soundsight": "#45863A",
    "buildagram": "#500484",
    "fil-am": "#52A6D4",
    "linked-out": "#FF0D86",
    "in-flux": "#EF9D23"
}

var colorElements = document.querySelectorAll("h1, .block-quote, .external-link");
var altogetherThumbnail = document.querySelector("#altogether");
altogetherThumbnail.addEventListener("mouseover", (event) => {
    currentColor = COLORS.altogether;
    for(var i = 0; i < colorElements.length; i++) {
        colorElements[i].style.color = COLORS.altogether;
    }
});
