import Pizza from './Pizza/Pizza';
import './App.css';
import Beef from './Beef/Beef';
import Chicken from './Chicken/Chicken';
import Salad from './Salad/Salad';
import Fish from './Fish/Fish';
import Navbar from './Navbar/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Footer/Footer';






function App() {
  return (
    <>

    <Navbar/>

    <Routes>

      <Route  path='home' element={<Home/>} />
      <Route  path='Pizza' element={<Pizza/>} />
      <Route  path='Beef' element={<Beef/>} />
      <Route  path='Chicken' element={<Chicken/>} />
      <Route  path='Fish' element={<Fish/>} />
      <Route  path='Salad' element={<Salad/>} />

    </Routes>

    

  
    <Footer/>
    
    </>
  );
}

export default App;
