const root = document.getElementById("root")

const render = (data) => {
    const html = `
        <div class="weather">
            <h1>Toronto Weather</h1>
            <p>${new Date().toLocaleDateString("en-US")}</p>
            <div class="weather-info">
                <div class="weather-info-text">
                    <p>Temp:</p>
                    <p> ${kelToCels(data.main.temp)}</p>
                </div>
                <div class="weather-info-text">
                    <p>Feels Like:</p>
                    <p> ${kelToCels(data.main.feels_like)}</p>
                </div>
            </div>
            <div class="weather-info">
                <div class="weather-info-text">
                    <p>Max Temp:</p>
                    <p>${kelToCels(data.main.temp_max)}</p>
                </div>
                <div class="weather-info-text">
                    <p>Min Temp:</p>
                    <p>${kelToCels(data.main.temp_min)}</p>
                </div>
            </div>
    `

    root.innerHTML = html
}

const kelToCels = (temp) => {
    return `${Math.round(temp - 273.15)}°C`
}

const load = async () => {
    const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=47d7b942ea7e702e4bdd7a72a9fc3f75")

    render(data)
}



