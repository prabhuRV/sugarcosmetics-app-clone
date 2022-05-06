import "./App.css";


import './App.css';
import BreshesData from './components/pages/Breshes/BreshesData';
import Header from './components/pages/navbar/Header';
import { BestSellers } from './components/pages/Trending/BestSellers';
import MakeupKit from './components/pages/Trending/MakeupKit';
import { MerchStation } from './components/pages/Trending/MerchStation';
// import Delivery from './components/pages/Payment/Delivery'



// import Login from './components/pages/login/Login';

// import BreshesData from './components/pages/Breshes/BreshesData';




// // import Face from './components/pages/makeup/Face';
//  import Lips from './components/pages/makeup/Lips';
//  import MakeUp from './components/pages/makeup/MakeUp';



import { MainRouter } from "./components/routes/MainRouter";


function App() {
  return (
    <div className="App">

      {/* <BreshesData /> */}
      {/* <BestSellers /> */}
      {/* <MerchStation /> */}
{/* <MakeupKit /> */}
{/* <Delivery/> */}
      <MainRouter />

    </div>
  );
}

export default App;
