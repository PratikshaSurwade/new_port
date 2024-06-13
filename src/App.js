import './App.css';
import Contact from './pages/Contacts/Contact';
import Educationpage from './pages/Education/Educationpage';
import Navbar from './pages/Navbar/Navbar.js';
import  Title  from './pages/Titlepage/Title.js';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Projects />
      <Educationpage />
      <Contact />
    </div>
  );
}

export default App;