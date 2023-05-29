import './App.css';
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'
import {  BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Details from './Details';

function App({el}) {
  
  
    return (
     
      <div>
             
             <div class="main-container"> 
		
       
    
   <Link to={`/Detai/${el.id}`} > <img src={el.image} alt="Film" className="cover-imagde" /></Link>
      <div class="ticket-container">
       <div class=""> 
      <h4 class="">
       <ReactStars
      count={5}
      value={el.rating}
      edit={false}
      size={24}
      color2={'#ffd700'} /> </h4>  
      <h4 > {el.name}</h4>
      <h4 > {el.date}</h4>
      <h4 >{el.type}</h4>
      <h4 >{el.seasons}</h4>
      <p >{el.description}</p>
      </div>
       </div> 
      </div> 
 </div>
 
    );
  }
  
  export default App;
 