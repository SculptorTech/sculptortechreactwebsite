// App.jsx
import React from 'react';
import Nav from './components/Nav'; 
import Hero from './components/Hero';    
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import EnquireBtn from './components/EnquireBtn';
import Chatbot from './components/Chatbot';
import WhatsAppBtn from './components/WhatsAppBtn';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative">

      <Nav />

      {/* Floating buttons in bottom-right corner */}
      <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-3">
        <Chatbot />
        <WhatsAppBtn />
        <EnquireBtn />
      </div>
    
      <Hero />
      <Services />
      <About />
      <Clients />
      <Contact />
      <Gallery />

    </div>
  );
}

export default App;