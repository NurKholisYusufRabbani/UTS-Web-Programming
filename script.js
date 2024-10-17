// script.js
document.addEventListener("DOMContentLoaded", function() {
  const toggleSwitch = document.getElementById("theme-toggle");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");


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

  // Ketika pengguna menggulir ke bawah, tampilkan tombol
  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block"; // Tampilkan tombol
      } else {
          scrollToTopBtn.style.display = "none"; // Sembunyikan tombol
      }
  };

  // Ketika tombol diklik, gulir kembali ke atas
  scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth" // Gulir dengan halus
      });
  });
});
