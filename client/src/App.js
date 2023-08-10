import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Info from './components/Info';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Banner />
            <Skills />
            <Projects />
            <Info />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
