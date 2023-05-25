import logo from './logo.svg';
import './App.css';
import {MoviesData} from'./Data'
import { useState } from 'react';
import Movie_list from './Movie_list';
import Addfilm from './Add_film';
import Search from './Search'

function App() {
  const[data,setdata]=useState(MoviesData)
  const [addfilm, setaddfilm] = useState(false);
  const [searchName, setsearchName]=useState("")
  const [searchDate, setsearchDate]=useState("")
  const [SearchRating, setRating]=useState(0)
  console.log(data,'moviessss')
  const addhandler=(newmovie)=>{
    setdata([...data,newmovie ])
  }
  return (
    <>
    
    <div className="App">
    <Search setsearchName={setsearchName} setRating={setRating}/>
    <button  className='film-btn' onClick={() => setaddfilm(!addfilm)}>
   {addfilm ? " Card Film" : "Add Film"}    
         
      
        
      </button>
      
      {addfilm ? <Addfilm addhandler={addhandler} setaddfilm={setaddfilm} />:<Movie_list data={data} searchName={searchName} SearchRating={SearchRating} searchDate={searchDate}/>}

     
    
    </div>
    </>
  );
}

export default App;
