import "./style.css";
import CommonBtn from "@/components/local/buttons/commonBtn/CommonBtn";
import wpDevelopment from "@/assets/images/wordpressDevelopment.jpg";
import Image from "next/image";
import LightBtn from "@/components/local/buttons/lightBtn/LightBtn";

const Services = () => {
  return (
    <>
      <section className="servicesHeader width95 maxWidth">
        <h1>Our Services</h1>
        <p>
          Empowering you to achieve your goals. Making a difference through
          exceptional service.
        </p>
        <CommonBtn text="Get In Touch With Us" link="contact" />
      </section>
      <section className="wpService width95 maxWidth luxuryGold flex alignCenter justifyCenter flexColumn">
        <div className="wpContainer flex alignCenter marginBottom1 justifyCenter gap2">
          <div className="wpServiceLeft width70">
            <h2>WordPress Website Development</h2>
            <p className="marginBottom1">
              Elevate your online presence with a custom WordPress website
              designed and developed by 3a Web Solutions. We specialize in
              transforming your vision into a user-friendly, visually stunning
              website that drives results.
            </p>
            <p>
              Our team of passionate WordPress developers are more than just
              coding experts. They're creative minds and strategic thinkers who
              take the time to understand your unique brand identity, target
              audience, and business goals.
            </p>
          </div>
          <div className="wpServiceRight width30">
            <Image src={wpDevelopment} alt="" />
          </div>
        </div>
        <div className="wpWhy">
          <h3>Why Choose 3a Web Solutions for Your WordPress Website?</h3>
          <div className="wpWhyTabs flex alignCenter justifyCenter gap1 marginBottom1">
            <div className="wpWhyTab">
              <h4>Experienced WordPress Developers</h4>
              <p>
                Our team of WordPress enthusiasts possesses in-depth knowledge
                and experience to create websites that are not only beautiful
                but also functional and secure.
              </p>
            </div>
            <div className="wpWhyTab">
              <h4>Focus on User Experience</h4>
              <p>
                We prioritize user experience, ensuring your website is
                intuitive and easy to navigate for your visitors, leading to
                increased engagement and conversions.
              </p>
            </div>
            <div className="wpWhyTab">
              <h4>Ongoing Support</h4>
              <p>
                We don't just build your website; we support you every step of
                the way. We offer ongoing maintenance and support packages to
                ensure your website stays up-to-date and secure.
              </p>
            </div>
          </div>
          <div className="wpWhyTabs flex alignCenter justifyStart gap1">
            <div className="wpWhyTab">
              <h4>Customization Tailored to You</h4>
              <p>
                We don't believe in cookie-cutter solutions. We work closely
                with you to understand your specific needs and goals, crafting a
                website that reflects your unique brand identity.
              </p>
            </div>
            <div className="wpWhyTab">
              <h4>Search Engine Optimization Friendly</h4>
              <p>
                We build websites with SEO best practices in mind, optimizing
                them for search engines to help you reach a wider audience
                organically.
              </p>
            </div>
            <div className="wpWhyTab" style={{ opacity: 0 }}>
              {/* <h4>Search Engine Optimization Friendly</h4>
              <p>
                We build websites with SEO best practices in mind, optimizing
                them for search engines to help you reach a wider audience
                organically.
              </p> */}
            </div>
          </div>
        </div>
        <h2>Ready to take your online presence to the next level?</h2>
        <p>
          Contact 3a Web Solutions today for a free consultation. Let's discuss
          your vision and build a WordPress website that drives success for your
          business.
        </p>
        <LightBtn text="Schedule a Free Consultation" link="contact" />
      </section>
    </>
  );
};

export default Services;
