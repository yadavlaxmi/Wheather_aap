import { useState } from "react";
import { Box, Button, InputBase, styled } from "@mui/material";
import { getWeather } from "./Api";

const Container = styled(Box)({
  background: "#445A6F",
  padding: 10,
});

const Input = styled(InputBase)({
  color: "#FFF",
  marginRight: 20,
  fontSize: 15,
});

const GetButton = styled(Button)({
  background: "#e67e22",
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: "", country: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const getWeatherInfo = async () => {
    let response = await getWeather(data.city, data.country);
    setResult(response);
  };

  return (
    <>
      <Container>
        <Input
          placeholder="City"
          onChange={(e) => handleChange(e)}
          name="city"
        />
        <Input
          placeholder="Country"
          onChange={(e) => handleChange(e)}
          name="country"
        />
        <GetButton variant="contained" onClick={() => getWeatherInfo()}>
          Get Weather
        </GetButton>
      </Container>
    </>
  );
};

export default Form;
