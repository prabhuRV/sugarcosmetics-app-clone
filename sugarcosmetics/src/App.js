
import './App.css';

import { MainRouter } from './components/routes/MainRouter';

import BreshesData from './components/pages/Breshes/BreshesData';
import { BestSellers } from './components/pages/Trending/BestSellers';
import MakeupKit from './components/pages/Trending/MakeupKit';
import { MerchStation } from './components/pages/Trending/MerchStation';


import Login from './components/pages/login/Login';

// import BreshesData from './components/pages/Breshes/BreshesData';




// // import Face from './components/pages/makeup/Face';
//  import Lips from './components/pages/makeup/Lips';
//  import MakeUp from './components/pages/makeup/MakeUp';




function App() {
  return (
    <div className="App">
     <MainRouter/>
    </div>
  );
}

export default App;
