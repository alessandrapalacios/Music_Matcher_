
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";

var spotifyApi = new SpotifyWebApi({
    clientId: "8146cbaebc0541e392af9f928cd0220f",
  });

const FindSong = ({code, find_song}) => {
    const accessToken = useAuth(code);
    spotifyApi.setAccessToken(accessToken);

    spotifyApi.searchTracks(find_song)
        .then(function(data) {
            console.log(`Search by ${find_song}`, data.body);
        }, function(err) {
            console.error(err);
        });
        
   return (
    <div className="">
        {find_song}
    </div>
   );
};

export default FindSong;