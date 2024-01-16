import { Box,Button,InputBase,styled } from "@mui/material"
const Container=styled(Box)({
    background:"#445A6F",
    padding:10
})
const Input=styled(InputBase)({
    color:"#FFF",
    marginRight:20,
    fontSize:15
})
const GetButton=styled(Button)({
    background:"#e67e22",
    

})
const Form=()=>{
    return(
        <>
        <Container>
            <Input
            placeholder="City"
            />
            <Input
            placeholder="Country"
            />
            <GetButton variant="contained">Get whether</GetButton>
        </Container>
        </>
    )
}
export default Form