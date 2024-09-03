import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const userName = "FAYSAL"
const avatar = "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww";
// const loggedinn = true
const products = [{ Name: "potato", key: 1 }, { Name: "carbage" , key : 2 }, { Name: "Mango", key: 3 },];
function App() {
  

  return (
    <>
      <div>
        <h1>HELLO {userName}</h1>
        <img src={avatar} height={350} width={350} alt="hi" className='photo' /><br />
         <ul>
          {products.map((data) =>
            <li key={data.key}>
              {data.Name}</li>)}          
        </ul> 
       
       {/* <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum scene</li>
        </ul>  */}
        
         {/* <button>
          { loggedinn ? "logout" : "login"}
       </button>  */}
        </div>
      
    </>
  )
}

export default App
