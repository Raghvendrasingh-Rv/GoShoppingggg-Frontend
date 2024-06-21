import "./App.css";
import CustomNavbar from "./Components/CustomNavbar";
import Home from "./Components/Home";


import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import { ToastContainer} from "react-toastify";
import Dashboard from "./Components/Dashboard";
// import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
      <ToastContainer position= "top-center"/>
      <CustomNavbar></CustomNavbar>
      <Routes>
        <Route path='/' element={<Home title='First home' description='Fist description' button='First'></Home>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>

        {/* <Route path="/user" element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route> */}

      </Routes>
      </Router>
    </div>
  );
}

export default App;
