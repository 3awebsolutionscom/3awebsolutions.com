import CommonBtn from "../../buttons/commonBtn/CommonBtn";
import "./style.css";

const Hero = () => {
  return (
    <section className="hero width100 flex alignCenter justifyCenter ">
      <div className="heroContainer flex alignCenter spaceBtw width95 maxWidth ">
        <div className="heroLeft width50 flex alignStart justifyStart flexColumn">
          <h1>3a Web Solutions</h1>
          <span>Nothing To Something</span>
          <h2>Craft Your Digital Presence. Grow Your Brand.</h2>
          <p>
            We craft stunning websites, user-friendly interfaces, and
            <br />
            data-driven marketing strategies to propel your business forward.
          </p>
          <CommonBtn text="Start Your Project Today" link="contact" />
        </div>
        <div className="heroRight width50"></div>
      </div>
    </section>
  );
};

export default Hero;
