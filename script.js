const root = document.documentElement;

const themeBtn = document.getElementById("themeBtn");
const copyLinkBtn = document.getElementById("copyLinkBtn");
const printBtn = document.getElementById("printBtn");
const topBtn = document.getElementById("topBtn");
const year = document.getElementById("year");
const updatedAt = document.getElementById("updatedAt");
const tweetDate = document.getElementById("tweetDate");
const toggleDisclosure = document.getElementById("toggleDisclosure");
const disclosure = document.getElementById("disclosure");

function fmtDate(d){
  return new Intl.DateTimeFormat("fr-FR", { day:"2-digit", month:"long", year:"numeric" }).format(d);
}

function initDates(){
  const now = new Date();
  year.textContent = now.getFullYear();

  updatedAt.dateTime = now.toISOString();
  updatedAt.textContent = fmtDate(now);

  const t = new Date(now);
  t.setDate(now.getDate() - 2);
  tweetDate.dateTime = t.toISOString();
  tweetDate.textContent = fmtDate(t);
}

function setTheme(next){
  if(next === "light"){
    root.setAttribute("data-theme","light");
    localStorage.setItem("theme","light");
  } else {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme","dark");
  }
}

function initTheme(){
  const saved = localStorage.getItem("theme");
  if(saved === "light") setTheme("light");
  else setTheme("dark");
}

themeBtn.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  setTheme(isLight ? "dark" : "light");
});

copyLinkBtn.addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText(location.href);
    copyLinkBtn.textContent = "Lien copié";
    setTimeout(() => copyLinkBtn.textContent = "Copier le lien", 1200);
  }catch(e){
    copyLinkBtn.textContent = "Impossible";
    setTimeout(() => copyLinkBtn.textContent = "Copier le lien", 1200);
  }
});

toggleDisclosure.addEventListener("click", () => {
  const isHidden = disclosure.hasAttribute("hidden");
  if(isHidden){
    disclosure.removeAttribute("hidden");
    toggleDisclosure.textContent = "Masquer l’avertissement";
  }else{
    disclosure.setAttribute("hidden","");
    toggleDisclosure.textContent = "Afficher l’avertissement";
  }
});

printBtn.addEventListener("click", () => window.print());
topBtn.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));

initTheme();
initDates();
