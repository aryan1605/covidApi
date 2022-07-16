const api_url = "https://api.covid19api.com/summary";

let getApiData = (url) => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let country = data.Countries[77].Country;
      let totalCases = data.Countries[77].TotalConfirmed;
      let totalDeaths = data.Countries[77].TotalDeaths;
      let newCase = data.Countries[77].NewConfirmed;
      let newDeaths = data.Countries[77].NewDeaths;
      let today = new Date().toDateString();
      displayData(country, totalCases, totalDeaths, newCase, newDeaths, today);
    })
    .catch((error) => {
      console.log(error);
    });
};

function displayData(c, tc, tdth, nc, nd, td) {
  let pre = document.createElement("pre");
  console.log(tc);
  pre.innerHTML = `<span>Country Name : </span> ${c}\n<span>Date : </span>${td}\n<span>Total Cases : </span>${tc}\n<span>Total Deaths : </span>${tdth}\n<span>New Cases : </span>${nc}\n<span>New Deaths : </span>${nd}\n`;
  document.getElementById("mydiv").appendChild(pre);
}
getApiData(api_url);