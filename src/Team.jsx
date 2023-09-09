import { useState } from "react"

export default function Team(){

 const [team,setTeam] = useState(11)
 
 const handleAdd = () =>{
       const newTeam = team + 1;
       setTeam(newTeam)
 }
 const handleReduce = () =>{
      setTeam(team -1)
 }



   const teamStyle = {
          border : '2px solid blue',
          margin : '10px',
          padding : '50px',
          borderRadius : '14px'
   }
 
       return (
          <div style={teamStyle}>
             <h1>Team :{team} </h1>
             <button onClick={handleAdd}>Add</button>
             <button onClick={handleReduce}>Reduce</button>
          </div>
       )

}