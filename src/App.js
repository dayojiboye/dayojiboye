import React from 'react';

import { AnimatePresence } from 'framer-motion';

// pages

import Home from './Pages/Home';

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <main className="main">
          <Home />
        </main>
      </AnimatePresence>
    </>
  );
}

export default App;
