import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../../image/social/facebook.png";
import twitter from "../../../image/social/twitter.png";
import google from "../../../image/social/search.png";
import instagram from "../../../image/social/instagram.png";
import linkedin from "../../../image/social/linkedin.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="pt-10 footer-style" variant="dark">
      <footer className="font-serif ">
        <h1 className="text-2xl text-center text-white ">
          Dr. Victor Magalhaes
        </h1>
        <p></p>
        <div className="justify-center w-2/3 pb-2 mx-auto xl:pl-48 xl:gap-8 xl:flex">
          <div>
            <h4 className="pt-3 text-lg text-white ">Clique Studios</h4>
            <Link
              className="text-sm text-orange-500 no-underline hover:text-white"
              to="/"
            >
              WORK
            </Link>
            <br />
            <Link
              className="text-sm text-orange-500 no-underline hover:text-white"
              to="/"
            >
              UNIVERSITY
            </Link>
            <br />
            <Link
              className="text-sm text-orange-500 no-underline hover:text-white"
              to="/"
            >
              CAREERS
            </Link>
          </div>
          <div>
            <h4 className="pt-3 text-lg text-white ">LOCATION</h4>
            <Link
              className="text-sm text-orange-500 no-underline hover:text-white"
              to="/"
            >
              CHICAGO
            </Link>
            <br />
            <Link
              className="text-sm text-orange-500 no-underline hover:text-white"
              to="/"
            >
              DENVER
            </Link>
            <br />
            <Link
              className="text-sm text-orange-500 no-underline hover:text-white"
              to="/"
            >
              DHAKA
            </Link>
          </div>
          <div>
            <h4 className="pt-3 text-lg text-white ">Talk to a real person</h4>
            <Link
              className="text-sm text-orange-500 no-underline hover:text-white"
              to="/"
            >
              312-379-9329
            </Link>
            <br />
            <Link
              className="text-sm text-orange-500 no-underline hover:text-white"
              to="/"
            >
              BUILDSOMETHING @CLIQUESTUDIOS.COM
            </Link>
            <br />
            <Link
              className="text-sm text-orange-500 no-underline hover:text-white"
              to="/"
            >
              DHAKA
            </Link>
          </div>
        </div>
        <h4 className="pt-2 text-center text-white">Follow Along</h4>

        <div className="flex justify-center w-full gap-3 pt-4 mx-auto">
          <img
            style={{ width: "20px", height: "20px" }}
            src={facebook}
            alt=""
          />
          <img style={{ width: "20px", height: "20px" }} src={twitter} alt="" />
          <img style={{ width: "20px", height: "20px" }} src={google} alt="" />
          <img
            style={{ width: "20px", height: "20px" }}
            src={instagram}
            alt=""
          />
          <img
            style={{ width: "20px", height: "20px" }}
            src={linkedin}
            alt=""
          />
        </div>
        <div className="justify-center w-full mt-2 text-center text-white">
          <span>
            <small>
              Create by Muhammad Asif copy right &copy; <em id="date"></em>2022
            </small>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
