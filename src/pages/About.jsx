import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
      <h2 className="text-4xl text-center mb-10 max-sm:text-3xl text-accent-content">Імпортери та дистриб'ютори зоотоварів в Україні</h2>
      <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
        🐾 Ласкаво просимо до Ascon Zoo Trade — вашого провідника у світ корисних товарів для годування та догляду за домашніми улюбленцями!
        Ми пропонуємо високоякісні корма, консерви, іграшки та інструменти для грумінгу, ветеринарні препарати, зокрема вітаміни та протипаразитарні засоби і наповнювачі.
        Будемо раді співпраці!
      </p>
      <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">зв'язатись з нами</Link>
      </div>
    </div>
  );
};

export default About;
