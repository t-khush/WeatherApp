const apiKey = "97a91f98269ee574ca2cd5af4e1fa60a"

function cel2F(x){
  return x * 9 / 5 + 32;
}


var zip = "";
function ziptoString() {
  let cityName = document.querySelector(".zipcode-name");
  let temperature = document.querySelector(".Temperature");
  let desc = document.querySelector(".description");

  zip = document.getElementById("zip").value;
  var website = "https://openweathermap.org/data/2.5/weather?zip="+zip+",us&appid=b6907d289e10d714a6e88b30761fae22"
  fetch(website)
    .then(response =>{
      return response.json();
    })
    .then(data => {
      cityName.textContent=zip;
      console.log(data);
      temperature.textContent = (cel2F(data.main.temp) + "°F");
      desc.textContent = data.weather[0].description;

    })
}
