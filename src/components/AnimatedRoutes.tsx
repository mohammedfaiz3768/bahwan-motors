import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import CarDetailPage from '@/pages/CarDetailPage';
import PageTransition from './PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          } 
        />
        
        {/* LX 600 Routes */}
        <Route 
          path="/lx600/:variant/:manufacturer" 
          element={
            <PageTransition>
              <CarDetailPage carType="lx600" />
            </PageTransition>
          } 
        />
        
        {/* GXR Routes */}
        <Route 
          path="/gxr/:variant/:manufacturer" 
          element={
            <PageTransition>
              <CarDetailPage carType="gxr" />
            </PageTransition>
          } 
        />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route 
          path="*" 
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
