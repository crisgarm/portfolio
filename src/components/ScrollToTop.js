import React, { useEffect, useState } from "react";
import "../stylesheets/ScrollToTop.scss";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="scroll"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <i className="scroll__arrow fas fa-chevron-up"></i>
    </div>
  );
};

export default ScrollToTop;
