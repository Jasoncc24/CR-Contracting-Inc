import React, { useState, useEffect, useRef } from "react";

//emailjs
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [emailMessage, setEmailMessage] = useState("");
  const [emailTextColor, setEmailTextColor] = useState("");

  const form = useRef();

  //clear message
  useEffect(() => {
    //timer
    const timer = setTimeout(() => {
      setEmailMessage("");
    }, 3500);
    //clear the timer
    return () => clearTimeout(timer);
  }, [emailMessage]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aphq7je",
        "template_dba2t0m",
        form.current,
        "c7Gzc9h0HwGcWdvxE"
      )
      .then(
        (result) => {
          setEmailMessage("your email was sent :)");
          setEmailTextColor("green");
        },
        (error) => {
          setEmailMessage("your email was not sent :(");
          setEmailTextColor("red");
        }
      );
    e.target.reset();
  };

  return (
    <section
      className="section-sm lg:pt-[200px] bg-abstract bg-no-repeat bg-cover"
      id="contact"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]"
          data-aos="zoom"
          data-aos-offset="400"
        >
          {/* text */}
          <div
            className="flex-1 flex flex-col justify-center pl-8"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-offset="500"
          >
            <h2 className="h2 mb-3 lg:mb-7">
              Get in Touch With Us for a free Estimate
            </h2>
            <p className="mb-7 lg:mb-0">
              Feel Free to Contact Us for a Free Cost Estimate Or With Any
              Question You May Have.
            </p>
          </div>
          {/* form */}
          <form
            onSubmit={(e) => sendEmail(e)}
            ref={form}
            className="flex-1 bg-white shadow-xl rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="500"
          >
            <input
              className="form-control"
              placeholder="First Name"
              type="text"
              name="user_firstname"
              required
            />
            <input
              className="form-control"
              placeholder="Last Name"
              type="text"
              name="user_lastname"
              required
            />
            <input
              className="form-control"
              placeholder="Email Address"
              type="text"
              name="user_email"
              required
            />
            <textarea
              className="form-control py-5 h-[165px] resize-none"
              placeholder="Message"
              name="user_message"
            ></textarea>
            <button className="btn btn-lg btn-orange" type="submit">
              Send Message
            </button>
            <p style={{ color: emailTextColor }}>{emailMessage}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
