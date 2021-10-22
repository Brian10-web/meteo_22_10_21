let ville = "Wavre";
recevoirTemperature(ville);

let changerDeVille = document.querySelector("#changer");
changerDeVille.addEventListener("click", () => {
  ville = prompt("La météo de quelle ville souhaitez-vous voir ?");
  recevoirTemperature(ville);
});

function recevoirTemperature(ville) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=7d4b6b4c59ddae0cb9500c918f722c96&units=metric";

  console.log(url);

  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        console.log(reponse);
        let temp = reponse.main.temp;
        let ville = reponse.name;
        document.querySelector("#temperature_label").textContent = temp;
        document.querySelector("#ville").textContent = ville;
      } else {
        alert("problème");
      }
    }
  };
}
