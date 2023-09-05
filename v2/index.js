// /* Globals */
// const FILTERS = [
//     "accessibility",
//     "data visualization",
//     "education",
//     "storytelling",
//     "identity",
//     "play",
//     "language",
//     "art",
//     "music"
// ]

// const WORKS = {
//     "barkada": ["storytelling", "identity", "play"],
//     "altogether": ["accessibility"]
// }

// let selectedFilters = [];
// let selectedWorks = new Set();

// /* Elements */
// const filterContainer = document.querySelector("#filter-container");
// const gallery = document.querySelector("#gallery");
// const thumbnails = document.querySelectorAll("#gallery a");

// /* Create filter buttons */
// for (let i = 0; i < FILTERS.length; i++) {
//     const filter = document.createElement("button");
//     filter.textContent = FILTERS[i];
//     filter.classList.add("filter-button");
//     filter.addEventListener("click", (event) => {onSelectFilter(filter);});
//     filterContainer.append(filter);
// }

// /* Event listeners */

// function onSelectFilter(filter) {
//     console.log(filter.textContent);
//     if (filter.classList.contains("selected")) {
//         filter.classList.remove("selected");
//         const i = selectedFilters.indexOf(filter.textContent);
//         selectedFilters.splice(i, 1);
//     } else {
//         filter.classList.add("selected");
//         selectedFilters.push(filter.textContent);
//     }
//     updateSelectedWorks();
//     displaySelectedWorks();
// }

// /* Helper functions */

// function updateSelectedWorks() {
//     for (const work in WORKS) {
//         if (shouldSelectWork(work) == true) {
//             selectedWorks.add(work);
//         } else {
//             if (selectedWorks.has(work)) {
//                 selectedWorks.delete(work);
//             }
//         }
//     }
// }

// function shouldSelectWork(work) {
//     for (const filter of selectedFilters) {
//         if (!WORKS[work].includes(filter)) {
//             return false;
//         }
//     }
//     return true;
// }

// function displaySelectedWorks() {
//     for (const thumbnail of thumbnails) {
//         if (selectedWorks.has(thumbnail.id)) {
//             thumbnail.style.display = "inline-block";
//         } else {
//             thumbnail.style.display = "none";
//         }
//     }
// }

