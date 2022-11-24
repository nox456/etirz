const menu = document.getElementById("menu")
const sub_menu = Array.from(document.getElementById("sub-menu").children)

sub_menu.forEach(e => {
    const menu_element = e.children[0]
    if (document.title.includes(menu_element.textContent)) {
        menu_element.remove()
    }
})