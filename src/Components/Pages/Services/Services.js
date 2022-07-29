import React from "react";
import servicesBanner from "../../../image/dr.magalhaes/services.banner.jpg";
import Service from "../../Service/Service";
import useHooks from "../../../Hooks/Hooks.js";

const Services = () => {
  const [services] = useHooks();
  return (
    <div style={{ backgroundColor: "#444e66", color: "white" }}>
      <div className="grid pb-3 xl:pl-20 xl:gap-5 xl:grid-cols-2 xl:pt-28">
        <div className="order-2">
          <h1 className="pl-2 mt-5 font-serif lh-sm">
            Comprehensive <br /> Dental Services
          </h1>
          <p className="pt-5 pl-2 lh-lg">
            A comprehensive care treatment plan After a dental professional
            performs the comprehensive care exam, they will make a treatment
            plan to address any oral issues. This allows you to understand
            exactly what is needed to get your oral health back to where it
            should be.
          </p>
          <button className="xl:px-5 xl:py-2.5 xl:mt-5 px-3 py-2 ml-2 bg-blue-500 text-white hover:bg-blue-800 rounded-3xl">
            Book Appointment
          </button>
        </div>
        <div className="order-1">
          <img
            style={{
              width: "100%",
              height: "400px",
              borderRadius: "50px",
            }}
            src={servicesBanner}
            alt=""
          />
        </div>
      </div>
      <hr />
      <div className="bg-slate-900">
        <div className="mx-auto shadow-xl w-80 xl:grid xl:w-3/4 xl:grid-cols-3 xl:gap-12 ">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
