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
          <div className="sTabLeft width60 ">
            <h3>
              Custom Web Development{" "}
              {/* <RiCodeSSlashFill className="serviceSecIcon" /> */}
            </h3>
            <p>
              Custom web development is the process of creating a website from
              scratch, specifically designed to meet your unique business needs
              and goals. Unlike pre-made templates, custom development allows
              for complete control over every aspect of your website, from its
              design and functionality to the technology powering it. A custom
              website allows you to create a unique brand identity that sets you
              apart from your competitors.
            </p>
            <CommonBtn text="Explore This More" link="services" />
          </div>
          <div className="sTabRight width40">
            <Image src={customDevelopment} alt="custom web development" />
          </div>
        </div>
        <div className="sTabsSwitch flex alignStart justifyCenter width100 gap2 marginBottom5">
          <div className="sTabSLeft width40">
            <Image src={wordpressDevelopment} alt="custom web development" />
          </div>
          <div className="sTabSRight width60">
            <h3>WordPress Development</h3>
            <p>
              WordPress is a powerful content management system (CMS) used by
              millions of websites worldwide. While it offers a vast library of
              themes and plugins, there are times when you need more control and
              customization to truly stand out. That's where WordPress
              development comes in. Custom WordPress development allows you to
              leverage the user-friendly core of WordPress while building
              functionalities and features that perfectly align with your unique
              vision.
            </p>
            <CommonBtn text="Explore This More" link="services" />
          </div>
        </div>
        <div className="sTabs flex alignStart justifyCenter width100 gap2">
          <div className="sTabLeft width60 ">
            <h3>Shopify Development</h3>
            <p>
              Shopify is a leading e-commerce platform that empowers businesses
              of all sizes to launch and manage their online stores. While
              Shopify offers a wealth of themes and apps, for a truly customized
              and competitive online store, Shopify development takes your
              e-commerce presence to the next level.
            </p>
            <CommonBtn text="Explore This More" link="services" />
          </div>
          <div className="sTabRight width40">
            <Image src={shopifyDevelopment} alt="custom web development" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
