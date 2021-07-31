const express = require('express')
const cors = require('cors')
const spotifyWebApi = require('spotify-web-api-node')

const app = express()
const port = 8000

app.use(cors()) 
app.use(express.json()); 

const credentials = {
  clientId: "8146cbaebc0541e392af9f928cd0220f",
  clientSecret: "4c766eb8c95c46f68c4fcc640fa8c3ac",
  // redirectUri: "http://localhost:3000/create_playlist/",
  redirectUri : "http://localhost:3000/menu/",
};

app.get('/', (req, res) => {
  console.log('Hello World!')
})

app.post('/login', (req,res) => {

    let spotifyApi = new spotifyWebApi(credentials)

    
    const code = req.body.code

    
    spotifyApi.authorizationCodeGrant(code).then((data) => {

         
        res.json({
            accessToken : data.body.access_token,
        }) 
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(400)
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})