
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor';

// Pages
import Jff from './features/theGrind/pages/Jff';
import Squad from './features/pages/Squad';
import NewsRoom from './features/theNewsRoom/pages/NewsRoom';
import TheGrind from './features/theGrind/pages/TheGrind'
import Home from './features/pages/Home'
import WhatWeDo from './features/pages/WhatWeDo';
import Contact from './features/pages/Contact';

function App() {
  return (
      <Router>
        <Navbar />
        <CustomCursor />
        <Routes>
          <Route path="/"element = {<Home/>}/>
          <Route path="/what-we-do"element = {<WhatWeDo/>}/>
          <Route path="/squad" element = {<Squad/>}/>
          <Route path="/the-grind" element = {<TheGrind/>}/>
            <Route path="/grind/jff" element = {<Jff/>}/>
          <Route path="/newsroom" element = {<NewsRoom/>}/>
          <Route path="/contact" element= {<Contact/>}/>
        </Routes>
      </Router>
      
  
  );
}

export default App;
