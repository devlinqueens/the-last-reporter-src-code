const menu = document.getElementById("mobileMenu");

    document.getElementById("menu-btn").onclick = () => {
        menu.classList.add("show");
    }

    document.getElementById("close-btn").onclick = () => {
        menu.classList.remove("show");
    }

    document.querySelector(".dropdown-btn").onclick = function(){
        document.querySelector(".dropdown-content").classList.toggle("show");
    }