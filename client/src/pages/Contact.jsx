import React, { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1>contact us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img
              src="/images/support.png"
              alt="contact_image"
              width="400"
              height="500"
            />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  id="username"
                  autoComplete="off"
                  required
                  value={contact.username}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  id="email"
                  autoComplete="off"
                  required
                  value={contact.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="message">message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your text here..."
                  cols="30"
                  rows="6"
                  autoComplete="off"
                  required
                  value={contact.message}
                  onChange={handleInput}
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2612045987144!2d73.91411937595731!3d18.562259067898072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sbd!4v1725611975365!5m2!1sen!2sbd"
            width="100%"
            height="450"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;
