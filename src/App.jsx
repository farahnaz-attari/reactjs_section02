import { useState } from 'react';
//import componentsImage from './assets/Components.png'
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import {CORE_CONCEPTS} from './data.js'
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';






function App() {

  const [selectedTopic,setSelectedTopic] = useState('components');

  function handleSelect(selectedButton){

    setSelectedTopic(selectedButton);
    
  }
  return (
    <div>
      <Header/>
      <main>
        <section id ="core-concepts" >
        <h2>Core Concepts</h2>
        <ul>
         {/* <CoreConcept title={CORE_CONCEPTS[0].title} 
                       description={CORE_CONCEPTS[0].description}
                      img={CORE_CONCEPTS[0].image}/> */}
          {/*<CoreConcept {...CORE_CONCEPTS[0]}/>           
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
                    <CoreConcept {...CORE_CONCEPTS[3]}/>*/}

        {CORE_CONCEPTS.map((conceptItem) =>(
           <CoreConcept key={conceptItem.title} {...conceptItem}/>
           ))}
        </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
             <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
             <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
             <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
             <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
