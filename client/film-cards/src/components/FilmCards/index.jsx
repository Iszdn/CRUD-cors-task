import React from 'react'
import "./index.css"
function CardFilm({image,title,price}) {
  return (
   

<div className="card-film">
    <div className="img-filcard">
        <img src={image} alt="" />
    </div>
<h3 className="title-carfil">{title}</h3>
<span className="price-carfil">${price}</span>
</div>

   
  )
}

export default CardFilm