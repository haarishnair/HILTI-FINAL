import "../styles/Navbar.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdSchedule } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import hiltilogo from "../assets/Hilti-Logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    
      <nav className="navbar">
        <div className="nav-logo-div">
          <img src={hiltilogo} className="brand-logo" />
        </div>
        <ul className="nav-menu">
          <li>
            <BiHomeAlt2 className="navbar-icon" />
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <BiMessageAltDetail className="navbar-icon" />
            Messages
          </li>
          <li>
            <IoPeopleOutline className="navbar-icon" />
            All Applicants
          </li>
          <li>
            <HiOutlineClipboardList className="navbar-icon" />
            <Link to="/applicant">Job Listing</Link>
          </li>
          <li>
            <MdSchedule className="navbar-icon" />
            My Schedule
          </li>
        </ul>
        <hr className="navbar-line" />
        <div className="settings">
          <p className="navbar-settings-title">SETTINGS</p>
          <ul className="nav-menu">
            <li>
              <FiSettings className="navbar-icon" />
              Settings
            </li>
            <li>
              <BiHelpCircle className="navbar-icon" />
              Help Center
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;