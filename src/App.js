import Navbar from './components/NavigationBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
