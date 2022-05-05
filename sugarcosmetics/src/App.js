
import './App.css';
// <<<<<<< HEAD
// <<<<<<< Updated upstream
// =======

import { MainRouter } from './components/routes/MainRouter';

// >>>>>>> 0b479fb9ed59aa0cf92012be46a864c7e3e43974
import BreshesData from './components/pages/Breshes/BreshesData';
import { BestSellers } from './components/pages/Trending/BestSellers';
import MakeupKit from './components/pages/Trending/MakeupKit';
import { MerchStation } from './components/pages/Trending/MerchStation';


import Login from './components/pages/login/Login';

// import BreshesData from './components/pages/Breshes/BreshesData';




// // import Face from './components/pages/makeup/Face';
//  import Lips from './components/pages/makeup/Lips';
//  import MakeUp from './components/pages/makeup/MakeUp';
// =======
import Slider from './components/pages/Home/Slider/Slider';
// >>>>>>> Stashed changes




function App() {
  return (
    <div className="App">
{/* <<<<<<< HEAD */}
{/* <<<<<<< Updated upstream */}
      {/* <BreshesData /> */}
      {/* <BestSellers /> */}
      {/* <MerchStation /> */}
{/* <MakeupKit /> */}

     {/* <h1>Slider </h1> */}


     <Slider/>


=======
     <MainRouter/>
{/* >>>>>>> 0b479fb9ed59aa0cf92012be46a864c7e3e43974 */}
    </div>
  );
}

export default App;
