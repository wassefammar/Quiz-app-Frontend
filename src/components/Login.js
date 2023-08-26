import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Center from "./Center";
import useForm from "../hooks/useForm";
import { ENDPOINTS, createAPIEndpoint } from "../api";
import useStateContext from "../hooks/useStateContext";
import { useNavigate } from "react-router-dom";

const getFreshModel=()=>({
    name:'',
    email:''
});

const Login = () => {

    const {context, setContext, resetContext}= useStateContext();
    const navigate = useNavigate();
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }=useForm(getFreshModel);
    
    useEffect(()=>{
      resetContext()
    },[])


    const login= e=>{
        e.preventDefault();
        if(validate())
        createAPIEndpoint(ENDPOINTS.participant)
        .post(values)
        .then(res=>{
            setContext({participantId: res.data.participantId}) 
            navigate('/quiz');
            console.log(res);})
        .catch(err=> console.log(err));
       
    }

    const validate= ()=>{
        let temp={};
        temp.email=(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/).test(values.email)?"":"Email is not valid"
        temp.name= values.name!==""?"":"This field is required.";
        setErrors(temp);
        return Object.values(temp).every(x=> x==="")
    }

    return ( 
       <Center>
       
         <Card sx={{width:400, }}>
            <CardContent sx={{textAlign:'center'}}>
            <Typography variant="h3" sx={{my: 3}}>
                Quiz App
            </Typography>
            <Box sx={{
            '.MuiTextField-root':{
                m:1,
                width:'90%'
            }
        }}>

        <form noValidate autoComplete="off" onSubmit={login}>
            <TextField
               label="Email"
               name="email"
               variant="outlined"
               value={values.email}
               onChange={handleInputChange}
               {...(errors.email && {error:true, helperText:errors.email})}
             />
            <TextField
               label="Name"
               name="name"
               variant="outlined"
               value={values.name}
               onChange={handleInputChange}
               {...(errors.name && {error:true, helperText:errors.name})}
             />

             <Button
               type="submit"
               variant="contained"
               size="large"
               sx={{width:'90%'}}
             >Start</Button>

        </form>
        </Box>
            </CardContent>
        </Card>
       </Center>

     );
}
 
export default Login;