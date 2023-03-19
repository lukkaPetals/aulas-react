import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom"


function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <h1>React Router</h1>
      <Outlet/>
      <p>footer</p>
    </div>
  )
}

export default App;
