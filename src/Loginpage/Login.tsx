import React from "react";
import "../App.css";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { MdOutlineFacebook, MdOutlinePassword } from "react-icons/md";
import { SiFacebook } from "react-icons/si";

function Login() {
  return (
    <form className="container">
      <h1>login</h1>
      <div className="input">
        <p>username</p>
        <span>
          <AiOutlineUserAdd />
        </span>
        <input type="text" placeholder="type your username" />
      </div>
      <div className="input">
        <p>Password</p>
        <span>
          <MdOutlinePassword />
        </span>
        <input type="password" placeholder="Type your Password" />
      </div>
      <a href="blank" className="text">
        Forget password?
      </a>
      <input type="submit" value="login" className="btn" />
      <div className="text-conatiner">
        <span>Or sign up using</span>
      </div>
      <div className="icon">
        <a href="blank">
          <MdOutlineFacebook />
        </a>
        <a href="blank">
          <AiFillTwitterCircle />
        </a>
        <a href="blank">
          <AiFillGoogleCircle />
        </a>
      </div>
      <div className="text-conatiner2">
        <span>Or sign up using</span>
      </div>
      <div className="text2">
        <a href="blank">sign up</a>
      </div>
    </form>
  );
}

export default Login;
