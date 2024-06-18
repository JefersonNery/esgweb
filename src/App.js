
import React from 'react';
import '../src';
import Header from '../src/components/header/Header.js'
import Footer from '../src/components/footer/Footer.js'
import AreaInfo from '../src/components/areaInformativa/AreaInfo.js'



function App() {
  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <AreaInfo />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
