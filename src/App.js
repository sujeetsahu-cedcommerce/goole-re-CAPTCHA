import { useState } from "react";
import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";

// const SITE_KEY = "6LeRlHImAAAAAK2dOMAtwHbcSHb8CpxgzRLBBs4O";
const SECRET_KEY = "6LeRlHImAAAAAGHd8gFCTZRhJnDO2jdRGAGrC6qs";

function App() {
  // console.log("process.env.REACT_APP_SITE_KEY", process.env.REACT_APP_SITE_KEY);
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false);
  // const [token, setToken] = useState("");

  function onChange(value) {
    if (value) {
      setIsCaptchaSuccess(true);
    }
  }

  const expired = () => {
    // setToken("");
    setIsCaptchaSuccess(false);
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    alert("submit data");
    //No NEED OF API CALL
    // fetch("https://www.google.com/recaptcha/api/siteverify", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     secret: "6LeRlHImAAAAAGHd8gFCTZRhJnDO2jdRGAGrC6qs",
    //     response: token,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //     if (response.data.success) {
    //       alert("Human");
    //     } else {
    //       alert("Robot");
    //     }
    //   });
  };

  return (
    <div className="">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="input" />
        {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} /> */}
        <ReCAPTCHA
          sitekey="6LeRlHImAAAAAK2dOMAtwHbcSHb8CpxgzRLBBs4O"
          onChange={onChange}
          onExpired={expired}
        />
        <button
          disabled={!isCaptchaSuccessful}
          onClick={(e) => {
            onSubmitData(e);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
