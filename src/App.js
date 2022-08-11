import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "./App.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Detail from './Components/Detail/Detail';
import Filter from './Components/Filter/Filter';



const App = () => {
  const [cat, setCat] = useState(null)
  const [input, setInput] = useState("beef")
  const [modal, setModal] = useState(false)
  const [addInfo, setAddInfo] = useState("")

  const [option, setOption] = useState("beef")
  const optionHandle = (e) => {
    setOption(e.target.value)
  }

  // const chickenHandle = () => {
  //   setInput("chicken")
  // }

  // const beefHandle = () => {
  //   setInput("beef")
  // }

  useEffect(()=> {
    axios
      .get("https://themealdb.com/api/json/v1/1/filter.php?c="+option)
      .then((resp)=>{
        setCat(resp.data)
        console.log("cat", cat)
      })
  },[option])
  console.log("after useEffect",cat)

  const addInfoHandle = (e) => {
    console.log("the id in addinfo`handle",e)
    setAddInfo(e)
    setModal(!modal)
  }

  const modalHandle = () => {
    setModal(!modal)
  }


  if (cat===null) {
    <p>Loading</p>
  } else {
  return (
    <div className="main">
          

          <div className="filtering">
      <h3 className="cat-title">Select the category</h3>
      <div className="cat-section">
      <select name="categories" className="categories" onChange={optionHandle}>
        <option value="beef">Beef</option>
        <option value="breakfast">Breakfast</option>
        <option value="chicken">Chicken</option>
        <option value="dessert">Dessert</option>
        <option value="Goat">Goat</option>
        <option value="lamb">Lamb</option>
        <option value="miscellaneous">Miscellaneous</option>
        <option value="pasta">Pasta</option>
        <option value="pork">Pork</option>
        <option value="seafood">Seafood</option>
        <option value="side">Side</option>
        <option value="starter">Starter</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
    </select>
      </div>
    </div>

    { cat.meals !== null && cat!==undefined && <div className="meals-found">Found {cat.meals.length} reciepts</div>}

      <div className="meals">

          { cat.meals !== null && cat!==undefined && 
          
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
        {
          modal ?
          <div className="modal">
            <div  className="modal-button">
            <button onClick={modalHandle}>Close</button>
            </div>
          
          <Detail mealId={addInfo} modal={modal}/> 
          </div>
          : null
        }
         </div>
    </div>
  );
};
}
export default App;