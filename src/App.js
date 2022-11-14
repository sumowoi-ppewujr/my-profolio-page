import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AutoCard from './Components/AutoCard';
import Education from './Components/Education';
import Work from './Components/Work';

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
            <div id="hobbie" class="bg-[#B2B2B2] h-50 my-6 py-8 rounded-lg border-4"></div>
          </div>
          {/* <!-- /End replace --> */}
        </main>
      </div>

    </>
  );
}

export default App;
