import axios from "axios";
const API_KEY = "2719e37a2a44515b380ae333dd3b0090";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
  try {
    let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.log("Error while calling the API", error.message);
    return error.response;
  }
};
