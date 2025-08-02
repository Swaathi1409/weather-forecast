# Weather App

A responsive weather application built with HTML, CSS, and JavaScript that provides real-time weather information for any city worldwide.

## Features

- Real-time weather data for any city
- Clean and modern UI with animated cloud background
- Dynamic weather icons
- Detailed weather information (temperature, humidity, wind speed)
- Responsive design
- Keyboard support (Enter key)

## Live link
https://weather-forecast-three-khaki.vercel.app/

## Screenshots

<img width="1352" height="647" alt="image" src="https://github.com/user-attachments/assets/c913f47f-86ba-4db9-af87-198ec9d9a1b9" />


## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeatherMap API

## Setup Instructions

1. **Get API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

2. **Configure API Key**
   - Open `script.js`
   - Replace the API key:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

3. **Run the Application**
   - Open `index.html` in your web browser

## File Structure

```
weather-app/
├── index.html    # Main HTML structure
├── style.css     # Styles and animations
├── script.js     # JavaScript functionality
└── README.md     # Documentation
```

## Usage

1. Enter a city name in the input field
2. Click "Get Weather" or press Enter
3. View weather information including:
   - Current temperature
   - Weather description and icon
   - Feels like temperature
   - Humidity percentage
   - Wind speed

## API Integration

Uses OpenWeatherMap Current Weather Data API:
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parameters: city name, API key, metric units
- Returns: temperature, weather conditions, humidity, wind data

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License
