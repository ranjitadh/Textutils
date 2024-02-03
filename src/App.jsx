import { useState } from 'react'


import './App.css'

function App() 

{
  const handleUpclick=()=>{
    let newtext=text.toUpperCase();
    Setnew(newtext);
  }
  const handlelowclick=()=>{
    let newtext=text.toLowerCase();
    Setnew(newtext);
  }
  const handleclearclick=()=>{
    let newtext=""
    Setnew(newtext);
  }

const handleonchange=(e)=>
{
Setnew(e.target.value)

}

const[text,Setnew]=useState("");



  return (
    <>
  <div className="text">

<h3>Enter Text Below</h3>

<textarea value={text} onChange={handleonchange} name="text" id="box" cols="90" rows="30"> </textarea>
<td></td>
<button onClick={handleUpclick} >
Convert to Upper Case
</button>
<button onClick={handlelowclick} >
Convert to Lower Case
</button>
<button onClick={handleclearclick} >
Clear Text
</button>
  </div>

    </>
  )
}

export default App
