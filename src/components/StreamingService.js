import React from "react";
import ReactDom from "react-dom";
import {motion} from "framer-motion";
import SpotifyLogo from "../imgs/Spotify.png"
import AppleLogo from "../imgs/AppleMusic.png"
import { Link } from 'react-router-dom';

const StreamingService = ({children, open, onClose}) => {
    if(!open) return null
    return ReactDom.createPortal (
        <>
        <div 
        style={{position: "fixed", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: "rgba(0, 0, 0, 0.7)", zIndex: 1000}}>   
        </div>
        <div className="popup" style={{borderradius:"10%", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "50px", backgroundColor: "#FFF", zIndex: 1000}}>
            <p > Which streaming service <br/> will you use? </p>
            <br/>
            <div className="streamingservices">
                <motion.div
                    className="popup_spotify"
                    initial={{ scale: 0 }}
                    animate={{ x: -100, rotate: 360, scale: 1.2 }}
                    transition={{
                    
                    type: "spring",
                    stiffness: 150,
                    damping: 40
                    }}
                >
                    <Link to="/login_spotify" >
                            <img src={SpotifyLogo} className="spotifylogo2" alt="Spotify Logo"/>
                    </Link>
                </motion.div>
                <motion.div
                    className="popup_apple"
                    initial={{ scale: 0 }}
                    animate={{ x: -100, rotate: 360, scale: 1.2 }}
                    transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 40
                    }}
                >
                    <Link to="/login_apple" >
                            <img src={AppleLogo} className="applelogo2" alt="Apple Logo"/>
                    </Link>
                </motion.div>
            </div>
            
            <br></br>
            
            <button onClick={onClose}> Close </button>
            <p className="note"> We are working on connecting the other streaming services  </p>
            {/* {children} */}
        </div>
        </>,
        document.getElementById("portal")
    );
};

export default StreamingService;