
import { useState } from 'react';
import Movie_list from './Movie_list';

import {MoviesData} from'./Data'

export default function Addfilm({setaddfilm,addhandler}) {
  const[image,seturl_image]=useState("")
  console.log(image,'imagee')
  const[rating,setrating]=useState("")
  console.log(rating)
  const[name,setname]=useState("")
  console.log(name)
  const[date,setdate]=useState("")
  console.log(date)
  const[type,settype]=useState("")
  console.log(type)
  const[seasons,setseasons]=useState("")
  console.log(seasons)
  const[description,setdescription]=useState("")
  console.log(description)
  const adding=()=>{
    const newfilm={id:Math.random(),image,rating,name,date,type,seasons,description}
  console.log(newfilm,"film")
  addhandler(newfilm)
  close();
   

  }
  const close=()=>{
    setaddfilm(false)
  }
 
  
  
  
   
    return (
      <div>
        <form  >
        <div class="center">
  <h1>New Film</h1>
          <div className="inputbox">
          <input
              type="text"
              name="url_image"
              placeholder="URL_image"
              
              onChange={(e)=>(seturl_image(e.target.value))
              }

            />
            
            </div>
            <div className="inputbox">
            <input
              type="number"
              name="rating"
              placeholder="rating"
              value={rating}
              onChange={(e)=>(setrating(e.target.value))}
            />
            
            </div>
            
            <div className="inputbox"><input
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e)=>(setname(e.target.value))}
            />
            
            </div>
            <div className="inputbox"><input
              type="date"
              name="date"
              placeholder="date"
              value={date}
              onChange={(e)=>(setdate(e.target.value))}
            />
             
            </div>
            <div className="inputbox">
                <input
              type="text"
              name="type"
              placeholder="type"
              value={type}
              onChange={(e)=>(settype(e.target.value))}
            />
            
            </div>
            <div className="inputbox">
                <input
              type="text"
              name="seasons"
              placeholder="seasons"
              value={seasons}
              onChange={(e)=>(setseasons(e.target.value))}
            />
            </div>
            <div className="inputbox">
                <input
              type="text"
              name="description"
              placeholder="description"
              value={description}
              onChange={(e)=>(setdescription(e.target.value))}
            />
            
          </div>
          
          <div >
         
            <button type='submit' className="inputbox" onClick={adding} >Add Film </button>
            
            <button type='submit' className="inputbox" onClick={close} >Close </button>

          </div>
          </div>
        </form>
      </div>
      
    );
  }