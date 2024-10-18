document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('theme-toggle');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

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

    // Toggle menu navigasi
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });

        // Menyembunyikan menu jika mengklik di luar menu
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('show');
            }
        });
    }
});
