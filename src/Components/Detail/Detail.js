import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./Detail.css"
import { BsFillXCircleFill } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";

const Detail = ({mealId, close}) => {
  const [info, setInfo] = useState(null)

  useEffect(()=> {
    axios
    .get("https://themealdb.com/api/json/v1/1/lookup.php?i=" + mealId)
    
    .then((resp)=>{
      setInfo(resp.data)
    })
  },[mealId])
console.log("first checking", info)

if(info===null) {
  <p>Loading</p>
} else {
  return (
    <div className="detail-modal">
      {info.meals!==null && info.meals!==undefined && 
      <div>
        <div className="modal-header">
          <h2>{info.meals[0].strMeal}</h2>
          <span onClick={close}><BsFillXCircleFill /></span>
        </div>
        <div className="modal-area-cat">
          <p>Area: {info.meals[0].strArea}</p>
          <p>Category: {info.meals[0].strCategory}</p>
          <p><a href={info.meals[0].strYoutube}>Watch on YOUTUBE</a></p>
        </div>
        <h3 className="ing-list">Ingredients</h3>
        <div className="ingred">
          <ul className="ing-list">
            <li>{info.meals[0].strIngredient1}</li>
            <li>{info.meals[0].strIngredient2}</li>
            <li>{info.meals[0].strIngredient3}</li>
            <li>{info.meals[0].strIngredient4}</li>
            <li>{info.meals[0].strIngredient5}</li>
            <li>{info.meals[0].strIngredient6}</li>
            <li>{info.meals[0].strIngredient7}</li>
            <li>{info.meals[0].strIngredient8}</li>
            <li>{info.meals[0].strIngredient9}</li>
            <li>{info.meals[0].strIngredient10}</li>
            <li>{info.meals[0].strIngredient11}</li>
            <li>{info.meals[0].strIngredient12}</li>
            <li>{info.meals[0].strIngredient13}</li>
            <li>{info.meals[0].strIngredient14}</li>
            <li>{info.meals[0].strIngredient15}</li>
            <li>{info.meals[0].strIngredient16}</li>
            <li>{info.meals[0].strIngredient17}</li>
            <li>{info.meals[0].strIngredient18}</li>
            <li>{info.meals[0].strIngredient19}</li>
            <li>{info.meals[0].strIngredient20}</li>
          </ul>
          <ul className="ing-list">
            <li>{info.meals[0].strMeasure1}</li>
            <li>{info.meals[0].strMeasure2}</li>
            <li>{info.meals[0].strMeasure3}</li>
            <li>{info.meals[0].strMeasure4}</li>
            <li>{info.meals[0].strMeasure5}</li>
            <li>{info.meals[0].strMeasure6}</li>
            <li>{info.meals[0].strMeasure7}</li>
            <li>{info.meals[0].strMeasure8}</li>
            <li>{info.meals[0].strMeasure9}</li>
            <li>{info.meals[0].strMeasure10}</li>
            <li>{info.meals[0].strMeasure11}</li>
            <li>{info.meals[0].strMeasure12}</li>
            <li>{info.meals[0].strMeasure13}</li>
            <li>{info.meals[0].strMeasure14}</li>
            <li>{info.meals[0].strMeasure15}</li>
            <li>{info.meals[0].strMeasure16}</li>
            <li>{info.meals[0].strMeasure17}</li>
            <li>{info.meals[0].strMeasure18}</li>
            <li>{info.meals[0].strMeasure19}</li>
            <li>{info.meals[0].strMeasure20}</li>
          </ul>
          <img src={info.meals[0].strMealThumb} alt={info.meals[0].strMeal} width="30%" height="30%"/>
        </div>
        <h3 className="ing-list">Instructions</h3>
        <p className="instruction">{info.meals[0].strInstructions}</p>
      </div>
      }
    </div>
  );
};
}

export default Detail;
