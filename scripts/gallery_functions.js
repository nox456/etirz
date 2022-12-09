export default () => {
    const images_struc = Array.from(document.getElementsByClassName("image-struc"))
    const images_we = Array.from(document.getElementsByClassName("image-we"))
    const struc_div = document.getElementById("struc")
    const we_div = document.getElementById("we")
    const descriptions = Array.from(document.getElementsByClassName("description"))

    const showImgStruc = (i) => {
        const image_lightbox = document.createElement("article")
        const src = images_struc[i-1].firstElementChild.getAttribute("src").slice(26)
        image_lightbox.classList.add("light-box")
        image_lightbox.id = `image${i}`
        image_lightbox.innerHTML = `
            <a href="#image${i == 1 ? images_struc.length : i - 1}" class="next" id="prev"><img src="/resources/images/icons/left_arrow.svg" class="img-icon"></a>

            <img src="/resources/images/galeria/galeria_estructura/${src}">

            <a href="#image${i == images_struc.length ? 1 : i + 1}" class="next" id="next"><img src="/resources/images/icons/right_arrow.svg" class="img-icon"></a>

            <a href="#" class="close" id="close"><img src="/resources/images/icons/close_icon.svg" class="img-icon"></a>
        `
        struc_div.appendChild(image_lightbox)
        const close = document.getElementById("close")
        close.addEventListener("click", () => {
            image_lightbox.remove()
        })
        const next = document.getElementById("next")
        next.addEventListener("click", () => {
            image_lightbox.remove()
            showImgStruc(i == images_struc.length ? 1 : i + 1)
        })
        const prev = document.getElementById("prev")
        prev.addEventListener("click", () => {
            image_lightbox.remove()
            showImgStruc(i == 1 ? images_struc.length : i - 1)
        })
    }

    const showImgWe = (i) => {
        const image_lightbox = document.createElement("article")
        const src = images_we[i-1].firstElementChild.getAttribute("src").slice(26)
        image_lightbox.classList.add("light-box")
        image_lightbox.id = `image${i}`
        image_lightbox.innerHTML = `
            <a href="#image${i == 1 ? images_we.length : i - 1}" class="next" id="prev"><img src="/resources/images/icons/left_arrow.svg" class="img-icon"></a>

            <div>
                <h2 class="img-description">${descriptions[i-1].textContent}</h2>
                <img src="/resources/images/galeria/galeria_nosotros/${src}">
            </div>
            <a href="#image${i == images_we.length ? 1 : i + 1}" class="next" id="next"><img src="/resources/images/icons/right_arrow.svg" class="img-icon"></a>

            <a href="#" class="close" id="close"><img src="/resources/images/icons/close_icon.svg" class="img-icon"></a>
        `
        we_div.appendChild(image_lightbox)
        const close = document.getElementById("close")
        close.addEventListener("click", () => {
            image_lightbox.remove()
        })
        const next = document.getElementById("next")
        next.addEventListener("click", () => {
            image_lightbox.remove()
            showImgWe(i == images_we.length ? 1 : i + 1)
        })
        const prev = document.getElementById("prev")
        prev.addEventListener("click", () => {
            image_lightbox.remove()
            showImgWe(i == 1 ? images_we.length : i - 1)
        })
    }

    images_struc.forEach((element,index) => {
        element.addEventListener("click", () => {
            showImgStruc(index + 1)
        })
    })
    images_we.forEach((element,index) => {
        element.addEventListener("click", () => {
            showImgWe(index + 1)
        })
    })
};
