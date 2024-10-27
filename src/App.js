import logo from './logo.svg';
import './App.css';
import A from './components/A';

function App() {
  console.log('khachar khachar');
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log(`API Key: ${apiKey}`);
  console.log(`API URL: ${apiUrl}`);
  
  return (
    <div>
          
        {/* <A fname = 'Hari' lname = 'Prasad'/> */}
        {/* <A applyStyle = {false}/> Note that boolean is paased differently than string */}
        From App.js h1v
        <A/>
        {/* <Aparent/> */}
        {/* <My30/> */}
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
