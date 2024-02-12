//import { useState } from 'react';
//import componentsImage from './assets/Components.png'
import Header from './components/Header.jsx';
//import CoreConcept from './components/CoreConcept.jsx';
//import {CORE_CONCEPTS} from './data.js'
import CoreConcepts from './components/CoreConcepts.jsx';
//import TabButton from './components/TabButton.jsx';
//import { EXAMPLES } from './data.js';
import Examples from './components/Examples.jsx';







function App() {

  
  return (
    <div>
      <Header/>
      <main>
       <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
