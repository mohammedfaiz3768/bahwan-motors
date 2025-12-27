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
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <IntroLoader onComplete={() => setIntroComplete(true)} />
      
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
