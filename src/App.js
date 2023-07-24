import React from 'react';
import Navbar from './component/Navbar'
import Textform from './component/Textform';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Navbar title="TextUtils"/>
      <div className='container'>
      <Textform heading="Enter the text analyze"/> 
      </div>
    </>
  );
}

export default App;


