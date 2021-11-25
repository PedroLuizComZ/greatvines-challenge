import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  let navigate = useNavigate();

  function handleClick() {
    window.location.href = String(process.env.REACT_APP_SALES_FORCE_LOGIN_URL);
  }

  useEffect(() => {
    const url = new URL(window.location.href);

    if (url.hash) {
      const token = url.hash.split("&")[0].replace("#access_token=", "");
      Cookies.set("token", decodeURI(String(token)));

      const instanceUrl = url.hash.split("&")[2].replace("instance_url=", "");
      Cookies.set("instanceUrl", decodeURIComponent(instanceUrl));

      navigate('/home')
    }
  }, [navigate]);

 

  return (
    <div className="App">
      <main className="App-main">
        <h1>GreatVines</h1>
        <button type="button" onClick={handleClick}>
          Login
        </button>
      </main>
    </div>
  );
}

export default Login;
