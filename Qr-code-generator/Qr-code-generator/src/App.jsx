import QrCode from "react-qr-code"
import './App.css'
import { useState } from "react"

function App() {
     const [qrcode,setqrcode]=useState("");
     const [input,setinput]=useState("");
     function handleclick(){
        setqrcode(input);
     }
    return (
        <div>
            <h1>Qr code generator</h1>
            <input onChange={(e)=>setinput(e.target.value)} type='text' placeholder='enter your value' name="qr-code"></input>
            <button onClick={handleclick}>submit</button>
        <div>
            <QrCode id="qr-code-value" value={qrcode} size={400} bgColor="#fff"></QrCode>
        </div>
        
        </div>
    )
}

export default App
