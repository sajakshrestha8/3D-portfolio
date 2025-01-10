import React, { useEffect } from "react";
import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";

const AnimatedQuote = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(".letter", {
      duration: 3,
      text: "Ma Sajak ho hai",
      repeat: 0,
      delay: 0.5,
    });
  }, []);

  return (
    <div style={Styles.wrapper}>
      <div className="letter" style={Styles.text}>
        Loading .....
      </div>
    </div>
  );
};

export default AnimatedQuote;

const Styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
    fontWeight: 500,
    color: "#333",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
};
