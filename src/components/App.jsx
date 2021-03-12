import {useState} from "react"
import logo from '../assets/logo2.jpg';
import '../css/App.css';
import Basket from './Basket';
import Parts from './Parts';






const App = () => {
  
  const parts = { frames: ["Santacruz Nomad", "CUBE Stereo", "YT Capra"], forks: ["Rox Shox PIKE", "Fox Float 36", "Öhlins RXF36"], brakes: ["Formula Cura", "Magura MT Trail", "Shimano Saint"], transmissionGroup: ["Box Two", "Sram X01", "Shimano XTR"], wheels: ["Crankbrothers Synthesis E 11", "Hope Tech 35W Pro 4", "DT Swiss M 1900"] }
  
  const [choosenParts, setChoosenParts] = useState({ frame: "", fork: "", brakes: "", transmissionGroup: "", wheels: "" })
  
  const onPartsSelected = (data) => {
    setChoosenParts({...data})
    
  }
  
  return (
    <div className="App">
      <h1>Set up your dream machine</h1>
      <p>One thing is certain: enduro bikes are booming and the choice and variety of bikes has never been better. We gathered the current most exciting models for this group test and put them through their paces. What is the best enduro bike of 2020 and what should you look for in a bike? Choose your Frame and components for a custom made definitive Enduro bike. </p>
      
      <img src={ logo } className="App-logo" alt="logo" />
      
      <Parts onPartsSelected={onPartsSelected} parts={ parts }  />
    
  
      <Basket choosenParts={ choosenParts } />
      
        
      
    </div>
  );
}

export default App;
