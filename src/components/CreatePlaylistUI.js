import React from 'react';

const CreatePlaylistUI = ({data}) => {
   return (
      <div className="createplaylist_UI">
          <div>
            <h2> {data} </h2>
          </div>
          <div>
            <h1> Create Playlist </h1>
          </div>
          <div>
            <input
                type="text"
                id="header-search"
                placeholder="Search song"
                name="header-search" 
            />
          </div>
         
      </div>
   );
};

export default CreatePlaylistUI;