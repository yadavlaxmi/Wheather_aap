import { Typography, Box } from "@mui/material";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import {LocationOn,SettingsBrightness,Opacity,Brightness5,Brightness6,Dehaze} from "@mui/icons-material"
const Information = ({ result }) => {
  return (
    result && Object.keys(result).length > 0 ? (
      <Box>
        <Typography variant="h5"><LocationOn/>Location:{result.name},
        {result.sys.country}</Typography>
        <Typography><SettingsBrightness/>Temperature:{result.main.temp}</Typography>
        <Typography><Opacity/>Humidity:{result.main.humidity}</Typography>
        <Typography><Brightness5/>Sun Rise:{result.sys.sunrise}</Typography>
        <Typography><Brightness6/>Sun Set:{result.sys.sunset}</Typography>
        <Typography><Dehaze/>Humidity:{result.weather[0].main}</Typography>
      </Box>
    ) : null
  );
};

export default Information;
