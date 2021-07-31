import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Button from "react-bootstrap/Button"
import Meta from './Meta';
import NavigationBar from './NavigationBar';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import Login_Spotify from "./Login_Spotify";
// import StreamingService from "./StreamingService"
// import Dashboard from './Dashboard';
import CreatePlaylist from './CreatePlaylist';
import Menu from "./Menu"
import ListenTogether from "./ListenTogether"

const App = () => {
   const code = new URLSearchParams(window.location.search).get('code')
   return (
      <BrowserRouter>
            {/* <Login/> */}
            <Route exact path="/">
               <Meta/>
               <NavigationBar/>
               <FirstSection/>
               <SecondSection/>
               <ThirdSection/>
            </Route>

            
            {/* <Route exact path="/streaming_service" component={StreamingService} /> */}
            <Route exact path="/login_spotify" component={Login_Spotify} >
               
            </Route>

            <Route exact path="/menu" component={Menu} />

            <Route exact path="/create_playlist" component={Login_Spotify} >
               <CreatePlaylist code={code} />
               {/* {code ? <CreatePlaylist code={code} /> : <Login_Spotify />} */}
            </Route>

 
            <Route exact path="/listen_together" component={ListenTogether} >
               <ListenTogether code={code} />
            </Route> 


            {/* <Route exact path="/listen_together" component={ListenTogether} >
               {code ? <ListenTogether code={code} /> : <Login_Spotify />}
            </Route> */}
            
            {/* <Route exact path="/create_playlist" component={CreatePlaylist code={code}}>
            </Route> */}
            {/* <Route path="/create_playlist">
               <CreatePlaylist code={code}/> */}
               {/* {console.log(code, "a")}
               {code ? <CreatePlaylist code={code}/> : null} */}
               {/* {code ? <CreatePlaylist code={code}/> : <Login_Spotify/>} */}
            {/* </Route> */}
            {/* <Route exact path="/cuerpo" component={Cuerpo} /> */}
            
      </BrowserRouter>
   );
};

export default App