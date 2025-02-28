const menu = document.querySelector(".menu");
        const toggleButton = document.querySelector(".menu-toggle");

        toggleButton.addEventListener("click", function() {
            menu.classList.toggle("active");
        });