import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const init_url =
        "https://media.istockphoto.com/id/624868974/photo/its-raining-in-kolkata.webp?a=1&b=1&s=612x612&w=0&k=20&c=TiP5htd8SPDIh28LNJFtToc3-L1OYBC4h4PCXvZwtgs=";

    let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1601116780524-a186c597a6fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbndlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox" style={{ textAlign: 'center' }}>
            {/* <h1>Weather :{info.weather}</h1> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ?HOT_URL : COLD_URL}
                        title="rainy_weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
                                
        
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature : {info.temp}&deg;C</p>
                            <p>Humidity : {info.humidity}</p>
                            <p>Min Temp: {info.tempMin}</p>
                            <p>Max Temp: {info.tempMax}</p>
                            <p>Weather and be described as <i><b>{info.weather}</b></i> and Feels like: {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}