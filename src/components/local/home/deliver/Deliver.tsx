import Image from "next/image";
import CommonBtn from "../../buttons/commonBtn/CommonBtn";
import "./style.css";
import needs from "@/assets/images/deliver/needs.svg";
import strategy from "@/assets/images/deliver/strategy.svg";
import design from "@/assets/images/deliver/design.svg";
import collaboration from "@/assets/images/deliver/collaboration.svg";
import security from "@/assets/images/deliver/security.svg";
import launch from "@/assets/images/deliver/launch.svg";

const Deliver = () => {
  return (
    <section className="deliver width95 maxWidth flex alignCenter justifyCenter flexColumn">
      <h2>
        <span>Our proven process</span>
      </h2>
      <p>
        At 3a Web Solutions, we believe in a collaborative and transparent
        approach to website development. Here's how we transform your vision
        into a website that thrives:
      </p>
      <div className="deliverContainer">
        <div className="deliverBoxes flex alignCenter justifyCenter gap1 marginBottom1">
          <div className="deliverBox flex alignStart spaceBtw flexColumn">
            <h3>
              <span>1.</span> Understanding Your Needs
            </h3>

            <p>Our journey begins by getting to know you and your business.</p>
            <div className="dBoxImg flex alignCenter justifyEnd width100">
              <Image src={needs} alt="" />
            </div>
          </div>
          <div className="deliverBox flex alignStart spaceBtw flexColumn">
            <h3>
              <span>2.</span> Collaborative Strategy
            </h3>
            <p>
              Based on your unique needs, we'll craft a customized website
              strategy.
            </p>
            <div className="dBoxImg flex alignCenter justifyEnd width100">
              <Image src={strategy} alt="" />
            </div>
          </div>
          <div className="deliverBox flex alignStart spaceBtw flexColumn">
            <h3>
              <span>3.</span> Design & User Experience
            </h3>
            <p>
              Our design team will translate your brand essence into stunning
              visuals.
            </p>
            <div className="dBoxImg flex alignCenter justifyEnd width100">
              <Image src={design} alt="" />
            </div>
          </div>
        </div>
        <div className="deliverBoxes flex alignCenter justifyCenter gap1 marginBottom2">
          <div className="deliverBox flex alignStart spaceBtw flexColumn">
            <h3>
              <span>4.</span> Perfection Through Collaboration
            </h3>
            <p>
              We believe in an iterative development process. You'll be actively
              involved in every step.
            </p>
            <div className="dBoxImg flex alignCenter justifyEnd width100">
              <Image src={collaboration} alt="" />
            </div>
          </div>
          <div className="deliverBox flex alignStart spaceBtw flexColumn">
            <h3>
              <span>5.</span> Flawless Development & Security
            </h3>
            <p>
              Our developers uses the latest technologies to build a secure and
              scalable website.
            </p>
            <div className="dBoxImg flex alignCenter justifyEnd width100">
              <Image src={security} alt="" />
            </div>
          </div>
          <div className="deliverBox flex alignStart spaceBtw flexColumn">
            <h3>
              <span>6.</span> Launch & Beyond
            </h3>
            <p>
              We don't just build websites, we launch successful online
              presences.
            </p>
            <div className="dBoxImg flex alignCenter justifyEnd width100">
              <Image src={launch} alt="" />
            </div>
          </div>
        </div>
      </div>
      <p>
        This is just the beginning. At 3a Web Solutions, we're committed to
        building long-term partnerships. We'll continue to work alongside you,
        providing strategic guidance and ongoing maintenance to optimize your
        website and keep it running smoothly.
      </p>
      <CommonBtn text="Start Your Project Today" link="contact" />
    </section>
  );
};

export default Deliver;
