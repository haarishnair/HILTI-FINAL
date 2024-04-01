import '../styles/Applicant.css'
import { MdStar } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

function Applicant(){

    return(
        <>
            <h1>Applicant Details</h1>
            <br></br>
            <div className='body'>
                <div className="profile">
                    <div className="main">
                        <div className="details">
                            <h2>Name</h2>
                            <h3>Job Title</h3>
                            <p><span className='star'><MdStar /></span> 5.0</p>
                        </div>
                    </div>
                    <br></br><br></br>
                    <div className='buttons'>
                        <button>Schedule Interview</button>
                        <button><BiMessageAltDetail /></button>
                    </div>
                    <div className="contact">
                        <br></br>
                        <hr></hr>
                        <h2>Contact</h2>
                        <div className='contacts'>
                            <AiOutlineMail />
                            <div className='content'>
                                <h3>Email</h3>
                                <p>email address here...</p>
                            </div>
                        </div>
                        <div className='contacts'>
                            <BsPhone />
                            <div className='content'>
                                <h3>Phone Number</h3>
                                <p>phone number here...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='description'>
                    
                </div>
            </div>
        </>
    )
}

export default Applicant;