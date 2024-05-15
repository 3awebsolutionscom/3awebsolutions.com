"use client";
import { useState } from "react";
import "./style.css";
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
              delivery === "Ultra Fast" ? `prjTab prjSelect` : `prjTab`
            }
            onClick={() => setDelivery("Ultra Fast")}
          >
            <h3>Ultra Fast</h3>
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
          <div className="deliverySTabs flex alignCenter justifyCenter gap2">
            <div className="deliverySTab width50">
              <h4>Blazing Speed</h4>
            </div>
            <div className="deliverySTab width50"></div>
          </div>
        )}
        {delivery === "Adapts to Any Device" && (
          <div className="deliverySTabs flex alignCenter justifyCenter gap2">
            <div className="deliverySTab width50">
              <h4>Adapts to Any Device</h4>
            </div>
            <div className="deliverySTab width50"></div>
          </div>
        )}
        {delivery === "Search Engine Friendly" && (
          <div className="deliverySTabs flex alignCenter justifyCenter gap2">
            <div className="deliverySTab width50">
              <h4>Search Engine Friendly</h4>
            </div>
            <div className="deliverySTab width50"></div>
          </div>
        )}
        {delivery === "Ultra Fast" && (
          <div className="deliverySTabs flex alignCenter justifyCenter gap2">
            <div className="deliverySTab width50">
              <h4>Ultra Fast</h4>
            </div>
            <div className="deliverySTab width50"></div>
          </div>
        )}
        {delivery === "Pixel-Perfect Design" && (
          <div className="deliverySTabs flex alignCenter justifyCenter gap2">
            <div className="deliverySTab width50">
              <h4>Pixel-Perfect Design</h4>
            </div>
            <div className="deliverySTab width50"></div>
          </div>
        )}
        {delivery === "Built with Security in Mind" && (
          <div className="deliverySTabs flex alignCenter justifyCenter gap2">
            <div className="deliverySTab width50">
              <h4>Built with Security in Mind</h4>
            </div>
            <div className="deliverySTab width50"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDelivery;
