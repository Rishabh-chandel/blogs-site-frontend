import React, { useContext, useEffect } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import { AppContext } from './Context/AppContext';

function App() {
  const {fetchdata} = useContext(AppContext);

  useEffect( () => {
    fetchdata();
  },[]);

  return(
    <div>
      <Header></Header>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;