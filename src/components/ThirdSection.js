import React, {useState} from 'react';
import { Button } from "react-bootstrap"
import StreamingService from "./StreamingService"

const ThirdSection = () => {
  const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="container py-4">
         <div className="position-relative overflow-hidden p-6 m-md-1 text-center bg-light">
              <div className="seccion3 col-md-10  p-lg-4 mx-auto my-4">
                <h1 className=" display-4 fw-normal">Host your Online Party</h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <div className="col">
                    <div className="card1 seccionfiesta card shadow-sm">
          
                      <div className="card-body">
                        <p className="card-text"> Connect your music </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <img src="https://www.nicepng.com/png/full/186-1866673_music-streaming-royalties-pt-music-streaming-logo-png.png" alt=""/>
                          </div>
                          <small className="text-muted">  </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="seccionfiesta card2 card shadow-sm">
                  
                      <div className="card-body">
                        <p className="card-text"> Listen together </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <img src="http://static.nautil.us/5867_fc9e62695def29ccdb9eb3fed5b4c8c8.jpg" alt=""/>
                          </div>
                          <small className="text-muted">  </small>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div className="col">
                    <div className="card3 seccionfiesta card shadow-sm">
                      <div className="card-body">
                        <p className="card-text"> Videocall with favorite music in the background</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <img src="https://image.freepik.com/free-vector/friends-chatting-through-video-call_23-2148507309.jpg" alt=""/>
                          </div>
                          <small className="text-muted">  </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={()=> {
                      setIsOpen(true);
                      console.log("click")
                  }}
                  className="btntry btn btn-outline-secondary bg-light"  
                  style={{backgroundcolor: "red",color: "gray", fontSize: "20px", padding: "1% 5%", margin: "2%"}}> 
                      Try it   
                </Button>
                {/* <a className=" btnstart btn btn-outline-secondary" href="Haha">Try it</a> */}
              </div>
              <div className="product-device shadow-sm d-none d-md-block"></div>
              <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
            <br></br>
            <StreamingService open={isOpen} onClose={()=>setIsOpen(false)}>
                    {/* Hello */}
            </StreamingService>
      </div>
   );
};

export default ThirdSection;