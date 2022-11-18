import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AutoCard from './Components/AutoCard';
import Education from './Components/Education';
import Work from './Components/Work';
import Hobbies from './Components/Hobbies';
import {useState} from "react";

function App() {
  const[isActive, setIsActive] =useState({
    active: true,
    name: "education"
  })
  return (
    <>
     <Navbar/>

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- Work --> */}
           <AutoCard isActive={isActive} setIsActive={setIsActive}/>
          {isActive.active && isActive.name === "education" ? (
             <Education/>
           ) : isActive.active && isActive.name === "work" ? (
            <Work/>
           ) : (
            <Hobbies/>
           )}

            {/* <!-- Work --> */}
            
            {/* <!-- Education --> */}
          
            {/* <!-- Hobbies --> */}
           
          </div>
          {/* <!-- /End replace --> */}
        </main>
      </div>

    </>
  );
}

export default App;
