import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import InfoPanel from './components/InfoPanel'
import Footer from './components/Footer'

function App() {

  const screenConfig = useState(0);


  return (
    <div  >
      <Header />
      <InfoPanel currentScreen={screenConfig[0]}/>
      <Footer  screenConfig={screenConfig} />

    </div>
  );
}

export default App;
