import db from './firebaseConfig.js';
import React,{useState,useEffect} from 'react';
import './Food.css'

function Food() {

 const [food,setFood]=useState([])
  const fetchFood=async()=>{
    const response=db.collection('foodData');
    const data=await response.get();
    data.docs.forEach(item=>{
     setFood([...food,item.data()])
    })
  }
  useEffect(() => {
    fetchFood();
  }, [])

    return (
       <div className="grid">
      {
        food && food.map(foo=>{
          return(
            <div className="food-container">
            <div className="img-container"> 
                 <img className="food_image" src={foo.img}  alt="" />
            </div>
            
            <div className="data-container">
              <h1>{foo.foodName}</h1>
              <h4>Calories: {foo.Calories}</h4>
              <h4>Carbohydrate: {foo.Carbohydrate}</h4>
              <h4>Fat: {foo.Fat}</h4>
              <h4>Protein: {foo.Protein}</h4>
            </div>
             
              
            </div>
          )
        })
      }
    </div>
    )
}

export default Food
