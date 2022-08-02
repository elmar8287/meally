import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "./App.css";

const App = () => {
  const [cat, setCat] = useState(null)
  const [input, setInput] = useState("beef")
  const [mealId, setMealId] = useState("")
  const [info, setInfo] = useState(null)

  const chickenHandle = () => {
    setInput("chicken")
  }

  const beefHandle = () => {
    setInput("beef")
  }

  useEffect(()=> {
    axios
      .get("https://themealdb.com/api/json/v1/1/filter.php?i=" + input)
      .then((resp)=>{
        setCat(resp.data)
        
        
      })
  },[input])
  console.log(cat)

  const getInfo = (e) => {
    setMealId(e)
  }
  
  useEffect(()=> {
    if(cat!==null) {
      axios
      .get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      
      .then((resp)=>{
        setInfo(resp.data)

      console.log("info", info)
      })
  
    }
  },[mealId])




  const ingredients = [
    "strIngredient1",
    "strIngredient2",
    "strIngredient3",
    "strIngredient4",
    "strIngredient5",
    "strIngredient5",
    "strIngredient6",
    "strIngredient7",
    "strIngredient8",
    "strIngredient9",
    "strIngredient10",
    "strIngredient11",
    "strIngredient12",
    "strIngredient13",
    "strIngredient14",
    "strIngredient15",
    "strIngredient16",
    "strIngredient17",
    "strIngredient18",
    "strIngredient19",
    "strIngredient20",
  ]

  if(cat===null) {
    <p>Loading</p>
  } else if(info===null) {
    <p>Loading info</p> }
      else {
  return (
    <div>
      <button type="button" onClick={chickenHandle}>Chicken</button>
      <button type="button" onClick={beefHandle}>Beef</button>

          <div>Found {cat.meals.length} reciepts</div>
          <div className="meals">
          {
            cat.meals.map((e, index)=>(
              <div key={index}>
                <img src={e.strMealThumb} width="100" height="100" alt="meal"/>
                <h3>{e.strMeal}</h3>
                <button onClick={()=>{getInfo(e.idMeal)}}>Get ID</button>
              </div>
            ))
          }
          </div>
          {console.log(info.meals[0])}

          { info.meals[0]!==undefined &&
            <div>
            <h3>Area: {info.meals[0].strArea}</h3>
            <h4>Category: {info.meals[0].strCategory}</h4>
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
export default App;