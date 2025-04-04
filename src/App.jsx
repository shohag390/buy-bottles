import React, { Suspense } from 'react';
import "./App.css"
import Bottles from './Components/Bottles/Bottles';

const App = () => {

  const bottlesPromise = fetch('./bottles.json')
    .then(res => res.json());

  return (
    <div>
      <Suspense fallback={<h3>Loading.....</h3>}>
        <Bottles bottlesPromise={bottlesPromise} />
      </Suspense >
    </div >
  );
};

export default App;