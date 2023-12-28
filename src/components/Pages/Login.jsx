import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                    <h1 className="musik_txt !text-4xl font-[600] pl-4 pt-3">
                       Musik <i class="fa-solid fa-headphones fa-phones"></i>
                    </h1>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img pl-5">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1 className="!font-[Montserrat] text-white uppercase font-[600]"> Music for everyone</h1>
                           
                            <Link to={"/home"} className="btn">
                                Start Listening
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;