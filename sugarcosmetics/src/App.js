import "./App.css";


import './App.css';
// <<<<<<< HEAD
import Home from './components/pages/Home/Home';
import Payment from './components/pages/Payment/Payment';
// =======
import BreshesData from './components/pages/Breshes/BreshesData';
import Header from './components/pages/navbar/Header';
import { BestSellers } from './components/pages/Trending/BestSellers';
import MakeupKit from './components/pages/Trending/MakeupKit';
import { MerchStation } from './components/pages/Trending/MerchStation';
// import Delivery from './components/pages/Payment/Delivery'

// >>>>>>> 9e97041724eaa39fc6d6b0b8247be5e23c0d2acf


// import Login from './components/pages/login/Login';

// import BreshesData from './components/pages/Breshes/BreshesData';

// <<<<<<< HEAD
// =======



// // import Face from './components/pages/makeup/Face';
//  import Lips from './components/pages/makeup/Lips';
//  import MakeUp from './components/pages/makeup/MakeUp';



// import { MainRouter } from "./components/routes/MainRouter";


// >>>>>>> 9e97041724eaa39fc6d6b0b8247be5e23c0d2acf
function App() {
  return (
    <div className="App">

{/* <<<<<<< HEAD */}

    {/* <Payment/> */}
     
     {/* <MainRouter/> */}
     <Home/>
{/* ======= */}
      {/* <BreshesData /> */}
      {/* <BestSellers /> */}
      {/* <MerchStation /> */}
{/* <MakeupKit /> */}
{/* <Delivery/> */}
      {/* <MainRouter /> */}
{/* >>>>>>> 9e97041724eaa39fc6d6b0b8247be5e23c0d2acf */}

    </div>
  );
}

export default App;
