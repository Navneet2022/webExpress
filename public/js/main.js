
const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const dataHide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerHTML = `plese write the name before search`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f557a9fac9f0ec4f2136b0d17e4adaae`;
    
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      temp.innerText=arrData[0].main.temp;
      temp_status.innerText=arrData[0].weather[0].main;
      city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;
          dataHide.classList.remove("data_hide");
    } catch {
      city_name.innerHTML = `plese write the name properly`;
      dataHide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click",getInfo);