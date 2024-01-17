import { useState } from "react";
import React from "react";
import Nature from "../assest/nature.jpeg";
import { Box, styled } from "@mui/material";
import Form from "../Component/Form";
import Information from "../Component/Information";
const Component=styled(Box)({
    height:"100vh",
    display:"flex",
    alignItems:"center",
    margin:"0 auto",
    width:"65%"
})
const Image = styled(Box)({
  backgroundImage: `url(${Nature})`, // Corrected syntax for backgroundImage
  width: "27%",
  height: "80%",
  backgroundSize: "cover",
  borderRadius:"20px 0px 0px 20px"
});

const Home = () => {
  const[result,setResult]=useState({})
  return (
    <>
      <Component>
        <Image></Image>
        <Box sx={{width:"73%",height:"80%"}}>
            <Form setResult={setResult}/>
            <Information result={result}/>
        </Box>
      </Component>
    </>
  );
};

export default Home;
