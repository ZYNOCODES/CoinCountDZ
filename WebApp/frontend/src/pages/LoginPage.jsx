import { FaUserMd } from "react-icons/fa";
import { useState } from "react";
import AcceeButton from "../components/acceeButton";
import BackButton from "../components/backLoginbutton";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Login() {
  const [openPanel, setOpenPanel] = useState(false);
  let toggleClassCheck = openPanel ? " sign-in-mode" : "";
  const notify = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);
  const [alertError, setAlertError] = useState(false);
  const [loginemail, setloginEmail] = useState("");
  const [loginpassword, setloginpassword] = useState("");
  const [isloadingL, setIsLoadingL] = useState(null);
  const [errorL, setErrorL] = useState(null);

  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  async function submitLogin(e) {
    e.preventDefault();
    setIsLoadingL(true);
    const reponse = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ Email: loginemail, Password: loginpassword }),
    });

    const json = await reponse.json();

    if (!reponse.ok) {
      setIsLoadingL(false);
      notify(json.message);
    }
    if (reponse.ok) {
      notify(json.message);
      //save the user in local storage
      localStorage.setItem("user", JSON.stringify(json));
      //apdate the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoadingL(false);
      //redirect to home page
      navigate("/Dashboard");

    }
  }
  const [signinemail, setSigninEmail] = useState("");
  const [signinpassword, setSigninpassword] = useState("");
  const [resetpassword, setResetpassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Region, setRegion] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [isloading, setIsLoading] = useState(null);

  async function submitSignup(e) {
    e.preventDefault();
    setIsLoading(true);
    const reponse = await fetch("http://localhost:8000/user/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Email: signinemail,
        Password: signinpassword,
        FirstName: FirstName,
        LastName: LastName,
        Telephone: Telephone,
        Region: Region,
        Adresse: Adresse,
        ResetPassword: resetpassword
      }),
    });

    const json = await reponse.json();
    if (!reponse.ok) {
      setIsLoading(false);
      notify(json.message);
    }
    if (reponse.ok) {
      notify(json.message);
      //save the user in local storage
      localStorage.setItem("user", JSON.stringify(json));
      //apdate the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoadingL(false);
      //redirect to home page
      navigate("/Dashboard");
    }
  }
  return (
    <div className={`container${toggleClassCheck}`}>
      <div className="forms-container">
        <div className="login-signin">
          <form action="" className="login-in-form" onSubmit={submitLogin}>
            <h2 className="title-login">connexion</h2>
            <div className="input-field email">
              <label htmlFor="">email</label>
              <input type="text" placeholder="Enter your email.."
                onChange={(e) => {
                  setloginEmail(e.target.value);
                }} />
            </div>
            <div className="input-field password">
              <label htmlFor="">password</label>
              <input type="password" placeholder="Enter your password.." 
                onChange={(e) => {
                  setloginpassword(e.target.value);
                }}/>
              <div className="forget-class">
                <a>I forget my password</a>
              </div>
            </div>
            <input
              type="submit"
              value="connexion"
              className="cnx-btn btn-solid bg-blue-950"
            />
          </form>

          <form action="" className="sign-in-form">
            <div className="input-field">
              <label htmlFor="">First name</label>
              <input type="text" placeholder="Enter your name.." 
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}/>
            </div>
            <div className="input-field">
              <label htmlFor="">Last name</label>
              <input type="text" placeholder="Enter your first name.." 
                onChange={(e) => {
                  setLastName(e.target.value);
                }}/>
            </div>
            <div className="input-field">
              <label htmlFor="">email</label>
              <input type="text" placeholder="Enter your email.." 
                onChange={(e) => {
                  setSigninEmail(e.target.value);
                }}/>
            </div>
            <div className="input-field">
              <label htmlFor="">password</label>
              <input type="password" placeholder="Enter your password.." 
                onChange={(e) => {
                  setSigninpassword(e.target.value);
                }}/>
            </div>
            <div className="input-field">
              <label htmlFor="">Reset password</label>
              <input type="password" placeholder="Enter your password.." 
                onChange={(e) => {
                  setResetpassword(e.target.value);
                }}/>
            </div>
            <div className="input-field">
              <label htmlFor="">Telephone number</label>
              <input type="tel" placeholder="Enter your Telephone number.." 
                onChange={(e) => {
                  setTelephone(e.target.value);
                }}/>
            </div>
            <div className="input-field">
              <label htmlFor="">Region</label>
              <input type="tel" placeholder="Enter your Region.." 
                onChange={(e) => {
                  setRegion(e.target.value);
                }}/>
            </div>
            <button className="demande-accee2" onClick={submitSignup}>
              <a href="#">demande accee</a>
            </button>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <AcceeButton openPanel={openPanel} setOpenPanel={setOpenPanel} />
          </div>
          <div className="image-login">
            <div className="logo">
              <h2 className="text-6xl mr-8 mb-20">fittech.</h2>
            </div>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <a href="#">
              <div className="logo">
                <h2 className="text-6xl">fittech.</h2>
              </div>
            </a>
            <p>
              Your request will be checked by the administration, and after a
              few days we will inform you by e-mail and SMS
            </p>
            <BackButton openPanel={openPanel} setOpenPanel={setOpenPanel} />
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}
