import Clients from "@/components/local/home/clients/Clients";
import "./style.css";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className="contactHeader width95 maxWidth flex alignEnd spaceBtw">
        <div className="cHeaderLeft">
          <h1>Contact</h1>
          <p>Ready to Collaborate? Get in Touch Today.</p>
        </div>
        <div className="cHeaderRight flex alignCenter justifyCenter gap2">
          <Link href="">
            info<span>@</span>3awebsolutions.com
          </Link>
          <Link href="">
            contact<span>@</span>3awebsolutions.com
          </Link>
        </div>
      </section>
      <div className="contactContainer width95 maxWidth flex alignStart justifyCenter">
        <div className="contactLeft width50">
          <form>
            <h2>
              <span>Get In Touch Now</span>
            </h2>
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
        <div className="contactRight width50">
          <iframe
            height="837"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.083030519249!2d77.37250329999999!3d28.627273499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550adec536d%3A0xfc9a748d99d8bd07!2sITHUM%20TOWER%2C%20GALAXY%20BUSINESS%20PARK%2C%20Block%20A%2C%20Industrial%20Area%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1716271572486!5m2!1sen!2sin"
          />
          <div className="contactContent"></div>
        </div>
      </div>
      <Clients />
    </>
  );
};

export default Contact;
