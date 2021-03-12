import React, { useState } from 'react'
import { GrBike } from 'react-icons/gr';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const Basket = ({ choosenParts }) => {

   
    // console.log("from basket", choosenParts);
    
    return (
        <div className="basket">
            {/* <ul>{renderParts }</ul> */}
            <GrBike value={ { color: "#9ACA42" } }  size={ 40 }  />
        {/* <a href="#"> To your set up</a>  */ }
        <Popup
    trigger={<button className="button"> <a href="#"> To your set up</a> </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> BIKE SET UP </div>
        <div className="content">
          {' '}
         <p> Frame: {choosenParts.frame} <br/> Fork: {choosenParts.fork} <br/>  Brakes: {choosenParts.brakes} <br/> Transmission Group: {choosenParts.transmissionGroup} <br/> Wheels: {choosenParts.wheels} </p>
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> To Purchase </button>}
            position="top center"
            nested
          >
            <span>
              You will receive an e-mail with the instructions to buy your bike, as well as the payment conditions
            </span>
          </Popup>
       
        </div>
      </div>
    )}
  </Popup>

          
           
        </div>
    )
}

export default Basket