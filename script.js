const d = new Date();
document.getElementById("date").textContent =
  d.toLocaleDateString("fr-FR");

document.getElementById("year").textContent =
  d.getFullYear();
