import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID_portfolio";
  const userID = "user_D1YBS1PX5SdJnVuawiiWP";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID,
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible.",
        );
      })
      .catch((err) => console.error(`Something went wrong: ${err}`));
  };

  return (
    <div id="contactme" className="contacts">
      <div className="text-center">
        <h1>CONTACT ME</h1>
        <p>
          Please fill out the form and describe your project needs. I will
          contact you as soon as possible.
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", {
                      required: "Please enter your name",
                      max: {
                        value: 30,
                        message:
                          "Please enter a name with less than 30 characters"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone", {
                      required: "Please add your phone number"
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  name="phone"
                  {...register("email", {
                      required: "Please provide your email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalied Email"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject", {
                      required: "Please don't forget your subject"
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            {/* DECRIPTION */}
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please shortly describe your project..."
                  name="description"
                  {...register("description", {
                      required: "Please shortly describe your project needs"
                    })
                  }
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
