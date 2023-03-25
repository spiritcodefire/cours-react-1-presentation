import './App.css';
import Navbar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import SectionPresentation from './components/SectionPresentation/SectionPresentation';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="Modif">
      <header>
        <Header />
        <Navbar />
      </header>

      <SectionPresentation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
