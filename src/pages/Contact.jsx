import React from "react";
import Networks from "../components/Networks";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__top">
        <h2>Davlatov Muhriddin</h2>
        <h3>MERN STACK DEVELOPER</h3>
      </div>

      <div className="contact__center">
        <h3>muhriddind95@gmail.com</h3>
        <h3>+99899 108 65 25</h3>
      </div>
      <div className="contact__bottom">
        <Networks />
      </div>
    </section>
  );
}

export default Contact;
