const map_button = document.getElementById("map-button")
const map_container = document.getElementById("map-container")
console.log(map_container)
map_button.addEventListener("click", e => {
    const target = e.target;
    map_container.style.display = "block"
})