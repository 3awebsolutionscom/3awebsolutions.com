import "./style.css";
const ContactSection = () => {
  return (
    <section className="contactSection width95 maxWidth">
      <div className="cSContainer flex alignCenter justifyCenter">
        <div className="csLeft width50">
          <h2>
            <span>Contact us</span>
          </h2>
          <form className="flex alignStart justifyCenter flexColumn">
            <h4>Full Name</h4>
            <input type="text" placeholder="ex. Joseph John" />
            <h4>Email</h4>
            <input type="email" placeholder="ex. hello@3awebsolutions.com" />
            <h4>Phone Number</h4>
            <input type="tel" placeholder="Your contact" />
            <h4>Country</h4>
            <input type="text" placeholder="ex. India" />
            <h4>State</h4>
            <input type="text" placeholder="ex. Delhi" />
            <h4>Any Message</h4>
            <textarea placeholder="Write your message here..." rows={5} />
            <button type="submit">Contact Now</button>
          </form>
        </div>
        <div className="csRight width50"></div>
      </div>
    </section>
  );
};
export default ContactSection;
