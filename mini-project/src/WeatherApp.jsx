import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp() {
    const [weatherInfo, serWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: " Rainy"
    })

    let updateInfo = (newInfo) =>{
        serWeatherInfo(newInfo);

    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App by: Siddhi Gavhane</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}