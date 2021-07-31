import React from 'react';


const ListenTogetherUI = ({data}) => {

   return (
      <div className="listentogether_UI">
          {/* <div>
            <h2> {data} </h2>
          </div>
          <div>
            <h1> Listen Music Together </h1>
          </div>
          <div>
            <input
                type="text"
                id="header-search"
                placeholder="Search song"
                name="header-search"
                onChange={event=> setSong(event.target.value)} 
            />
          </div>
          
         {/* <button onClick={<FindSong find_song={song} code={code}/>}> Play </button> */}
         {/* <button onClick={()=>Listen()}> Play </button> */}
         {/* <button > Play </button> */}
         {/* {console.log(song)} */} 
      </div>
   );
};

export default ListenTogetherUI;