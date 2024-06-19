import "./App.css";
import CustomNavbar from "./Components/CustomNavbar";
import Home from "./Components/Home";


import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <Router>
      <CustomNavbar></CustomNavbar>
      <Routes>
        <Route path='/home' element={<Home title='First home' description='Fist description' button='First'></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
