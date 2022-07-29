import React from "react";
import simple from "../../../image/about me/simple picture.jpg";

const About = () => {
  return (
    <div className="text-white bg-slate-600">
      <h1 className="text-center xl:p-5 xl:text-6xl">About ME </h1>

      <div className="text-center">
        <h1>My Name Is Asif</h1>
        <h3>Iam Student of class 10 in ssc batch 2022</h3>
      </div>
      <div>
        <img className="mx-auto xl:w-1/2" src={simple} alt="" />
      </div>
      <div className="p-2 mx-auto mt-3 border-4 rounded xl:p-5 xl:w-1/2">
        <h1>Goal</h1>
        <p>
          There will be only one goal in my life, there is still one, there will
          be one in the future too Inshallah that is a full stack web developer.
          Also from a young age I wanted to be a full fledged web developer.
          Never expected that I would make this dream come true. But for a
          teacher like Jhangkar's brother, maybe today my dream is going to be
          fulfilled. At the end of the day, I will say that the only goal of my
          life is to learn to develop in the right way and to go along with my
          dream of a good job in the future. Everyone will pray for me. Thank
          you all.
        </p>
      </div>
    </div>
  );
};

export default About;
