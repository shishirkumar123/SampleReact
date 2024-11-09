import logo from './logo.svg';
import './App.css';
import A from './components/A';
import My1 from './components/My1';
import My2 from './components/My2';
import My3 from './components/My3';
import My4 from './components/My4';
import My5 from './components/My5';
import My6 from './components/My6';
import My7 from './components/My7';
import My8 from './components/My8';
import My9 from './components/My9';
import My30 from './components/My30';
import Practice from './components/Practice';
import My31 from './components/My31';

function App() {
  console.log('khachar khachar');
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log(`API Key: ${apiKey}`);
  console.log(`API URL: ${apiUrl}`);
  
  return (
    <div>
        From App.js
        {/* <My5 fname='saki' lname='aa paas aa'/>   */}
        {/* <Practice/> */}
        {/* <A applyStyle = {false}/> Note that boolean is paased differently than string */}
        {/* <A/> */}
        {/* <Aparent/> */}
        <My31/>
        
        {/* ----------below can be deleted------------------------------------------------ */}
    {/* // <div className="App"> */}
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
    
        {/* <Aparent/> */}
        {/* <My11Parent/> */}
      {/* </header> */}
    </div>
  );
}

export default App;
