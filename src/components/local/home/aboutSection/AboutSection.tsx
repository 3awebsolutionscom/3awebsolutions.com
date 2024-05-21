import Image from "next/image";
import "./style.css";
import about from "@/assets/images/about2.jpg";
import CommonBtn from "../../buttons/commonBtn/CommonBtn";

const AboutSection = () => {
  return (
    <section className="aboutSection width95 maxWidth">
      <div className="aboutSContainer flex alignEnd justifyCenter ">
        <div className="aboutSLeft width60">
          <h2>
            <span>Get know us</span>
          </h2>
          <h3>
            3a Web Solutions - Where Learning Meets Innovation A Legacy of
            Learning, A Future of Growth
          </h3>
          <p>
            <span>3a Web Solutions</span> is the digital arm of 3a Learning
            Solutions India Pvt. Ltd., a leading provider of technical and
            behavioral training and consulting services in India. Established in
            August 2014, 3a Learning Solutions has empowered over 50,000
            professionals with the skills they need to thrive in today's dynamic
            business environment.
          </p>
          <p>
            At <span>3a Web Solutions</span>, we leverage the expertise and core
            values – quality, innovation, and excellence – that have made 3a
            Learning Solutions a leader in the training industry. We combine
            this legacy with a passion for digital innovation to offer
            comprehensive web design, development, and marketing solutions.
          </p>
          <p>
            We believe in building long-term partnerships with our clients. We
            offer ongoing support and consultation to ensure your website and
            digital presence remain effective in the ever-evolving online
            landscape.
          </p>
          <p>
            Ready to take your business online? Contact{" "}
            <span>3a Web Solutions</span> today and let us turn your vision into
            a reality.
          </p>
          <CommonBtn text="Know more about us" link="about" />
        </div>
        <div className="aboutSRight width40">
          <Image src={about} alt="About Section Image" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
