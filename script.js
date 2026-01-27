const datePub = document.getElementById("datePub");
const dateTweet = document.getElementById("dateTweet");
const year = document.getElementById("year");
const copyBtn = document.getElementById("copyBtn");
const topBtn = document.getElementById("topBtn");

function fmt(d){
  return new Intl.DateTimeFormat("fr-FR",{day:"2-digit",month:"long",year:"numeric"}).format(d);
}

const now = new Date();
year.textContent = now.getFullYear();

datePub.dateTime = now.toISOString();
datePub.textContent = fmt(now);

const t = new Date(now);
t.setDate(now.getDate() - 2);
dateTweet.dateTime = t.toISOString();
dateTweet.textContent = fmt(t);

copyBtn.addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText(location.href);
    copyBtn.textContent = "Copié";
    setTimeout(()=>copyBtn.textContent="Copier le lien", 900);
  }catch(e){
    copyBtn.textContent = "Erreur";
    setTimeout(()=>copyBtn.textContent="Copier le lien", 900);
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({top:0,behavior:"smooth"});
});
