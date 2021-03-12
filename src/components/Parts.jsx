import React,{useState} from 'react'

const Parts = ({ parts, onPartsSelected }) => {
    const {frames,forks,brakes,transmissionGroup,wheels}=parts
    // console.log('parts :>> ', parts);
    
    const [showFrame, setShowFrame] = useState(false)  

    const [showFork, setShowFork] = useState(false)     

    const [showBrake, setShowBrake] = useState(false)   

    const [showTransmissionGroup, setShowTransmissionGroup] = useState(false)

    const [showWheels, setShowWheels] = useState(false) 

    const [bikeSetup,setBikeSetup]=useState({frame:"",fork:"",brakes:"",transmissionGroup:"",wheels:""})

    const bikeSetupHandler = (e) => {
    
        setBikeSetup({ ...bikeSetup, [e.target.className]: e.target.innerText })
        onPartsSelected(bikeSetup)
        

    }

    const mappingFrames = frames.map((frame, i) => <li className="frame" id={i} onClick={bikeSetupHandler} >{ frame }</li>)

    const mappingForks = forks.map((fork, i) => <li className="fork" id={i} onClick={bikeSetupHandler} >{ fork }</li>)
    
    const mappingBrakes = brakes.map((brake, i) => <li className="brakes" id={ i } onClick={ bikeSetupHandler }>{ brake }</li>)
    
    const mappingTransmissionGroup = transmissionGroup.map((group, i) => <li className="transmissionGroup" id={ i } onClick={ bikeSetupHandler }>{ group }</li>)
    
    const mappingWheels = wheels.map((wheel, i) =>  <li className="wheels" id={ i } onClick={ bikeSetupHandler }>{wheel}</li>)
    // console.log('object :>> ', mappingForks);
        



    return (
        
        <section className="parts-section">

             <h2 onClick={ () => setShowFrame(!showFrame) } > Frames </h2>
            { showFrame ?  <ul>{mappingFrames}</ul> : null }
            <hr />
            
            <h2 onClick={ () => setShowFork(!showFork) } > Forks </h2>
            { showFork ?  <ul>{mappingForks}</ul> : null }
            <hr/>
            
            <h2 onClick={ () => setShowBrake(!showBrake) } > Brakes </h2>
            { showBrake ? <ul>{ mappingBrakes }</ul> : null }
            <hr/>
             
            <h2 onClick={()=> setShowTransmissionGroup(!showTransmissionGroup) } > Transmission Groups </h2>
            {showTransmissionGroup ? <ul>{ mappingTransmissionGroup }</ul> : null} 
            <hr />
            <h2 onClick={()=> setShowWheels(!showWheels) } > Wheels </h2>
            {showWheels ? <ul>{ mappingWheels }</ul> : null} 
            <hr />
          
           

        </section>
        
    )
}

export default Parts