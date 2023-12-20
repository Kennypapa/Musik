import React, {useContext} from 'react';
import '../assets/scss/FooterSelectMusic.scss';
import {Link} from "react-router-dom";

function FooterSelectMusic() {


    return (
        <div  className={"Footer_Select_Music"}>
            <p className='text-cente text-white font-[500] font-[Montserrat]'>
            NOW PLAY MY SONG! 🎶😊
            </p>
        </div>
    );
}

export default FooterSelectMusic;