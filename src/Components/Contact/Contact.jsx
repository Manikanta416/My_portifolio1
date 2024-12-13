import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0c2183e1-b69e-416a-9407-35a93fa0e5fa");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        icon: "success",
        title: "Hooray! 🎉 Your message is on its way 🚀",
        text: "I'm just getting started! Can't wait to connect with you. Hang tight!",
        confirmButtonText: "Can't Wait! 👏"
      });
      event.target.reset();
    }
    
     else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        confirmButtonText: "Retry"
      });
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am excited about the opportunity to bring my skills and passion to innovative projects. Challenges like these inspire me to learn, grow, and make meaningful contributions.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              📧<p> manikanta2096@gmail.com</p>
            </div>
            <div className="contact-detail">
              📞<p> +91 9121928288</p>
            </div>
            <div className="contact-detail">
              📍<p> Bhimavaram, AP, India, 534206</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" required />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" required />
          <label htmlFor="">Write your message</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
