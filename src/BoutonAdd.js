import React from 'react'
import { useState } from 'react';
import Addfilm from './Add_film';
function BoutonAdd() {
    const [addfilm, setaddfilm] = useState(false);
    return (
    <div>
      <button  className='film-btn' onClick={() => setaddfilm(!addfilm)}>
   {addfilm ? " Card Film" : "Add Film"}    
         
      
        
      </button>
    </div>
  )
}

export default BoutonAdd
