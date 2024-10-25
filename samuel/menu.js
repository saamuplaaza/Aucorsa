document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("toggle-menu")
        .addEventListener("click", function () {
            const menuItems = document.querySelectorAll(".e-menu")
            const header = document.querySelector(".header")
            const icon = document.querySelector(".menu-icon i") // Selecciona el ícono

            // Alternar la clase 'show' para los elementos del menú
            menuItems.forEach((item) => {
                item.classList.toggle("show")
            })
            header.classList.toggle("show")

            // Cambiar el ícono entre 'fa-bars' y 'fa-times'
            if (icon.classList.contains("fa-bars")) {
                icon.classList.remove("fa-bars")
                icon.classList.add("fa-times")
            } else {
                icon.classList.remove("fa-times")
                icon.classList.add("fa-bars")
            }
        })
})
