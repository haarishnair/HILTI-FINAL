import "../styles/NavbarTop.css";
import { GrNotification } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";

function NavbarTop() {
  return (
    <>
      <div className="navbar-top">
        <GrNotification className="navbar-top-icon" />
        <div className="div-post-a-job">
          <button className="btn-post-job">
            <AiOutlinePlus className="btn-icon" />
            Post a job
          </button>
        </div>
      </div>
    </>
  );
}

export default NavbarTop;