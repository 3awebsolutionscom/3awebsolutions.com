"use client";
import React, { useState } from "react";
import "./style.css";
import DarkBtn from "../../buttons/darkBtn/DarkBtn";
const Require = () => {
  const [reqValue, setReqValue] = useState("Falling Behind on Design Trends");
  return (
    <section className="require width95 maxWidth">
      <h2>How do you know if your web design needs an update?</h2>
      <div className="requireContent flex alignStart justifyCenter gap2 marginBottom2">
        <div className="requireLeft width50 flex alignStart justifyCenter flexColumn">
          <div
            className={
              reqValue === "Falling Behind on Design Trends"
                ? "reqLeftTab activeTab"
                : "reqLeftTab"
            }
            onClick={() => setReqValue("Falling Behind on Design Trends")}
          >
            <h3>
              <span>1.</span> Falling Behind on Design Trends
            </h3>
          </div>
          <div
            className={
              reqValue === "Mobile Malaise"
                ? "reqLeftTab activeTab"
                : "reqLeftTab"
            }
            onClick={() => setReqValue("Mobile Malaise")}
          >
            <h3>
              <span>2.</span> Mobile Malaise
            </h3>
          </div>
          <div
            className={
              reqValue === "Slow Loading Times"
                ? "reqLeftTab activeTab"
                : "reqLeftTab"
            }
            onClick={() => setReqValue("Slow Loading Times")}
          >
            <h3>
              <span>3.</span> Slow Loading Times
            </h3>
          </div>
          <div
            className={
              reqValue === "Lack of Engagement"
                ? "reqLeftTab activeTab"
                : "reqLeftTab"
            }
            onClick={() => setReqValue("Lack of Engagement")}
          >
            <h3>
              <span>4.</span> Lack of Engagement
            </h3>
          </div>
          <div
            className={
              reqValue === "Security Concerns"
                ? "reqLeftTab activeTab"
                : "reqLeftTab"
            }
            onClick={() => setReqValue("Security Concerns")}
          >
            <h3>
              <span>5.</span> Security Concerns
            </h3>
          </div>
        </div>
        <div className="requireRight width50 flex gap2">
          {reqValue === "Falling Behind on Design Trends" && (
            <>
              <h4>1.</h4>
              <p>
                The world of web design is constantly evolving, with new trends
                and best practices emerging all the time. If your website still
                uses design elements popular a decade ago, like Flash animations
                or cluttered layouts, it can appear outdated and unprofessional.
                Modern web design prioritizes clean aesthetics, user-friendly
                navigation, and a focus on high-quality visuals. Does your
                website reflect these principles, or is it stuck in the past?
              </p>
            </>
          )}
          {reqValue === "Mobile Malaise" && (
            <>
              <h4>2.</h4>
              <p>
                Gone are the days when websites were primarily accessed from
                desktop computers. Today, the majority of web traffic comes from
                smartphones and tablets. If your website isn't responsive,
                meaning it doesn't adapt its layout and functionality to
                different screen sizes, it's creating a frustrating experience
                for a significant portion of your audience. Users should be able
                to easily navigate, access information, and take action on your
                website regardless of whether they're using a desktop, tablet,
                or mobile device.
              </p>
            </>
          )}
          {reqValue === "Slow Loading Times" && (
            <>
              <h4>3.</h4>
              <p>
                Nobody wants to wait for a website to load. If your website
                takes too long to display content and pages, visitors are likely
                to click away in frustration. Speed is crucial not only for user
                experience but also for search engine optimization (SEO). Slow
                loading times can significantly impact your website's ranking in
                search results, making it harder for potential customers to find
                you online.
              </p>
            </>
          )}
          {reqValue === "Lack of Engagement" && (
            <>
              <h4>4.</h4>
              <p>
                Is your website simply a static brochure online, or is it
                actively engaging your audience? A well-designed website should
                encourage visitors to interact with your content, whether it's
                through calls to action, interactive elements, or informative
                blog posts. If your website analytics show low visitor
                engagement metrics like time spent on site or bounce rate (the
                percentage of visitors who leave after viewing only one page),
                it might be a sign that your design is failing to capture
                attention and convert visitors into leads.
              </p>
            </>
          )}
          {reqValue === "Security Concerns" && (
            <>
              <h4>5.</h4>
              <p>
                Website security is no longer an afterthought – it's a critical
                consideration. Outdated websites might be vulnerable to security
                breaches, putting your data and your visitors' information at
                risk. A website refresh is an opportunity to implement the
                latest security measures and ensure your online presence is safe
                and trustworthy.
              </p>
            </>
          )}
        </div>
      </div>
      <DarkBtn text="Start Your Project Today" link="contact" />
    </section>
  );
};

export default Require;
