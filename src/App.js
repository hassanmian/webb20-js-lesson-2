import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import Link from './components/Link';
import Paragraph from './components/Paragraph';

function App() {
  // This is comment
  return (
    <div className="App">
      <header className="App-header">

        <Image image={logo} title="React Logo"/>
        <Image image="http://placekitten.com/200/300" title="Cat"/>
        <Image image="http://placekitten.com/300/400" title="Cat 2"/>
        
        <Paragraph title="Information">
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>

        <Paragraph title="Whats happening?">
          Im currently learning React
        </Paragraph>
        
        <Paragraph>
          <ul>
            <li>React</li>
            <li>Props</li>
            <li>Deconstructing</li>
            <li>Props Children</li>
          </ul>
        </Paragraph>

        <Link url="https://reactjs.org" text="Learn React" />
        <Link url="https://svt.se" text="Go to SVT" />
      </header>
    </div>
  );
}

export default App;
