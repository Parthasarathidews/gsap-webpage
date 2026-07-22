import React from "react";
import { openingHours } from "../../../constants";

const Contact = () => {
  return (
    <footer id="contact">
      <img
        id="f-right-leaf"
        src="./images/footer-right-leaf.png"
        alt="f-left-leaf"
      />
      <img
        id="f-left-leaf"
        src="./images/footer-left-leaf.png"
        alt="f-right-leaf"
      />
      <div className="content max-lg:min-h-auto">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => {
            return (
              <p key={time.day}>
                {time.day} {time.time}
              </p>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
