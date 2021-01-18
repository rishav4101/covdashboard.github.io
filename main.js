const ul = document.getElementById("country-list");

fetch(" https://corona-api.com/countries")
  .then((response) => response.json())
  .then((res) => {
    res.data.map((cnt) => {
      const li = document.createElement("li");
      li.id = cnt.code;
      li.classList.add("country-name");
      console.log(cnt.code);
      li.innerHTML = `<div>${cnt.code}</div>`;
      li.addEventListener("click", () => {
        getData(cnt.code).then((resp) => {
            console.log(resp);
            document.getElementById("active-api").innerHTML = `<div>${resp.data.latest_data.critical}</div>`
          });
      });
      ul.appendChild(li);
    });
  });

const getData = async (countryCode) => {
  const resp = await fetch(
    `http://corona-api.com/countries/${countryCode}`
  );
  const data = await resp.json();
  return data;
};

getData("south-africa").then((resp) => {
  console.log(resp);
});

const init = () => {
  for (let i = 0; i < document.querySelectorAll(".country-name").length; i++) {
    console.log(i);
    document
      .querySelectorAll(".country-name")
      [i].addEventListener("click", () => {
        console.log(i);
        getData(this.innerHTML).then((resp) => {
          console.log(resp);
        });
      });
  }
};

init();
//document.querySelectorAll(".country-name");
// let totalCases = 0;

// fetch("https://api.covid19api.com/summary")
// .then((response) => response.json())
// .then((res) => {
//     console.log(res.Global.TotalConfirmed)
// })
