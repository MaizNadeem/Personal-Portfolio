import Navbar from './components/NavigationBar';
import Banner from './components/Banner';
import Skills from './components/Skills';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Skills />
        </div>
    );
}

export default App;
