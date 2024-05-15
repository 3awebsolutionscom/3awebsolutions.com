import Image from "next/image";
import "./style.css";
import customDevelopment from "@/assets/images/customDevelopment.jpg";
import wordpressDevelopment from "@/assets/images/wordpressDevelopment.jpg";
import shopifyDevelopment from "@/assets/images/shopifyDevelopment.jpg";
import CommonBtn from "../../buttons/commonBtn/CommonBtn";
import { RiCodeSSlashFill } from "react-icons/ri";
const ServicesSection = () => {
  return (
    <section className="servicesSection width100 flex alignCenter justifyCenter">
      <div className="servicesSContainer width95 maxWidth">
        <h2>
          <span>Our Services</span>
        </h2>
        <div className="sTabs flex alignStart justifyCenter width100 gap2 marginBottom5">
          <div className="sTabLeft width50 ">
            <h3>
              Custom Web Development{" "}
              {/* <RiCodeSSlashFill className="serviceSecIcon" /> */}
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              laborum, incidunt nulla officiis id, perspiciatis ducimus
              repellendus laboriosam ex, soluta praesentium ullam explicabo
              dolore sint minus hic at mollitia odio quisquam tempora
              consequuntur amet quae! Odit veniam labore porro explicabo omnis
              distinctio modi suscipit ex. Vitae non ullam ab quos?
            </p>
            <CommonBtn text="Explore This More" link="services" />
          </div>
          <div className="sTabRight width50">
            <Image src={customDevelopment} alt="custom web development" />
          </div>
        </div>
        <div className="sTabsSwitch flex alignStart justifyCenter width100 gap2 marginBottom5">
          <div className="sTabSLeft width50">
            <Image src={wordpressDevelopment} alt="custom web development" />
          </div>
          <div className="sTabSRight width50">
            <h3>WordPress Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              laborum, incidunt nulla officiis id, perspiciatis ducimus
              repellendus laboriosam ex, soluta praesentium ullam explicabo
              dolore sint minus hic at mollitia odio quisquam tempora
              consequuntur amet quae! Odit veniam labore porro explicabo omnis
              distinctio modi suscipit ex. Vitae non ullam ab quos?
            </p>
            <CommonBtn text="Explore This More" link="services" />
          </div>
        </div>
        <div className="sTabs flex alignStart justifyCenter width100 gap2">
          <div className="sTabLeft width50 ">
            <h3>Shopify Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              laborum, incidunt nulla officiis id, perspiciatis ducimus
              repellendus laboriosam ex, soluta praesentium ullam explicabo
              dolore sint minus hic at mollitia odio quisquam tempora
              consequuntur amet quae! Odit veniam labore porro explicabo omnis
              distinctio modi suscipit ex. Vitae non ullam ab quos?
            </p>
            <CommonBtn text="Explore This More" link="services" />
          </div>
          <div className="sTabRight width50">
            <Image src={shopifyDevelopment} alt="custom web development" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
