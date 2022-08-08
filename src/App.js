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
  
  // useEffect((cat, info)=> {
  //   if(cat!==null) {
  //     axios
  //     .get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      
  //     .then((resp)=>{
  //       setInfo(resp.data)

  //     console.log("info", info)
  //     })
  
  //   }
  // },[mealId])

  if(cat===null) {
    <p>Loading</p>
  } else {
  return (
    <div>
      <button type="button" onClick={chickenHandle}>Chicken</button>
      <button type="button" onClick={beefHandle}>Beef</button>

          <div>Found {cat.meals.length} reciepts</div>
          <div className="meals">
          { cat.meals !== undefined && cat.meals !== null &&
            cat.meals.map((e, index)=>(
              <div key={index} className="meal-item">
                <img src={e.strMealThumb} alt="meal" className="meal-img"/>
                <h3>{e.strMeal}</h3>
                {/* <button onClick={()=>{getInfo(e.idMeal)}}>Get ID</button> */}
              </div>
            ))
          }
          </div>
          {/* {console.log(info.meals[0])}

          { info.meals[0]!==undefined && info.meals[0]!==null &&
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
      } */}



    </div>
  );
};
}
export default App;