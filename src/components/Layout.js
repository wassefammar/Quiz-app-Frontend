import { AppBar, Button, Toolbar, Typography } from "@mui/material";
//import LogoutIcon from '@mui/icons-material/Logout';
import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import useStateContext from "../hooks/useStateContext";
import { Logout } from "@mui/icons-material";
import { red } from "@mui/material/colors";

export default function Layout(){
   const {context, setContext, resetContext}=useStateContext()
   const navigate= useNavigate()

   const logout=()=>{
    resetContext()
    navigate("/")

   }

   return (
    <>
        <AppBar position="sticky">
        <Toolbar sx={{width:640, m:'auto'}}>
             <Typography 
             variant="h4"
             align="center"
             sx={{flexGrow: 1}}>
                     Quiz App
             </Typography>
             <Button sx={{color: red}} onClick={logout}><Logout></Logout> Logout</Button>
        </Toolbar>
    </AppBar>
    <Outlet/>
    </>

   )
}