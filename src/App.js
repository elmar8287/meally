import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "./App.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, stepLabelClasses } from '@mui/material';
import Detail from './Components/Detail/Detail';
import Filter from './Components/Filter/Filter';
import Header from './Components/Header/Header';

const App = () => {
  const [cat, setCat] = useState(null)
  const [modal, setModal] = useState(false)
  const [addInfo, setAddInfo] = useState("")
  const [option, setOption] = useState("beef")
  const optionHandle = (e) => {
    setOption(e.target.value)
  }

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

  const [more, setMore] = useState(6);
  const showMore = (e) => {
    e.preventDefault();
    setMore(more+6);
  };

  if (cat===null) {
    <p>Loading</p>
  } else {
  return (
    <div className="main">
      <Header />
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

    { cat.meals !== null && cat!==undefined && cat.meals.length!==0 && <div className="meals-found">Found {cat.meals.length} reciepts</div>}

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
                    <Typography gutterBottom variant="p" component="div" className="meal-name">
                    {e.strMeal}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Button onClick={()=>{addInfoHandle(e.idMeal)}}>More detail</Button>
              </Card>
            )).slice(0, more)
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
         <div className="show-more-section">
          {cat.meals!==null && cat!==undefined && cat.meals.length!==0 && cat.meals.length>6 ?
            <button onClick={showMore} className="show-more">
            Show more
            </button>
            : null
          }
          </div>
        <div className="ing-section">
          <div className="ing-title">
          <h3>Wich ingeredients do you need?</h3>
          </div>   
          <div className="grid-container">
            <div className="item1">Beef</div>
            <div className="item2">Chicken</div>
            <div className="item3">Salmon</div>  
            <div className="item4">Pork</div>
            <div className="item5">Vegetables</div>
          </div>
        </div>
    </div>
  );
};
}
export default App;