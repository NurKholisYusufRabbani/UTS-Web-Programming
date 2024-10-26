document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('theme-toggle');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.navbar');

    // Saklar tema
    if (toggleSwitch) {
        // Periksa apakah mode gelap diaktifkan
        if (localStorage.getItem("dark-mode") === "enabled") {
            document.body.classList.add("dark-mode");
            toggleSwitch.checked = true;
        }

        toggleSwitch.addEventListener("change", function() {
            if (this.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("dark-mode", "enabled");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    }

    // Tombol scroll ke atas
    if (scrollToTopBtn) {
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };

        scrollToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Mobile menu toggle functionality
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function() {
            navList.classList.toggle('show');
        });
    }
});
