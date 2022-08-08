import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "./App.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const App = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
    <div className="main">
                <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Meal Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Beef</MenuItem>
              <MenuItem value={20}>Chichen</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <div>Found {cat.meals.length} reciepts</div>
          <div className="meals">

          { cat.meals !== undefined && cat.meals !== null &&
            cat.meals.map((e, index)=>(

              <Card key={index} className="meal-item">
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
              </Card>
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