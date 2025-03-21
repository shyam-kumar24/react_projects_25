import { useState } from 'react'
import ProgressBar from './index'
import './progress_bar.css'

function StepProgressBar() {

 const [activeState, setActiveState] = useState(1)
 
 function handleNext(){
    setActiveState(prev => (prev <= 4) ? prev + 1 : prev)
    console.log('next btn clicked');
    console.log(activeState);
 }

 function handlePrev(){
    setActiveState(prev => (prev >= 2) ? prev -1 : prev)
 }

  return (
    <div>
        <ProgressBar activeState={activeState} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  )
}

export default StepProgressBar