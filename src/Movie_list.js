import Movies_card from"./Movie_card"
import './App.css';



const Movie_list = ({data,searchName,SearchRating})=>{
  
  // const addnewfilm{

  // }

    
    return (
      
      <div  className="hero-container">
      {
        data
        .filter((el)=> (el.name.toLowerCase().includes(searchName.toLowerCase()) || el.date==searchName)
        && el.rating >=SearchRating )
        .map((el)=>(
         <Movies_card el={el}/>
))
}

      </div>
    );
}
  export default Movie_list;