import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox() {
    let [city, setCity] = useState("");
    // use a open weather map api
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "694e37f6dda0433084c9109ef63ed853";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description

        }
        console.log(result);
    };



    let handleChange = (event) => {
        setCity(event.target.value);

    }

    let handleSubmit = () => {
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return (
        <div className='SearchBox' style={{marginBottom:"25px"}}>
            {/* <h3>Search for the Weather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city"
                    value={city}
                    label="City Name"
                    variant="outlined"
                    required
                    onChange={handleChange}
                />
                <br /> <br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>

    )
}