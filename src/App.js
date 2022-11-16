import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AutoCard from './Components/AutoCard';
import Education from './Components/Education';
import Work from './Components/Work';
import Hobbies from './Components/Hobbies';

function App() {
  return (
    <>
     <Navbar/>

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- Work --> */}
           <AutoCard/>

            {/* <!-- Work --> */}
            <Work/>
            {/* <!-- Education --> */}
          <Education/>
            {/* <!-- Hobbies --> */}
           <Hobbies/>
          </div>
          {/* <!-- /End replace --> */}
        </main>
      </div>

    </>
  );
}

export default App;
