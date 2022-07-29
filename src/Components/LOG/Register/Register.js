import React, { useState, useEffect } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import google from "../../../image/social/search.png";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [showPass, setShowPass] = useState(false);

  const [createUserWithEmailAndPassword, user, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailBlur = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }

    // setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
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

  const handleConfirmPasswordBlur = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(userInfo);
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
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
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
  const [signInWithGoogle, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  if (googleError) {
    return (
      <div>
        <p>Error: {googleError.message}</p>
      </div>
    );
  }
  if (googleLoading) {
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

  if (googleError) {
    return (
      <div>
        <p>Error: {googleError.message}</p>
      </div>
    );
  }
  return (
    <div className="xl:p-5 xl:pt-5 bg-slate-900">
      <div className="border-4 shadow-2xl xl:w-1/2 xl:p-5 xl:pt-5 xl:mx-auto rounded-3xl ">
        <h1 className="text-center text-white underline xl:mb-5 xl:text-6xl text-serif">
          Please Register
        </h1>
        <form onSubmit={handleRegistration}>
          <div>
            <div className="p-1 xl:pt-3">
              <label className="pb-1 pl-2 text-2xl text-white" htmlFor="Name">
                Name
              </label>
              <input
                className="w-full p-2 text-xl border-4 rounded-lg"
                type="text"
                name="Name"
                id=""
                placeholder="Name"
                required
              />
            </div>
            <div className="p-1 xl:pt-3">
              <label className="pb-1 pl-2 text-2xl text-white" htmlFor="Email">
                Email
              </label>
              <input
                onBlur={handleEmailBlur}
                className="w-full p-2 text-xl border-4 rounded-lg"
                type="text"
                name="email"
                id=""
                placeholder="Email"
                required
              />
              <div className="pt-3">
                <label
                  className="pb-1 pl-2 text-2xl text-white"
                  htmlFor="Address"
                >
                  Address
                </label>
                <input
                  className="w-full p-2 text-xl border-4 rounded-lg"
                  type="text"
                  name="Address"
                  id=""
                  placeholder="Address"
                  required
                />
              </div>
            </div>
            <div className="p-1 xl:pt-3">
              <label
                className="pb-1 pl-2 text-2xl text-white"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className="w-full p-2 text-xl border-4 rounded-lg"
                type={showPass ? "text" : "password"}
                placeholder="password"
                required
                onBlur={handlePasswordBlur}
              />
              {errors?.password && (
                <p className="error-message">{errors.password}</p>
              )}
              <p
                className="absolute top-3 right-5"
                onClick={() => setShowPass(!showPass)}
              ></p>
            </div>
            <div className="p-1 xl:pt-3">
              <label
                className="pb-1 pl-2 text-2xl text-white"
                htmlFor=" Confirm Password"
              >
                Confirm Password
              </label>
              <input
                onBlur={handleConfirmPasswordBlur}
                className="w-full p-2 text-xl border-4 rounded-lg"
                type="password"
                name="Password"
                id=""
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="p-1 xl:pt-3">
              <div className="flex justify-between pt-3 pb-3 text-white">
                <div>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="I agree to the Terms And Conditions"
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="flex gap-1 mt-3 text-white">
                <div>
                  <p>Already have an Account?</p>
                </div>
                <Link to="/login" className="no-underline">
                  Login
                </Link>
              </div>
            </div>
            <div>
              <input
                className="w-full p-3 rounded xl:mt-4 xl:text-xl"
                type="submit"
                value="Register"
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
        <div className="flex gap-3 pt-4 text-center text-white align-items-center ">
          <div className="w-64 h-1 border-4"></div>
          <div>or</div>
          <div className="w-64 h-1 border-4"></div>
        </div>

        <div>
          <Button
            className="w-full"
            variant
            style={{
              marginTop: "30px",
              color: "white",
              backgroundColor: "#444e66",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              fontSize: "24px",
            }}
            size="lg"
          >
            <div className="flex justify-center align-items-center">
              <div>
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={google}
                  alt=""
                />{" "}
              </div>

              <div
                onClick={() => signInWithGoogle()}
                className="text-xs xl:text-xl ps-2"
              >
                Sign in with Google
              </div>
            </div>
          </Button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
