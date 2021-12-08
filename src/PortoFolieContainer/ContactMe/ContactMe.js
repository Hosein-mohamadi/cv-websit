import React, { useRef } from "react";
import "./ContectMe.css";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v48zch8",
        "template_0s2lsn8",
        e.target,
        "user_v8UQRiOqWyr6KICcmdDyV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      className="main-container fade-in"
      id="ContactMe"
      style={{ opacity: 5, transform: "translateY(1px)" }}
    >
      <div className="heading-container">
        <div className="screen-heading">
          <span>Contact Me</span>
        </div>
        <div className="screen-sub-heading">
          <span>Lets Keep In Touch</span>
        </div>
        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <p className="styles_typicalWrapper__1_Uvh">Get In Touch 📧</p>
          </h2>
          <a href="https://t.me/hosein_mohamadi_1400">
            <i className="fa fa-telegram"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="https://www.instagram.com/18__hosein">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/hosein-mohammadi-076237214">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div class="img-back">
            <h4>Send Your Email Here!</h4>
            <img
              src="	https://edubaba.herokuapp.com/static/media/mailz.d13d5e32.jpeg"
              alt="image_not_found"
            />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <p></p>
            <label for="">Name</label>
            <input type="text" name="name" />
            <label for="">Email</label>
            <input type="email" name="email" />
            <label for="">Message</label>
            <textarea type="text" name="message"></textarea>
            <div className="send-btn">
              <button type="submit">
                send<i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
