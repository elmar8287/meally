import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Detail = ({mealId}, {modal}) => {
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
    <div>
      {info.meals!==null && info.meals!==undefined && 
      <div>
      <img src={info.meals[0].strMealThumb} alt={info.meals[0].strMeal}/>
      <h2>{info.meals[0].strMeal}</h2>
    <h3>Area: {info.meals[0].strArea}</h3>
    <h4>Category: {info.meals[0].strCategory}</h4>
    <a href={info.meals[0].strYoutube}>Watch on Youtube</a>
    <ul>
      <li>{info.meals[0].strIngredient1}</li>
      <li>{info.meals[0].strIngredient2}</li>
      <li>{info.meals[0].strIngredient3}</li>
      <li>{info.meals[0].strIngredient4}</li>
      <li>{info.meals[0].strIngredient5}</li>
      <li>{info.meals[0].strIngredient6}</li>
      <li>{info.meals[0].strIngredient7}</li>
    </ul>
  </div>
      }
    </div>
  );
};
}

export default Detail;