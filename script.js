const pubDate = document.getElementById("pubDate");
const updDate = document.getElementById("updDate");
const tweetDate = document.getElementById("tweetDate");
const year = document.getElementById("year");

const copyBtn = document.getElementById("copyBtn");
const printBtn = document.getElementById("printBtn");
const topBtn = document.getElementById("topBtn");
const themeBtn = document.getElementById("themeBtn");

function fmt(d){
  return new Intl.DateTimeFormat("fr-FR",{day:"2-digit",month:"long",year:"numeric"}).format(d);
}

const now = new Date();
year.textContent = now.getFullYear();

pubDate.dateTime = now.toISOString();
pubDate.textContent = fmt(now);

const upd = new Date(now);
upd.setHours(now.getHours() - 3);
updDate.dateTime = upd.toISOString();
updDate.textContent = fmt(upd);

const tw = new Date(now);
tw.setDate(now.getDate() - 2);
tweetDate.dateTime = tw.toISOString();
tweetDate.textContent = fmt(tw);

copyBtn.addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText(location.href);
    copyBtn.textContent = "Lien copié";
    setTimeout(()=>copyBtn.textContent="Copier le lien", 900);
  }catch(e){
    copyBtn.textContent = "Erreur";
    setTimeout(()=>copyBtn.textContent="Copier le lien", 900);
  }
});

printBtn.addEventListener("click", () => window.print());
topBtn.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));

function setTheme(v){
  if(v==="light"){
    document.documentElement.setAttribute("data-theme","light");
    localStorage.setItem("theme","light");
  }else{
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme","dark");
  }
}
const saved = localStorage.getItem("theme") || "dark";
setTheme(saved);

themeBtn.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme")==="light";
  setTheme(isLight ? "dark" : "light");
});
