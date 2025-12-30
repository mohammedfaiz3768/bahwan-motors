import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CarCatalog from '@/components/CarCatalog';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import IntroLoader from '@/components/IntroLoader';
import MouseGlow from '@/components/MouseGlow';

const Index = () => {
  const [introComplete, setIntroComplete] = useState(() => {
    return sessionStorage.getItem('introShown') === 'true';
  });

  const handleIntroComplete = () => {
    setIntroComplete(true);
    sessionStorage.setItem('introShown', 'true');
  };

  return (
    <>
      {!introComplete && <IntroLoader onComplete={handleIntroComplete} />}

      {introComplete && (
        <div className="min-h-screen bg-background">
          <MouseGlow />
          <Header />
          <main>
            <Hero />
            <CarCatalog />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
