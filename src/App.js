import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Square from './components/Square.jsx';
import Input from './components/Input.jsx';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');

  return (
    <>
      <Header />
      <main className='container'>
        <Square colorValue={colorValue} hexValue={hexValue} />
        <Input
          colorValue={colorValue}
          setColorValue={setColorValue}
          setHexValue={setHexValue}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
