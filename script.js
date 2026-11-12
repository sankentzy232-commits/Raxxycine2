const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// Form ini masih berupa demo front-end dan belum mengirim data ke email/server.
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const note = document.getElementById("formNote");

  if (!name) return;
  note.textContent = `Terima kasih, ${name}! Tampilan demo berhasil menerima isianmu. Hubungkan form ke layanan backend agar pesan tersimpan dan terkirim.`;
  this.reset();
});
