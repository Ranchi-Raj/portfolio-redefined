import './App.css';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader';
import Contents from './Components/Contents.jsx';

function App() {

  const [state,setState] = useState(true);
  useEffect(() => {

   const timer = setTimeout(() => {setState(false);},5000);
   

     return () => clearTimeout(timer); 
  },[]);

  return (

    <div className="App">
     {state ? <Loader/> : 
      
     <Contents/>}
    </div>
  );
}

export default App;
