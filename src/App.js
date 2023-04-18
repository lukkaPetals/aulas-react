import './App.css';
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom"
import SayMyName from "./components/SayMyName"


function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <h1>React Router</h1>
      <Outlet/>
      <p>footer</p>
      <SayMyName name='Lucas'/>
    </div>
  )
}

export default App;
