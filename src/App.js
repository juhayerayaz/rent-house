import { Routes, Route } from "react-router-dom";
import BookProperty from "./Pages/Home/BookProperty";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Navbar from "./Pages/Navbar/Navbar";
import NotFound from "./Pages/Notfound/NotFound";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/property/:propertyId' element={<BookProperty></BookProperty>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
