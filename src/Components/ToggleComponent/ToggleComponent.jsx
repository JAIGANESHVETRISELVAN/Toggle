import React, { useState } from 'react';
import "./ToggleComponent.css"
import image from "../../assets/images/eyeicon.jpg"
const ToggleComponent = () => {
    const [visible,setVisible]=useState(false)
    
    const ShowDetailsHandler=()=>{
        if(visible){
            setVisible(false)
        }else{
            setVisible(true)
        }
        
    }
  return (
    <main>
        <div className='container'>
        <img src={image} alt="profile" style={{ height: '100px' }}/>
        <h1>Name: JAIGANESH V</h1>
        <h3>Reg No: 212221040063</h3>
        <button onClick={ShowDetailsHandler}>Show Details</button>
        {visible && <h3>CAN YOU SEE ME</h3>}
        </div>
    </main>
  )
}

export default ToggleComponent