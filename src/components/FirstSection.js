import SpotifyLogo from "../imgs/Spotify.png"
import AppleLogo from "../imgs/AppleMusic.png"
import AmazonLogo from "../imgs/AmazonMusic.png"
import PandoraLogo from "../imgs/Pandora.png"
import YoutubeLogo from "../imgs/YoutubeMusic.png"
import Jumbotron from "react-bootstrap/Jumbotron"
import React, {useState} from 'react';
//import Login from "./Login_Spotify"
import { Button } from "react-bootstrap"
// import { Link } from 'react-router-dom';
import StreamingService from "./StreamingService"

const FirstSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="container py-4">
        <Jumbotron className="primeradiv position-relative overflow-hidden  p-5 m-md-1 text-center bg-light">
            <div className="col-md-8  p-lg-4 mx-auto my-4 ">
            <h1 className="display-4 fw-normal">Connect through Music</h1>
            <p className="lead fw-normal">The streaming service doesn't matter</p>
            <div className="music_apps"> 
                <img src={AppleLogo} className="applelogo" alt="Apple-Music Logo"/>
                <img src={SpotifyLogo} className="spotifylogo" alt="Spotify Logo"/>
                <img src={AmazonLogo} className="amazonlogo" alt="Amazon Music Logo"/>
                <img src={YoutubeLogo} className="youtubelogo" alt="Youtube Music Logo"/>
                <img src={PandoraLogo} className="pandoralogo" alt="Pandora Logo"/>
                
            </div>
            <Button 
            onClick={()=> {
                setIsOpen(true);
                console.log("click")
            }}
            className="btnstart btn btn-outline-secondary bg-light"  
            style={{backgroundcolor: "red",color: "gray", fontSize: "20px", padding: "1% 5%",}}> 
                Start   
            </Button>

            
            {/* <Link to="/streaming_service" className="btnstart btn btn-outline-secondary" 
                style={{fontSize: "20px", padding: "1% 5%" , }} 
                >
                    Start
            </Link> */}
            {/* <a className="btnstart btn btn-outline-secondary" 
                style={{fontSize: "20px", padding: "1% 5%" , }} 
                href={<Login/>} >
                    Start
            </a> */}
            </div>
        </Jumbotron>
        <br></br>
        <br></br>
        <StreamingService open={isOpen} onClose={()=>setIsOpen(false)}>
                {/* Hello */}
        </StreamingService>
        <hr className="featurette-divider"></hr>
    </div>
   );
};

export default FirstSection;