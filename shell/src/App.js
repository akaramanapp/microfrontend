import React, { useState } from 'react';
import './App.css';
import { ProductApp, Header, Footer } from './remoteApp';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <React.Suspense fallback='Loading...'>
          <Header />
        </React.Suspense>
      </header>

      <section class="hero">
        <div class="container">
          <h2>Hoş Geldiniz!</h2>
          <p>En iyi ürünleri en uygun fiyatlarla sunuyoruz.</p>
        </div>
      </section>

      <section class="products">
        <React.Suspense fallback='Loading...'>
          <ProductApp />
        </React.Suspense>
      </section>

      <footer>
        <React.Suspense fallback='Loading...'>
          <Footer />
        </React.Suspense>
      </footer>
    </div>
  )
}

export default App;