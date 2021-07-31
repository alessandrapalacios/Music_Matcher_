import React, { useState } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import NavigationBar2 from "./NavigationBar2";
import avatar from "../imgs/avatar.png"  
import { CardGroup, Card, Button } from "react-bootstrap";
// import ListenTogetherUI from "./ListenTogetherUI";

var spotifyApi = new SpotifyWebApi({
    clientId: "8146cbaebc0541e392af9f928cd0220f",
    // clientSecret: "4c766eb8c95c46f68c4fcc640fa8c3ac",
    // redirectUri: "http://localhost:3000/create_playlist/",
  });

  
const ListenTogether = ({code}) => {
    // var user;
    var lista;
    const [canciones, setCanciones] = useState([]);
    const [user, setUser] = useState(null);
    const accessToken = useAuth(code);
    spotifyApi.setAccessToken(accessToken);
    const [song, setSong] = useState(''); 
    // var canciones = [];
    function Listen(cancion){
        spotifyApi.searchTracks(cancion)
        .then(function(data) {
            console.log(`Search by ${cancion}`, data.body);
            // console.log(data.body.tracks.items)
            lista = data.body.tracks.items.map(function(i){
                // console.log(i);
                return {
                    name: i.name,
                    id: i.id,
                    artist: i.artists[0].name,
                    artist_id: i.artists[0].id,
                    imagen: i.album.images[0].url
                }
            });
            console.log(lista);
            var can = []
            for (let i =0; i < lista.length; i+=2){
                console.log(lista[i].name);
                // console.log(i.name, "nombre");
                let clase = `listen_pic${i}`;
                console.log(clase);
                // canciones.push(<p> Comer </p>)
                can.push(<br></br>)
                can.push(<br></br>)
                can.push(
                    <CardGroup className = "songs">
                        <Card className="cancion" bg="dark" border="dark" style={{ width: '40%' }}>
                            <Card.Img variant="top"  style={{width: "80%"}} src={lista[i].imagen} />
                            <Card.Body>
                            <Card.Title style={{ fontSize: "25px"}}> {lista[i].name} </Card.Title>
                            <Card.Text style={{ fontSize: "20px" }}>
                            {lista[i].artist}
                            </Card.Text>
                            <Button className="btnstart2 btn btn-outline-secondary bg-light" variant="primary"> Play </Button>
                            </Card.Body>
                            <br></br>
                        </Card>
                        <Card border="dark" style={{ width: '40%' }}>
                            <Card.Img variant="top"  style={{width: "80%"}} src={lista[i+1].imagen} />
                            <Card.Body>
                            <Card.Title style={{ fontSize: "25px"}}> {lista[i+1].name} </Card.Title>
                            <Card.Text style={{ fontSize: "20px"}}>
                            {lista[i+1].artist}
                            </Card.Text>
                            <Button className="btnstart2 btn btn-outline-secondary bg-light" variant="primary"> Play </Button>
                            </Card.Body>
                            <br></br>
                        </Card>
                    </CardGroup>
                
                    // <div className="songs">
                    //     <div>
                    //         <img src={lista[i].imagen} style={{width: "10%",}}/>
                    //     </div>
                    //     <div className="datos_canciones">
                    //         <h3> {lista[i].name} </h3>
                    //         <p> {lista[i].artist} </p>
                    //     </div>
                    // </div>
                )
                
        
            }
            setCanciones(can);
            console.log(can);
            // return canciones;
        }, function(err) {
            console.error(err);
        });
        
    }

    spotifyApi.getMe()
      .then(function(data) {
        console.log('Some information about the authenticated user', data.body);
        console.log(data.body.display_name);
        setUser(data.body.display_name);
        // console.log(user);
      }, function(err) {
        console.log('Something went wrong!', err);
      });
  
      spotifyApi.authorizationCodeGrant(authorizationCode)
        .then(function(data) {
          spotifyApi.setAccessToken(data.body['access_token']);
          return spotifyApi.addTracksToPlaylist(
            '5ieJqeLJjjI8iJWaxeBLuK',
            [
              'spotify:track:4iV5W9uYEdYUVa79Axb7Rh',
              'spotify:track:1301WleyT98MSxVHPZCA6M'
            ],
            {
              position: 10
            }
          );
        })
        .then(function(data) {
          console.log('Added tracks to the playlist!');
        })
        .catch(function(err) {
          console.log('Something went wrong:', err.message);
        });
      spotifyApi.getMyRecentlyPlayedTracks({
        limit : 20
      }).then(function(data) {
          // Output items
          console.log("Your 20 most recently played tracks are:");
          data.body.items.forEach(item => console.log(item.track));
        }, function(err) {
          console.log('Something went wrong!', err);
        });
    //   spotifyApi.skipToPrevious()
    //     .then(function() {
    //         console.log('Skip to previous');
    //     }, function(err) {
    //         //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
    //         console.log('Something went wrong!', err);
    //     });

    return (
      <div >
          <NavigationBar2/>
          <br></br>
          <div className="listen_together">
            <div className="user">
                <img className="avatar" src={avatar}/>
                <br></br>
                <br></br>
                <p className=""> {user}  </p>
            </div>
            <div>
              <h1> Listen Music Together </h1>
            </div>
            <br></br>
            <div>
            <input
                type="text"
                id="header-search"
                placeholder="Search song"
                name="header-search"
                className="searchListen"
                onChange={event=> setSong(event.target.value)} 
            />
            </div>
            {/* {console.log(song)} */}
            {/* {console.log("aaaaah")} */}
            <button className="btnstart3 btn btn-outline-secondary bg-light" onClick={()=>Listen(song)}> Search </button>
            
            <br></br>
            <div>
                {canciones}
            </div>
            
            {/* <h1> Datos: </h1>       */}

          </div>
          
      </div>
    );  
};

export default ListenTogether;