import { useState } from "react"

export default function BetsMan (){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0)

    const handleSingle = () =>{
        const updateRuns = runs +1;
        setRuns(updateRuns)
    }

    const handleSix =()=>{
        const updateRuns = runs + 6;
        const updateSixses = sixes + 1;
        setSixes(updateSixses)
        setRuns(updateRuns)
    }
    const handlefour =()=>{
        const updateRuns = runs + 4;
        setRuns(updateRuns)
    }
        const countStyle = {
        border:'2px solid red',
        padding:'20px',
        gap:'10px'
    }
    return(
        <div  style={countStyle}>
            <h2>Player : Bangladesh Betsman</h2>
            {
                runs > 50 && <p> You score: 50</p>
            }
            <p><small>Six: {sixes}</small></p>

            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single Run</button><br />
            <button onClick={handlefour}>for Run</button><br />
            <button onClick={handleSix}>Six Run</button>
        </div>
    )
}