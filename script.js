const API_KEY = '11ffa26b01b2acb0b2051fdbe2a41cfa';

function getWeather() {
    const city = document.getElementById('city').value;
    
    if (!city) {
        alert('Please enter valid city name');
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').textContent = data.name + ', ' + data.sys.country;
                document.getElementById('temp').textContent = Math.round(data.main.temp) + ' °C';
                document.getElementById('desc').textContent = data.weather[0].description;
                document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                document.getElementById('feels').textContent = Math.round(data.main.feels_like);
                document.getElementById('humidity').textContent = data.main.humidity;
                document.getElementById('wind').textContent = data.wind.speed;
                document.getElementById('result').classList.remove('hidden');
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            alert('Error getting weather data. Please try again.');
        });
}

// Allow Enter key to search
document.getElementById('city').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});