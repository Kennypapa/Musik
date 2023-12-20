import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from "../assets/img/headphonesLogo.svg"

class Brand extends React.Component {
    render() {
        return (
            <div >
                <Link to={"/home"}>
                    <h1 className="musik_txt !text-2xl">
                       Musik <i class="fa-solid fa-headphones fa-phones"></i>
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Brand;