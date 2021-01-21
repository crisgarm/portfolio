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
    if (!showScroll && window.pageYOffset > 250) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 250) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={`scroll ${showScroll ? "" : "hidden"}`} onClick={scrollTop}>
      <i className="scroll__arrow fas fa-chevron-up"></i>
    </div>
  );
};

export default ScrollToTop;
