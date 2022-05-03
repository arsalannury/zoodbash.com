import { TextField, Button, Grid } from "@mui/material"
import styled from 'styled-components';
import RTL from "../../../Theme/RTL";
import TextFieldTheme from "../../../Theme/TextFieldTheme";

function CreateComment() {
  return (
    <>
   <RTL>
   <TextFieldTheme>
   <Form>
       <Grid container alignItems={'center'} justifyContent={'space-around'}>
        <TextField variant="standard" label="عنوان" />
        <TextField variant="standard" label="ایمیل" />
        <TextField variant="standard" label="شماره تماس" />
        </Grid>
        <TextArea maxLength={400} placeholder="دیدگاه خود را بنویسید ..."></TextArea>
        <Button variant="outlined">ثبت دیدگاه</Button>
    </Form>
   </TextFieldTheme>
   </RTL>
    </>
  )
}

export default CreateComment;


const TextArea = styled.textarea
`
max-width:300px;
max-height:300px;
min-width:100px;
min-height:100px;
border:1px solid #ddd;
border-radius:5px;
padding:7px;
margin:30px;
font-family:font-sans;
&:focus {
border:1px solid #ccc !important;
outline:none !important;
}
&::placeholder {
    font-size:.8em;
}
`
const Form = styled.form
`
min-height:300px;
display:flex;
align-items:flex-start;
justify-content:space-evenly;
flex-direction:column;
margin-top:60px;
`

const Div = styled(Grid)``