import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.css"
import CardFilm from '../FilmCards';
function CardForFilm() {
    const [data, setData] = useState([]);
            const baseUrl = "http://localhost:5000/"
    
            const datalar = async () => {
                try {
                    const response = await axios(baseUrl)
    
                    setData(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
            
        useEffect(() => {
    
    datalar()
            
        }, [])
  return (
    <>
        <div className="cards"> 
        {
     (data && data.map((item) => 
     
     <CardFilm image={item.image} title={item.name} price={item.price}  />

   
               ))
               }
   </div>

    </>
  )
}

export default CardForFilm