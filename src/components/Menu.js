import React from 'react';
import create_collaborative_playlists from "../imgs/create_collaborative_playlists.png"
import listen_together from "../imgs/listen_together.png"
import host_party from "../imgs/host_party.png"
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import NavigationBar2 from './NavigationBar2';

const Menu = ({data}) => {
   return (
      <div className="menu">
          <NavigationBar2/>
         
          <div className="options">
          <motion.div
                    className="popup_menu"
                    initial={{ scale: 0 }}
                    animate={{ x: 0, rotate: 360, scale: 1.8 }}
                    transition={{
                    
                    type: "spring",
                    stiffness: 150,
                    damping: 40
                    }}
                >
                     <Link to="/create_playlist" >
                            <img src={create_collaborative_playlists} className="create_playlist_menu" alt="Create Playlist Option"/>
                    </Link>
            </motion.div>

            <motion.div
                    className="popup_menu"
                    initial={{ scale: 0 }}
                    animate={{ x: 0, rotate: 360, scale: 1.8 }}
                    transition={{
                    
                    type: "spring",
                    stiffness: 150,
                    damping: 40
                    }}
                >
                    <Link to="/listen_together" >
                            <img src={listen_together} className="listen_together_menu" alt="Listen Together Option"/>
                    </Link>
            </motion.div>

            <motion.div
                    className="popup_menu"
                    initial={{ scale: 0 }}
                    animate={{ x: 0, rotate: 360, scale: 1.2 }}
                    transition={{
                    
                    type: "spring",
                    stiffness: 150,
                    damping: 40
                    }}
                >
                     <Link to="/host_party" >
                            <img src={host_party} className="host_party_menu" alt="Host Online Party Option"/>
                    </Link>
            </motion.div>
    
          </div>
          
      </div>
   );
};

export default Menu;