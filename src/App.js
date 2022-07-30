import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
    </Routes>
  );
}

export default App;
