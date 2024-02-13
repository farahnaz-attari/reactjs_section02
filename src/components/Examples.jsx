import {useState} from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton'
import Section from './Section';

export default function Examples() {

    const [selectedTopic,setSelectedTopic] = useState('components');

  function handleSelect(selectedButton){

    setSelectedTopic(selectedButton);
    
  }
  return(

    
    <Section titlt="Examples" id="examples">
    
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
  </Section>
  )
}