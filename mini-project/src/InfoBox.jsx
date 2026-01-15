import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    const init_url = "https://media.istockphoto.com/id/624868974/photo/its-raining-in-kolkata.webp?a=1&b=1&s=612x612&w=0&k=20&c=TiP5htd8SPDIh28LNJFtToc3-L1OYBC4h4PCXvZwtgs=";
    return (
        <div className="InfoBox" style={{textAlign:'center'}}>
            {/* <h1>Weather :{info.weather}</h1> */}
            <div style={{display:'flex', justifyContent:'center'}}>
                 <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={init_url}
                    title="rainy_weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
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