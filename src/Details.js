import React from 'react'
import { MoviesData } from './Data'
import App from './Movie_card'
import { useParams , useNavigate} from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Details() {
    const {id}=useParams();
    console.log(id)
const navigate=useNavigate();
const redirec=()=>{
    navigate("/")
}
    const film= MoviesData.find((el) => el.id===Number(id));
    console.log(film,'tttttttttt')

  return (
    <div>
        {/* <button onChange={el.trailerUrl}></button> */}
      
        <iframe width="853" height="480" src={film.trailerUrl}  ></iframe>
       <button onClick={redirec}>
        Bac To MouviesCards </button>
        {/* <button>
             <Routes>
            <Route path="/"/>Bac To MouviesCards
        </Routes>
        </button> */}
   
    </div> 
  )
}

export default Details
