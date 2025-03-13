const apiKey = '8c8a63fe4961e7b0471868bb3ebf3973';
const content = document.querySelector('.content');
const form = document.querySelector('form');

const getDetails = async(cityName)=>{
    try{
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        return res.data;
    }catch(e){
        return [];
    }
}

form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    let cityName = form.elements.query.value.trim();
    form.elements.query.value = "";
    let data = await getDetails(cityName);

    if (!data) {
        content.innerHTML = "<p>⚠️ Error fetching data. Please try again.</p>";
        return;
    }

    if (data.length === 0) {
        content.innerHTML = "<p>❌ No results found.</p>";
        return;
    }
    let iconCode = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    let img = document.createElement('img');
    img.src = iconUrl;
    let temperature = data.main.temp;
    let description = data.weather[0].description;
    let humidity = data.main.humidity;
    let windspeed = data.wind.speed;
    content.innerHTML = `<h2>Temperature = ${temperature} °C</h2>
    <h2>Description = ${description}</h2>
    <h2>Humidity = ${humidity}</h2>
    <h2>WindSpeed = ${windspeed}</h2>`;
    content.appendChild(img);
})