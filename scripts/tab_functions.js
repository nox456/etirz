export default () => {
    const tabs_content = document.getElementById("tabs-content")
    const tabs = Array.from(document.getElementsByClassName("tab"))
    const struc = document.getElementById("struc")
    const we = document.getElementById("we")

    tabs.forEach(e => {
        e.addEventListener("click",elem =>{
            const target = elem.target

            struc.style.display = "none"
            we.style.display = "none"
            tabs[1].style.backgroundColor = "#888"
            tabs[0].style.backgroundColor = "#888"

            if (e.textContent == "Estructura") {
                struc.style.display = "flex"
                tabs[0].style.backgroundColor = "#444"
            } else if (e.textContent == "Nosotros") {
                we.style.display = "flex"
                tabs[1].style.backgroundColor = "#444"
            }

        })
    })
}