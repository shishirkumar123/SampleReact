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
import My33 from './components/My33';
import My34 from './components/My34';
import My35 from './components/My35';
import My34_2ErrorBoundary from './components/My34_2ErrorBoundary';
import My35_1 from './components/My35_1';
import My35_2_2 from './components/My35_2_2';
import My35_2_3 from './components/My35_2_3';
import My36 from './components/My36';
import My36_1 from './components/My36_1';
import My37 from './components/My37';
import My37_Reuse from './components/My37_Reuse';
import My39 from './components/My39';
import My39Deep from './components/My39Deep';
import { Provider } from './components/My39';
import My40Deep from './components/My40Deep';

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
        {/* <My37 name="John Doe"/> */}
        {/* <My37 name = {(isLoggedIn) => isLoggedIn? 'John Doe' : 'Guest'}/>  compare with above } */}
        {/* <My37 render = {(isLoggedIn) => isLoggedIn? 'John Doe' : 'Guest'}/>  */}
        {/* <My37_Reuse render = {(count, incrementCount) => <My36 count={count} incrementCount={incrementCount} />} /> */}
        {/* <My37_Reuse render = {(count, incrementCount) => <My36_1 count={count} incrementCount={incrementCount} />} /> */}
        {/* In above two line parameter name 'render' is a convention but not a rule */}
        {/* <Provider value = "John DDDD">
          <My39Deep/>
        </Provider> */}
        <Provider value = "John XXXX">
          <My40Deep/>
        </Provider>
        
        
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
