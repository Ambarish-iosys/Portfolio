import React,{useRef,useState} from "react";
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = ({ title, subtitle, desc }) => {
  const [response,setResponse] = useState(false);
  const form = useRef();
  const sendMail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_c9xbzxe','template_h7074hz', form.current, 'user_GkGCOhTXE6ptoKZvh9n9F')
    .then((result) => {
        console.log(result.text);
        setResponse(true);
    }, (error) => {
        console.log(error.text);
        setResponse(false);
    });
    e.target.reset();
  }

  return (
    <div className="one__col">
      <h3 className="sub-title">{subtitle}</h3>
      <h3 className="title">{title}</h3>
      <p className="desc">{desc}</p>

      <div className="form-container">
        <form className="contact-form" ref={form} onSubmit={sendMail} name="Hire me">
          <div className="input-groups">
            <div className="input-item half">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  className="input"
                  autoComplete="off"
                  required
                  placeholder="Name*"
                />
              </div>
            </div>
            <div className="input-item half">
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  className="input"
                  autoComplete="off"
                  required
                  placeholder="Email*"
                />
              </div>
            </div>
            <div className="input-item">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="subject"
                  className="input"
                  autoComplete="off"
                  required
                  placeholder="Subject*"
                />
              </div>
            </div>
            <div className="input-item">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="phone"
                  className="input"
                  autoComplete="off"
                  placeholder="Phone"
                  maxLength="10"
                />
              </div>
            </div>
            <div className="input-item">
              <div className="input-wrapper">
                <textarea
                  type="textarea"
                  name="message"
                  className="input"
                  autoComplete="off"
                  placeholder="Message"
                />
              </div>
            </div>
            <div className="input-item">
              <div className="input-wrapper">
                <button
                  className="input"
                  id="Send Message"
                  title="Send Message"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
        {response && (
          <div className="response">
            <spna>Mail sent successfully</spna>
          </div>
        )}
        <div className="contact-info" data-aos="fade-right" data-aos-duration="800">
            <div className="info-box">
                <p>Address</p>
                <h3>Kalaburagi, Karnataka</h3>
            </div>
            <div className="info-box">
                <p>Phone</p>
                <h3>+91 7406374886</h3>
            </div>
            <div className="info-box">
                <p><a  className="fn__link" href="mailto:ambrishnpatil86@gmail.com" title="ambrishnpatil86@gmail.com">ambrishnpatil86@gmail.com</a></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
