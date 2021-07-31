import React from 'react';
import MetaTags from 'react-meta-tags';
import Helmet from "react-helmet"

const Meta = () => {
   return (
      <div>
          <Helmet>
                <MetaTags>
                <meta charset="UTF-8"> </meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"> </meta>
                </MetaTags>
                
                <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                  crossorigin="anonymous"
                />
                <title> Music Matcher </title>
            </Helmet>
      </div>
   );
};

export default Meta;