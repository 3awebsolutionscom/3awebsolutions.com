import Image from "next/image";
import CommonBtn from "../../buttons/commonBtn/CommonBtn";
import "./style.css";
import needs from "@/assets/images/deliver/needs.svg";
import strategy from "@/assets/images/deliver/strategy.svg";
import design from "@/assets/images/deliver/design.svg";
import collaboration from "@/assets/images/deliver/collaboration.svg";

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
          <div className="deliverBox">
            <h3>
              <span>1.</span> Understanding Your Needs
            </h3>

            <p>
              Our journey begins by getting to know you and your business. We'll
              delve into your goals, target audience, and brand identity through
              in-depth discussions and workshops.
            </p>
            <div className="dBoxImg flex alignCenter justifyEnd">
              <Image src={needs} alt="" />
            </div>
          </div>
          <div className="deliverBox">
            <h3>
              <span>2.</span> Collaborative Strategy
            </h3>
            <p>
              Based on your unique needs, we'll craft a customized website
              strategy. This roadmap outlines the functionalities, features, and
              content that will propel your online success.
            </p>
          </div>
          <div className="deliverBox">
            <h3>
              <span>3.</span> Design & User Experience
            </h3>
            <p>
              Our design team will translate your brand essence into stunning
              visuals. We prioritize user experience (UX) by creating an
              intuitive layout that guides visitors seamlessly towards your
              desired actions.
            </p>
          </div>
        </div>
        <div className="deliverBoxes flex alignCenter justifyCenter gap1 marginBottom2">
          <div className="deliverBox">
            <h3>
              <span>4.</span> Perfection Through Collaboration
            </h3>
            <p>
              We believe in an iterative development process. You'll be actively
              involved in every step, providing feedback on wireframes,
              prototypes, and design elements.
            </p>
          </div>
          <div className="deliverBox">
            <h3>
              <span>5.</span> Flawless Development & Security
            </h3>
            <p>
              Our skilled developers leverage the latest technologies to build a
              secure and scalable website that can adapt and grow with your
              business.
            </p>
          </div>
          <div className="deliverBox">
            <h3>
              <span>6.</span> Launch & Beyond
            </h3>
            <p>
              We don't just build websites, we launch successful online
              presences. We'll guide you through the website launch process and
              offer ongoing support to ensure your website continues to perform
              optimally.
            </p>
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
