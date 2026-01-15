import './App.css'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBox from './SearchBox';
import InfoBox  from './InfoBox';
import WeatherApp from './WeatherApp';
function App() {
  let handleClick = () => {
    console.log("button was Clicked");
  }
  return (

    <>


    
      <WeatherApp/>
      {/* <h1>Material UI Demo</h1>
      <Button variant="text">Text</Button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Button variant="contained" onClick={handleClick}>Contained</Button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Button variant="outlined" color='success' size='large'>Outlined</Button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Alert severity="error">Delete option is given</Alert> */}
    </>
  )
}

export default App
