import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UploadSection from './components/UploadSection';
import PneumoniaInfo from './components/DiseaseLibrary';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <UploadSection />
          </>
        );
      case 'diagnose':
        return <UploadSection />;
      case 'info':
        return <PneumoniaInfo />;
      case 'about':
        return <About />;
      default:
        return <Hero setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
