import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./AnimatedQuote.css";

const AnimatedQuote = () => {
  useEffect(() => {
    import("gsap/TextPlugin").then((TextPlugin) => {
      gsap.registerPlugin(TextPlugin);

      gsap.to(".typeWritierText", {
        duration: 5,
        text: "Console hudai xa",
        repeat: 0,
        delay: 0.5,
      });

      gsap.to(".typeWritierText1", {
        duration: 5,
        text: "Please wait I am investigating",
        repeat: 0,
        delay: 0.5,
      });

      gsap.to(".typeWritierText2", {
        duration: 5,
        text: "Server is loading ....",
        repeat: 0,
        delay: 0.5,
      });
      gsap.to(".typeWritierText3", {
        duration: 5,
        text: "Quack quack duck is quackinggg",
        repeat: 0,
        delay: 0.5,
      });
    });
  }, []);

  return (
    <div style={Styles.wrapper}>
      <div className="typeWritierText" style={Styles.text}>
        Loading ...
      </div>
      <div className="typeWritierText1" style={Styles.text}>
        Loading ...
      </div>
      <div className="typeWritierText2" style={Styles.text}>
        Loading ...
      </div>
      <div className="typeWritierText3" style={Styles.text}>
        Loading ...
      </div>
    </div>
  );
};

export default AnimatedQuote;

const Styles = {
  wrapper: {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    flexDirection: "column",
  },
  text: {
    fontSize: "12px",
    fontWeight: 500,
    color: "#333",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
};
