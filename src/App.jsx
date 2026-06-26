
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import PageLoader from '@/components/PageLoader.jsx';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator.jsx';
import FloatingActions from '@/components/FloatingActions.jsx';
import HomePage from '@/pages/HomePage.jsx';

function App() {
  return (
    <Router>
      <PageLoader />
      <ScrollProgressIndicator />
      <Header />
      <main>
        <HomePage />
      </main>
      <FloatingActions />
      <Footer />
      {/* <ScrollToTop /> */}
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
