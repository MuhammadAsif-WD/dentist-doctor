import React from "react";
import dr_magalhaes from "../../../image/dr.magalhaes/dr magalhaes.jpg";
import phone from "../../../image/others/phone.png";
import program from "../../../image/certificate/program.jpg";
import location from "../../../image/others/loctaion.png";
import mail from "../../../image/others/mail.png";
import homeDefalut from "../../../image/dr.magalhaes/home-banner.png";
import certificate from "../../../image/certificate/certificate.jpg";
import certificate1 from "../../../image/certificate/certificate2.jpg";
import certificate2 from "../../../image/certificate/certificate3.jpg";
import banner from "../../../image/dr.magalhaes/banner/Untitled design/1.png";
import banner1 from "../../../image/dr.magalhaes/banner/Untitled design/2.png";
import banner2 from "../../../image/dr.magalhaes/banner/Untitled design/3.png";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <main className="text-white bg-slate-800">
      <div
        className="pt-2 pb-2 pl-10 pr-10 text-4xl text-slate-900 align-center"
        style={{ backgroundColor: "#444e66", color: "white" }}
      >
        <h3>---About Me</h3>
        <h1>Dr. Victor Magalhaes</h1>
      </div>
      <div className="mx-auto ">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="mx-auto d-block w-50"
              src={banner}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="mx-auto d-block w-50"
              src={banner1}
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="mx-auto d-block w-50"
              src={banner2}
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <hr />
      <hr />
      <hr />
      <div className="grid gap-16 mt-20 font-serif shadow-2xl xl:grid-cols-2 xl:mt-28">
        <div className="">
          <h1 className="pb-5 pl-3 pr-10 text-2xl text-blue-300 xl:pl-10">
            ---D.D.S., P.A.
          </h1>
          <h1 className="pl-3 pr-10 xl:pl-10 xl:text-6xl">Victor Magalhaes</h1>
          <p className="pl-3 pr-10 mt-8 text-blue-300 xl:pl-10">
            We accept most major PPO Insurance Providers. For more insurance
            options please call our office.
          </p>
          <p className="pl-3 pr-10 mt-8 text-xs xl:text-lg xl:pl-10">
            There are many businessmen who like mostly vinyl as there
            promotional tool, not only because it is the latest trend in
            advertising, maybe because vinyl is very durable, versatile, and
            easy to work with. Because it’s durable, vinyl banners can be
            mounted, attached, or hung in several different ways.
          </p>
          <ul className="pl-2 text-xs xl:pl-10 xl:text-lg">
            <li>☑ Gastroenteritis means inflammation of stomach control.</li>
            <li>
              ☑ Genital warts are bad. If they form in a bunch on your genitals.
            </li>
            <li>☑ Conventional hearing aids.</li>
            <li>
              ☑ The complications of LASIK surgery can include the following:
              dry eyes.
            </li>
            <li>☑ Gastroenteritis means inflammation of stomach control.</li>
            <li>☑ Gastroenteritis means inflammation of stomach.</li>
          </ul>
          <button className="px-5 py-3 mt-4 ml-12 text-white bg-blue-400 rounded-pill hover:bg-blue-300">
            Book Appoint
          </button>
        </div>
        <div className="">
          <img className="h-3/4" src={dr_magalhaes} alt="" />
        </div>
      </div>
      <div className="bg-slate-600 xl:flex xl:rounded-b-full xl:w-full xl:h-56 hover:text-white text-slate-300 hover:bg-slate-700">
        <div className="font-mono xl:gap-16 xl:flex">
          <div className="gap-3 p-5 xl:pl-32 xl:flex">
            <div>
              <img
                style={{ width: "50px", height: "50px" }}
                src={phone}
                alt=""
              />
            </div>
            <div className="me-5">
              <h4>Call my Chamber</h4>
              <p>(394) 288-2168</p>
            </div>
            <div>
              <img
                style={{ width: "50px", height: "50px" }}
                src={location}
                alt=""
              />
            </div>
            <div className="me-5">
              <h4>Chamber Location</h4>
              <p>1234 Divi St. #100 San francisco, CA</p>
            </div>
            <div>
              <img
                style={{ width: "50px", height: "50px" }}
                src={mail}
                alt=""
              />
            </div>
            <div>
              <h4>Email US</h4>
              <p>hello@asif.com</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-center gap-3 mt-5 text-center text-blue-500 font-series align-center">
            <div className="w-32 h-1 mt-3 border-4 border-blue-500"></div>
            <h1 className="text-lg font-normal xl:text-2xl ">
              Insurance Policies
            </h1>
            <div className="w-32 h-1 mt-3 border-4 border-blue-500"></div>
          </div>
        </div>
        <div>
          <h1 className="p-5 text-center">Awards & Certifications</h1>
          <img className="w-2/3 mx-auto" src={program} alt="" />
        </div>
        <div>
          <h1 className="pt-3 font-serif text-lg font-normal text-center text-orange-700 xl:text-6xl">
            Aesthetic Dentistry Award 2017
          </h1>
          <p className="w-1/2 mx-auto text-center text-muted">
            The Aesthetic Dentistry Awards 2017 is one of the most prestigious
            is occasions in the dental calendar. There are many businessmen who
            like mostly vinyl as there promotional tool.
          </p>
        </div>
      </div>
      <div className="container">
        <hr />
        <div className="xl:gap-4 gap-y-5 xl:flex">
          <img
            style={{ width: "350px", height: "250px" }}
            src={certificate}
            alt=""
          />
          <img
            style={{ width: "350px", height: "250px" }}
            src={certificate1}
            alt=""
          />
          <img
            style={{ width: "350px", height: "250px" }}
            src={certificate2}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-3 p-12 mt-32 xl:grid-cols-3">
        <div className="p-4 border-4 shadow-lg border-slate-400 rounded-3xl">
          <h1>Latest Techniques</h1>
          <p>
            Technological advances are making an impact on virtually every
            industry, dentistry included. With the latest technology,
            maxillofacial surgeons can provide their patients with high-quality,
            personalized services and more comfortable procedures and
            appliances.
          </p>
        </div>
        <div className="pt-4 pl-4 border-4 shadow-lg border-slate-400 rounded-3xl">
          <h2>Innovative Technology</h2>
          <div>
            <h4>Advanced Digital Imaging </h4>
            <p>
              For years, dentists have had to rely exclusively on X-rays to take
              a read of a patient’s mouth. While these diagnostic tools are
              hugely valuable in their own right, they’re certainly not
              foolproof—and they may have trouble spotting certain oral issues.
            </p>
          </div>
        </div>
        <div className="p-4 border-4 shadow-lg border-slate-400 rounded-3xl">
          <h1>Certified Experts</h1>
          <p>
            About 10% of dentists registered with CDSBC are certified
            specialists. This means they have completed a dental specialty
            training program as well as the National Dental Specialty
            Examination NDSE or its equivalent. These individuals have an
            advanced level of training and education in their area of
            specialized interest.
          </p>
        </div>
      </div>
      <div className="grid pl-2 mt-20 xl:pl-12 xl:grid-cols-2">
        <div>
          <h1 className="font-serif text-xl xl:text-6xl text-slate-300 lh-sm">
            Your Dentist Knows Best
          </h1>
          <div className="pt-5 text-slate-400">
            <h1 className="font-serif text-xl xl:text-4xl text-slate-300">
              Don’t rush when you brush!
            </h1>
            <p>
              Set aside time in the morning and evening to brush, floss and use
              mouthwash. It will only take a few minutes but will greatly
              benefit your oral care. Be sure to take time when brushing your
              teeth.
            </p>
            <h1 className="font-serif text-xl xl:text-4xl text-slate-300">
              Visit your dentist once in 6 months
            </h1>
            <p>
              Regular dental checkups are essential for maintaining healthy
              teeth and gums. The American Dental Association recommends a visit
              to the dentist at least once a year, but making an appointment
              once in six months prevents a host of oral related problems..
            </p>
            <h1 className="font-serif text-xl xl:text-4xl text-slate-300">
              Don’t Forget to Floss!
            </h1>
            <p>
              The dentist told me, “Brush your teeth, and don’t forget to
              floss.” I promised I would do it and told him, “You’re the boss!”
              When I got home, I brushed my teeth, then found the perfect
              stance. I swung my hips and swept my arms as I began to dance.
            </p>
          </div>
        </div>
        <img className="homeDefault" src={homeDefalut} alt="" />
      </div>
    </main>
  );
};

export default Home;
