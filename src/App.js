import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "./App.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';



const App = () => {
  const [cat, setCat] = useState(null)
  const [input, setInput] = useState("beef")
  const [info, setInfo] = useState(null)

  // const chickenHandle = () => {
  //   setInput("chicken")
  // }

  // const beefHandle = () => {
  //   setInput("beef")
  // }

  useEffect(()=> {
    axios
      .get("https://themealdb.com/api/json/v1/1/filter.php?i=" + input)
      .then((resp)=>{
        setCat(resp.data)
      })
  },[])
  console.log(cat)

  const [addInfo, setAddInfo] = useState("")

  useEffect(()=> {
      axios
      .get("https://themealdb.com/api/json/v1/1/lookup.php?i=" + addInfo)
      
      .then((resp)=>{
        setInfo(resp.data)
      })
  },[addInfo])



  const addInfoHandle = (e) => {
    console.log(e)
    setAddInfo(e)

  }

  if(cat===null) {
    <p>Loading</p>
  } else {
  return (
    <div className="main">
          <div>Found {cat.meals.length} reciepts</div>
          <div className="meals">

          { cat.meals !== undefined && cat.meals !== null &&
            cat.meals.map((e)=>(

              <Card key={e.idMeal} className="meal-item">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={e.strMealThumb}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {e.strMeal}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Button onClick={()=>{addInfoHandle(e.idMeal)}}>More detail</Button>
              </Card>
            ))
            
          }
          </div>
        
          {
            info.meals[0]!==null && info.meals[0]!==undefined &&
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
          {console.log(info.meals[0])}
    </div>
  );
};
}
export default App;