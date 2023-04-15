//import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Square from './components/Square.jsx';
import Input from './components/Input.jsx';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Square colorValue={''} />
        <Input />
      </main>
      <Footer />
    </>
  );
}

export default App;
