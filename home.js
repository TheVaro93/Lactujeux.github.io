const d = new Date();
document.getElementById("year").textContent = d.getFullYear();

const fmt = (x) => x.toLocaleDateString("fr-FR");
document.querySelectorAll(".js-upd").forEach(el => el.textContent = fmt(d));
