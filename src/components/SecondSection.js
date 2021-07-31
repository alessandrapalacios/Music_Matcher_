import React from 'react';

const SecondSection = () => {
   return (
    <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
        <div className="row align-items-md-stretch">
            <div className="col-md-6">
            <div className="h-100 p-5 bg-light  rounded-3">
                <h2>Create Collaborative Playlists</h2>
                <p> </p>
                <p> 1. Connect your streaming service </p>
                <p> 2. Select the Genre </p>
                <p> 3. Add the playlist to your app </p>
                <p></p>
                <button className="btn btn-outline-secondary" type="button">Try it</button>
            </div>
            </div>
            <div className="col-md-6">
            <div className="h-100 p-5 bg-light  rounded-3 videocrear">
                <img src="https://media.giphy.com/media/ZfiYf29HOVWT0ZnQLl/giphy.gif" alt=""/>
            </div>
            </div>
        </div>
        </div>
        <br></br>
        <br></br>
        <hr className="featurette-divider"></hr>
        
    </div>
   );
};

export default SecondSection;