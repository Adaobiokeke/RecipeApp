import React from 'react'
import style from './recipe.module.css';

const Recipie = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h4 style={{color:'green'}}>Calories:{calories}</h4>
            <p style={{color:'orangeRed'}}>Ingredients:</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image}src={image} alt="pix"/>
        </div>
    )
}

export default Recipie;
