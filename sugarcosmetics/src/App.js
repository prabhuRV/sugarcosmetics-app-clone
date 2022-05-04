
import './App.css';
import Breashes from './components/pages/brashes/Breashes';
import Login from './components/pages/login/Login';

// import Face from './components/pages/makeup/Face';
 import Lips from './components/pages/makeup/Lips';
 import MakeUp from './components/pages/makeup/MakeUp';



function App() {
  return (
    <div className="App">
      <Login/>
       <MakeUp/>
       <Breashes/>

    </div>
  );
}

export default App;
