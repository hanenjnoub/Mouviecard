import logo from './logo.svg';
import './App.css';
import {MoviesData} from'./Data'
import { useState } from 'react';
import Movie_list from './Movie_list';
import Addfilm from './Add_film';
import Search from './Search'
import { Routes,Route } from 'react-router-dom';
import Details from './Details'
import BoutonAdd from './BoutonAdd'

function App() {
  const[data,setdata]=useState(MoviesData)
  const [addfilm, setaddfilm] = useState(false);
  const [searchName, setsearchName]=useState("")
  
  const [SearchRating, setRating]=useState(0)
  console.log(data,'moviessss')
  const addhandler=(newmovie)=>{
    setdata([...data,newmovie ])
  }
  return (
    <>
    
    <div className="App">
    <Routes> <Route path="/" element={< Search setsearchName={setsearchName} setRating={setRating}/>}></Route></Routes>
    <Routes>
      <Route path='/' element={<BoutonAdd/>}/>
    </Routes>
      
      {addfilm ? <Addfilm addhandler={addhandler} setaddfilm={setaddfilm} />: <Routes><Route path="/" element={<Movie_list data={data} searchName={searchName} SearchRating={SearchRating} />} /></Routes>  }

     <Routes>
     <Route path="/Detai/:id" element={<Details />} />
  
     </Routes>
    
    </div>
    </>
  );
}

export default App;
