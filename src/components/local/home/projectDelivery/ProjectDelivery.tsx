"use client";
import { useState } from "react";
import "./style.css";
import seo from "@/assets/images/seo.jpg";
import webspeed from "@/assets/images/webspeed.jpg";
import responsive from "@/assets/images/responsive.jpg";
import design from "@/assets/images/design.jpg";
import security from "@/assets/images/security.jpg";
import Image from "next/image";
const ProjectDelivery = () => {
  const [delivery, setDelivery] = useState("Blazing Speed");
  return (
    <section className="projectDelivery width95 maxWidth">
      <div className="projectDContainer width100">
        <h2>We Deliver</h2>
        <div className="prjTabs  flex alignCenter spaceBtw">
          <div
            className={
              delivery === "Blazing Speed" ? `prjTab prjSelect` : `prjTab`
            }
            onClick={() => setDelivery("Blazing Speed")}
          >
            <h3>Blazing Speed</h3>
          </div>
          <div
            className={
              delivery === "Adapts to Any Device"
                ? `prjTab prjSelect`
                : `prjTab`
            }
            onClick={() => setDelivery("Adapts to Any Device")}
          >
            <h3>Adapts to Any Device</h3>
          </div>
          <div
            className={
              delivery === "Search Engine Friendly"
                ? `prjTab prjSelect`
                : `prjTab`
            }
            onClick={() => setDelivery("Search Engine Friendly")}
          >
            <h3>Search Engine Friendly</h3>
          </div>

          <div
            className={
              delivery === "Pixel-Perfect Design"
                ? `prjTab prjSelect`
                : `prjTab`
            }
            onClick={() => setDelivery("Pixel-Perfect Design")}
          >
            <h3>Pixel-Perfect Design</h3>
          </div>
          <div
            className={
              delivery === "Built with Security in Mind"
                ? `prjTab prjSelect`
                : `prjTab`
            }
            onClick={() => setDelivery("Built with Security in Mind")}
          >
            <h3>Built with Security in Mind</h3>
          </div>
        </div>
        {delivery === "Blazing Speed" && (
          <div className="deliverySTabs flex alignStart justifyCenter gap2">
            <div className="deliverySTab width50">
              <h4>Blazing Speed</h4>
              <p>
                In today's fast-paced world, patience is a luxury your visitors
                can't afford. That's why we prioritize website speed. Our
                websites load lightning fast, keeping your audience engaged and
                ensuring they don't click away in frustration. A speedy website
                not only improves user experience but also translates to better
                search engine rankings.
              </p>
            </div>
            <div className="deliverySTab width50">
              <Image src={webspeed} alt="Blazing Speed" />
            </div>
          </div>
        )}
        {delivery === "Adapts to Any Device" && (
          <div className="deliverySTabs flex alignStart justifyCenter gap2">
            <div className="deliverySTab width50">
              <h4>Adapts to Any Device</h4>
              <p>
                The way people access the internet is constantly evolving. Your
                website shouldn't be left behind. Our websites are fully
                responsive, meaning they seamlessly adjust to any device,
                whether it's a desktop computer, a tablet, or a smartphone. This
                ensures every visitor has a smooth and enjoyable experience,
                regardless of how they choose to browse.
              </p>
            </div>
            <div className="deliverySTab width50">
              <Image src={responsive} alt="Responsive Design" />
            </div>
          </div>
        )}
        {delivery === "Search Engine Friendly" && (
          <div className="deliverySTabs flex alignStart justifyCenter gap2">
            <div className="deliverySTab width50">
              <h4>Search Engine Friendly</h4>
              <p>
                Getting found online is crucial for success. We optimize your
                website to be easily discovered by potential customers searching
                for products or services like yours. By strategically
                incorporating relevant keywords and crafting clear, informative
                content, we help your website climb the search engine rankings
                and attract more qualified leads.
              </p>
            </div>
            <div className="deliverySTab width50">
              <Image src={seo} alt="Search Engine Optimization" />
            </div>
          </div>
        )}

        {delivery === "Pixel-Perfect Design" && (
          <div className="deliverySTabs flex alignStart justifyCenter gap2">
            <div className="deliverySTab width50">
              <h4>Pixel-Perfect Design</h4>
              <p>
                Your website is your online storefront, and first impressions
                matter. Our design team creates visually stunning websites that
                are tailored to your brand identity. We meticulously craft every
                element, from layout and typography to imagery and color
                schemes, to deliver a pixel-perfect experience that resonates
                with your target audience.
              </p>
            </div>
            <div className="deliverySTab width50">
              <Image src={design} alt="Pixel-Perfect Design" />
            </div>
          </div>
        )}
        {delivery === "Built with Security in Mind" && (
          <div className="deliverySTabs flex alignStart justifyCenter gap2">
            <div className="deliverySTab width50">
              <h4>Built with Security in Mind</h4>
              <p>
                The safety of your website and your visitors' data is paramount.
                We take website security seriously, implementing
                industry-leading security measures to protect against online
                threats. This ensures peace of mind for you and fosters trust
                with your visitors.
              </p>
            </div>
            <div className="deliverySTab width50">
              <Image src={security} alt="Built with Security in Mind" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDelivery;
