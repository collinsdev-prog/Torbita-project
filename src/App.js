import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import ApplyNow from './components/Pages/ApplyNow';
import ContactUs from './components/Pages/ContactUs';
import Faqs from './components/Pages/Faqs';
import DataScienceAndDataAnalytics from './components/DropdownPages/DataScienceAndDataAnalytics';
import DbManagement from './components/DropdownPages/DbManagement';
import IctFundamentals from './components/DropdownPages/IctFundamentals';
import MobileAppDevelopement from './components/DropdownPages/MobileAppDevelopement';
import Networking from './components/DropdownPages/Networking';
import Programming from './components/DropdownPages/Programming';
import SoftwareEngineering from './components/DropdownPages/SoftwareEngineering';
import WebDevelopement from './components/DropdownPages/WebDevelopement';
import Courses from './components/Pages/Courses';
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
      <Route path='/' index component={Home} />
      <Route path='/about-us' element={AboutUs} />
      <Route path='/apply-now'  element={ApplyNow} />
      <Route path='/contact-us'  element={ContactUs} />
      <Route path='/faqs'  element={Faqs} />
      <Route path='/courses'  element={Courses} />
      <Route path='/networking'  element={Networking} />
      <Route path='/programming'  element={Programming} />
      <Route path='/web-development' element={WebDevelopement} />
      <Route path='/software-engineering'  element={SoftwareEngineering} />
      <Route path='/ict-fundamentals'  element={IctFundamentals} />
      <Route path='/data-science-and-data-analytics'  element={DataScienceAndDataAnalytics} />
      <Route path='/database-management'  element={DbManagement} />
      <Route path='/mobile-app-development'  element={MobileAppDevelopement} />
      <Route path='*' element={NotFound} />
     </Routes>
    </Router>
    
  );
}

export default App;
