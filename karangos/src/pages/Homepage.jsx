import React from "react";
import  Box  from "@mui/material/Box";
import { Typography } from "@mui/material";
import image from '../assets/vintage-cars.png'

export default function Homepage(){

    return (
        <>
           <Typography variant="h1" sx={{
            mb: '50px' //marginTop
            }}>
             Bem-vindo(a) á loja Karangos
           </Typography>
           <Box sx={{
              textAlign: 'center',
              '& img':{
              maxWidth: '800px',
              width: '80vh'
              }
           }}>
           <img src={image} alt="Carros antigos" />
           </Box>
        </>   
    )
}