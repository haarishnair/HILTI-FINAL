import "./styles/App.css";
import Navbar from "./components/Navbar.tsx";
import NavbarTop from "./components/NavbarTop.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CV from "./components/CV-upload.tsx";
import Applicant from "./components/Applicant.tsx";

function App() {

  return (
    <>
      <Router>
        <div className="sidebar">
          <Navbar />
        </div> 
        <div className="page-contents">
          <NavbarTop />
        </div>        
        <Routes>
          <Route
            path="/" element={<CV />}/>     
          <Route
            path="/applicant" element={<Applicant />}/>            
          <Route
            path="*"
            element={<Navigate to="/" />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;