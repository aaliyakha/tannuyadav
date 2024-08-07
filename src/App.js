// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Team from './component/Team/Team';
import Page from './component/Page/Page';
import Classes from './component/Classes/Classes';
import Serives from './component/Serives/Serives';
 


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Team' element={<Team/>}/>
      <Route path='Page' element={<Page/>}/>
      <Route path='Classes' element={<Classes/>}/>
      <Route path='Serives' element={<Serives/>}/>
      
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
