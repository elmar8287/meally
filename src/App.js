import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "./App.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Detail from './Components/Detail/Detail';



const App = () => {
  const [cat, setCat] = useState(null)
  const [input, setInput] = useState("beef")
  const [modal, setModal] = useState(false)
  const [addInfo, setAddInfo] = useState("")

  // const chickenHandle = () => {
  //   setInput("chicken")
  // }

  // const beefHandle = () => {
  //   setInput("beef")
  // }

  useEffect(()=> {
    axios
      .get("https://themealdb.com/api/json/v1/1/filter.php?i="+input)
      .then((resp)=>{
        setCat(resp.data)
        console.log("cat", cat)
      })
  },[input])
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
      <div className="meals">
              {/* <div>Found {cat.meals.length} reciepts</div> */}
              {console.log("inside of return", cat)}
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