import React, { useState } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import NavigationBar2 from "./NavigationBar2";
import CreatePlaylistUI from "./CreatePlaylistUI";
// import Menu from "./Menu"

var spotifyApi = new SpotifyWebApi({
    clientId: "8146cbaebc0541e392af9f928cd0220f",
    // clientSecret: "4c766eb8c95c46f68c4fcc640fa8c3ac",
    // redirectUri: "http://localhost:3000/create_playlist/",
  });



const CreatePlaylist = ({code}) => {
  const [user, setUser] = useState(null)
    // var user;
    const accessToken = useAuth(code);
    spotifyApi.setAccessToken(accessToken);
    // useEffect(() => {
    //   if (!accessToken) return;

    // spotifyApi.followUsers(['thelinmichael'])
    //     .then(function(data) {
    //       console.log(data);
    //     }, function(err) {
    //       console.log('Something went wrong!', err);
    //     });

    spotifyApi.getMe()
      .then(function(data) {
        console.log('Some information about the authenticated user', data.body);
        console.log(data.body.display_name);
        setUser(data.body.display_name);
        console.log(user);
      }, function(err) {
        console.log('Something went wrong!', err);
      });


    // spotifyApi.getFollowedArtists({ limit : 1 })
    //   .then(function(data) {
    //         // 'This user is following 1051 artists!'
    //       console.log('This user is following ', data.body.artists.total, ' artists!');
    //     }, function(err) {
    //       console.log('Something went wrong!', err);
    //     });
    //   // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again. 
    //   spotifyApi.setAccessToken(accessToken);
  
    //   // Get user details with help of getMe() function
    //   spotifyApi.getMe().then(data => {
    //     console.log(data);
    //     console.log("ahuevo");
    //   })
      
    //   spotifyApi.getFollowedArtists({ limit : 1 })
    //     .then(function(data) {
    //         // 'This user is following 1051 artists!'
    //       console.log('This user is following ', data.body.artists.total, ' artists!');
    //     }, function(err) {
    //       console.log('Something went wrong!', err);
    //     });

    //   spotifyApi.getMyDevices()
    //     .then(function(data) {
    //       let availableDevices = data.body.devices;
    //       console.log(availableDevices);
    //     }, function(err) {
    //       console.log('Something went wrong!', err);
    //     });
      
    // }, [accessToken]);
  
    return (
      <div>
          <NavigationBar2/>
          <br></br>
          <CreatePlaylistUI data={user}/>
          <h1> Datos: </h1>
          {code}        
      </div>
    );
};

export default CreatePlaylist;