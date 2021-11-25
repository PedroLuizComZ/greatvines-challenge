import { useEffect } from "react";
import Cookies from "js-cookie";
import "./App.css";
import { SALES_FORCE_LOGIN_URL } from "./constants";
import axios from "axios";

function App() {
  function handleClick() {
    window.location.href = SALES_FORCE_LOGIN_URL;
  }

  useEffect(() => {
    const url = new URL(window.location.href);

    console.log(url.hash.split("&"));

    if (url.hash) {
      const token = url.hash.split("&")[0].replace("#access_token=", "");
      Cookies.set("token", token);

      const instanceUrl = url.hash.split("&")[2].replace("instance_url=", "");
      Cookies.set("instanceUrl", instanceUrl);
    }
  }, []);

  function handleText() {
    axios
      .get(
        "https://bluelightco-dev-ed.my.salesforce.com/services/data/v53.0/query/?q=SELECT+name+from+Account",
        { headers: { Authorization: Cookies.get("token") || "" } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={handleClick}>
          Login
        </button>

        <button type="button" onClick={handleText}>
          getContacts
        </button>
      </header>
    </div>
  );
}

export default App;
