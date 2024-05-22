import "./style.css";
import CommonBtn from "@/components/local/buttons/commonBtn/CommonBtn";
import wpDevelopment from "@/assets/images/wordpressDevelopment.jpg";
import customDevelopment from "@/assets/images/customDevelopment.jpg";
import shopifyImage from "@/assets/images/shopifyDevelopment.jpg";
import Image from "next/image";
import LightBtn from "@/components/local/buttons/lightBtn/LightBtn";
import DarkBtn from "@/components/local/buttons/darkBtn/DarkBtn";

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
      <section className="customService width95 maxWidth flex alignCenter justifyCenter flexColumn">
        <div className="customContainer flex alignCenter justifyCenter gap2">
          <div className="customLeft width30">
            <Image src={customDevelopment} alt="" />
          </div>
          <div className="customRight width70">
            <h2>Custom Website Development</h2>
            <p className="marginBottom1">
              At 3a Web Solutions, we believe your website should be as unique
              and powerful as your vision. We're not interested in
              one-size-fits-all solutions. Instead, we offer a comprehensive
              range of custom website development services, utilizing
              cutting-edge technologies like React.js, Next.js, MERN Stack, and
              more, to create a website that perfectly aligns with your specific
              needs and goals.
            </p>
            <p>
              Whether you're a startup seeking a dynamic platform for your
              innovative idea or an established business aiming for a complete
              digital transformation, we have the expertise to bring your vision
              to life.
            </p>
          </div>
        </div>
        <div className="customTech width100">
          <h2>Custom Development Tech Stack</h2>
          <div className="customTechTabs flex alignCenter justifyCenter gap1 width100 marginBottom1">
            <div className="customTechTab">
              <p>React.js</p>
            </div>
            <div className="customTechTab">
              <p>Next.js</p>
            </div>
            <div className="customTechTab">
              <p>MERN Stack</p>
            </div>
            <div className="customTechTab">
              <p>HTML5 & CSS3</p>
            </div>
            <div className="customTechTab">
              <p>JavaScript</p>
            </div>
            <div className="customTechTab">
              <p>TypeScript</p>
            </div>
          </div>
          <div className="customTechTabs flex alignCenter justifyCenter gap1 width100 marginBottom1">
            <div className="customTechTab">
              <p>Node.js</p>
            </div>
            <div className="customTechTab">
              <p>Express.js</p>
            </div>
            <div className="customTechTab">
              <p>Hono</p>
            </div>
            <div className="customTechTab">
              <p>MongoDB</p>
            </div>
            <div className="customTechTab">
              <p>PosgreSQL</p>
            </div>
            <div className="customTechTab">
              <p>Redis</p>
            </div>
          </div>
          <div className="customTechTabs flex alignCenter justifyCenter gap1 width100">
            <div className="customTechTab">
              <p>MySQL</p>
            </div>
            <div className="customTechTab">
              <p>AWS</p>
            </div>
            <div className="customTechTab">
              <p>cPanel</p>
            </div>
            <div className="customTechTab">
              <p>Vercel</p>
            </div>
            <div className="customTechTab">
              <p>Render</p>
            </div>
            <div className="customTechTab">
              <p>Netlify</p>
            </div>
          </div>
        </div>
        <h2>Ready to build a website that sets you apart?</h2>
        <p>
          Contact 3a Web Solutions today for a free consultation. Let's discuss
          your unique requirements and collaboratively craft a custom website
          that not only reflects your brand but also fuels your online success.
        </p>
        <DarkBtn text="Schedule a Free Consultation" link="contact" />
      </section>
      <section className="ecomService width95 maxWidth flex alignCenter justifyCenter flexColumn">
        <div className="ecomSContainer width100 flex alignCenter justifyCenter gap2">
          <div className="ecomLeft width70">
            <h2>Shopify Store Development</h2>
            <p className="marginBottom1">
              In today's competitive online marketplace, your Shopify store
              needs to be more than just functional; it needs to be an engaging
              and seamless shopping experience that converts visitors into loyal
              customers. At 3a Web Solutions, we specialize in custom Shopify
              development services designed to unlock the full potential of your
              online store.
            </p>
            <p>
              Shopify offers a robust platform, but sometimes, a pre-made theme
              just won't cut it. That's where our custom development expertise
              comes in.
            </p>
          </div>
          <div className="ecomRight width30">
            <Image src={shopifyImage} alt="" />
          </div>
        </div>
        <div className="ecomC2 width100">
          <h3>
            We work closely with you to understand your unique business needs
            and develop solutions that:
          </h3>
          <div className="ecomTabs flex alignCenter justifyCenter gap1">
            <div className="ecomTab">
              <h4>Enhance Functionality</h4>
              <p>
                Go beyond the basic features of Shopify. We can develop custom
                functionalities to streamline your e-commerce operations, such
                as advanced product filters, personalized product
                recommendations, or seamless integrations with your existing
                inventory management system.
              </p>
            </div>

            <div className="ecomTab">
              <h4>Boost Conversion Rates</h4>
              <p>
                Our focus is on driving sales. We can optimize your store's
                checkout process, implement strategic product placement, and
                integrate conversion-boosting features to maximize your online
                revenue.
              </p>
            </div>
            <div className="ecomTab">
              <h4>Seamless Integration with Third-Party Tools</h4>
              <p>
                Connect your Shopify store with the tools you already use. We
                can integrate your store with marketing automation platforms,
                payment gateways, shipping providers, or any other application
                that enhances your e-commerce operations.
              </p>
            </div>
          </div>
        </div>
        <h2>Ready to take your Shopify store to the next level?</h2>
        <p>
          Let's discuss your vision and collaborate to create a custom Shopify
          store that not only looks stunning but also drives significant sales
          for your business.
        </p>
        <LightBtn text="Schedule a Free Consultation" link="Contact" />
      </section>
    </>
  );
};

export default Services;
