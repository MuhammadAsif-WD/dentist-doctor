import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../firebase.init";

const Login = () => {
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [signInWithEmail, user, hookError] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailToLogin = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePasswordToLogin = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 6 characters!" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();

    console.log(userInfo);

    signInWithEmail(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  useEffect(() => {
    const error = hookError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [hookError]);
  if (user?.id) {
    return (
      <div className="p-48 text-center">
        <Spinner
          style={{ width: "50px", height: "50px", padding: "50px" }}
          animation="border"
          variant="warning"
        />
      </div>
    );
  }
  const resetPassword = async () => {
    const email = userInfo.email.event.target.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };
  return (
    <div
      className="pt-5 xl:p-5"
      style={{
        background: " #0f172a",
        shadow: `5px 5px 10px #060911
      -5px -5px 10px #182543`,
      }}
    >
      <div className="p-2 border-4 shadow-lg xl:w-1/2 xl:p-5 xl:pt-5 xl:mx-auto rounded-3xl ">
        <h1 className="text-center text-white underline xl:mb-5 xl:text-6xl text-serif">
          Please Login
        </h1>
        <form onSubmit={loginHandler}>
          <div>
            <div className="xl:pt-3">
              <label className="pb-1 pl-2 text-2xl text-white" htmlFor="Email">
                Email
              </label>
              <input
                onBlur={handleEmailToLogin}
                className="w-full p-2 text-xl border-4 rounded-lg"
                type="text"
                name="email"
                id=""
                placeholder="Email"
                required
              />
            </div>
            {errors?.email && <p className="text-danger">{errors.email}</p>}
            <div className="pt-3">
              <label
                className="pb-1 pl-2 text-2xl text-white"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                onBlur={handlePasswordToLogin}
                className="w-full p-2 text-xl border-4 rounded-lg"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                required
              />
            </div>
            {setErrors && <p className="text-danger">{errors.password}</p>}

            <div className="mt-3 text-white xl:gap-1 xl:flex">
              <div>
                <p>Not Registered yet?</p>
              </div>
              <Link to="/register" className="no-underline">
                Create an Account
              </Link>
            </div>
            {hookError && <p className="text-danger">{hookError.message}</p>}
            <Link className="no-underline" to="">
              <p className="text-danger" onClick={resetPassword}>
                Forget Password?
              </p>
            </Link>
            <div>
              <input
                className="w-full p-2 mt-4 text-xl rounded xl:p-3"
                type="submit"
                value="Sign in"
                style={{
                  marginTop: "30px",
                  color: "white",
                  backgroundColor: "#444e66",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  fontSize: "24px",
                }}
                size="lg"
              />
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
