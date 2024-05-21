import CommonBtn from "../../buttons/commonBtn/CommonBtn";
import "./style.css";
const MissionVision = () => {
  return (
    <section className="mVision width95 maxWidth">
      <div className="mvContainer flex alignStart justifyCenter gap4 marginBottom2">
        <div className="mvLeft width50">
          <h2>Our mission</h2>
          <p>
            At 3a Web Solutions, our mission is to empower businesses of all
            sizes by crafting innovative web solutions and data-driven digital
            marketing strategies. We believe a strong online presence is the
            cornerstone of success in today's digital landscape. We partner with
            our clients to understand their unique goals and aspirations, then
            leverage our expertise to build websites and digital strategies that
            not only captivate audiences but also drive measurable results.
          </p>
        </div>
        <div className="mvRight width50">
          <h2>Our vision</h2>
          <p>
            Our vision is to become the leading provider of integrated web
            development and digital marketing services. We strive to be
            recognized for our exceptional quality, delivered through a team of
            passionate and skilled professionals. We value strategic
            partnerships and believe in building long-term relationships with
            our clients, acting as their trusted advisor and digital growth
            partner.
          </p>
        </div>
      </div>
      <CommonBtn text="Know more about us" link="about" />
    </section>
  );
};

export default MissionVision;
