import logo from './logo.svg';
import '../src/style.css'
import About from './components/About';
import Contact from './components/Contact';
import MyWork from './components/MyWork';
import Nav from './components/Nav';

function App() {
  return (
    <div id="root">
      <Nav />
      <About />
      <MyWork />
      <Contact /> 
    </div>
  );
}

export default App;
