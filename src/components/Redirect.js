import React from "react";
import useStateContext from "../hooks/useStateContext";
import { Navigate, Outlet } from "react-router-dom";

export default function Redirect(){
    const {context}= useStateContext()

    return(
        context.participantId==0?
        <Navigate to="/" />
        :<Outlet></Outlet>
    )
}