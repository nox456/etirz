import tab_functions from "./tab_functions.js";
import gallery_functions from "./gallery_functions.js";

const menu = Array.from(document.getElementById("menu").children)
menu.forEach(e => {
    const menu_element = e.children[0]
    if (document.title.includes(menu_element.textContent)) {
        menu_element.remove()
    }
})

if (document.title.includes("Galería")) {
    tab_functions()
    gallery_functions()
}