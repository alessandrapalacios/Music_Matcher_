import { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:8000/login", { code })
      .then((response) => {

        // If success then cut the code string from the URL and execute the other thing
        // window.history.pushState({}, null, "/menu");

        console.log(response.data);
        setAccessToken(response.data.accessToken);

      })
      .catch(() => {
        //   If fail redirect to home page - Login page
        window.location = "/";
      });
  }, [code]);

  return accessToken
}