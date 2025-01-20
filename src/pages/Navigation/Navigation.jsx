import React, { useEffect } from "react";
import Logo from "../../assets/logo-js-svgrepo-com";
import AnimatedQuote from "../../GSAP/AnimatedQuote/AnimatedQuote";
import Menu from "../../Three/Menu/Menu";
import "./Navigation.css";
import gsap from "gsap";
import Github from "../../assets/github.png";

const Navigation = () => {
  useEffect(() => {
    const changingComponent1 = document.querySelector(".socialMediaLogo1");
    const changingComponent2 = document.querySelector(".socialMediaLogo2");
    console.log(changingComponent1);
    console.log(changingComponent2);

    changingComponent1.addEventListener("mouseover", () => {
      gsap.to(".socialMediaLogo1", {
        backgroundPosition: "100% 0",
        color: "white",
        duration: 0.1,
      });
    });

    changingComponent1.addEventListener("mouseout", () => {
      gsap.to(".socialMediaLogo1", {
        backgroundPosition: "0% 0",
        color: "black",
        duration: 0.1,
      });
    });

    changingComponent2.addEventListener("mouseover", () => {
      gsap.to(".socialMediaLogo2", {
        backgroundPosition: "100% 0",
        color: "white",
        duration: 0.1,
      });
    });

    changingComponent2.addEventListener("mouseout", () => {
      gsap.to(".socialMediaLogo2", {
        backgroundPosition: "0% 0",
        color: "black",
        duration: 0.1,
      });
    });

    return () => {
      changingComponent1.forEach((component) => {
        component.removeEventListener("mouseover", () => {});
        component.removeEventListener("mouseout", () => {});
      });

      changingComponent2.forEach((component) => {
        component.removeEventListener("mouseover", () => {});
        component.removeEventListener("mouseout", () => {});
      });
    };
  }, []);
  return (
    <>
      <div style={Styles.wrapper}>
        <div style={Styles.logo}>
          <Logo />
        </div>
        <div style={Styles.quote}>
          <AnimatedQuote />
        </div>
        <div style={Styles.menu}>
          <Menu />
        </div>
        <div style={Styles.socialMedia}>
          <div className="socialMediaLogo1">Github</div>
          <div className="socialMediaLogo2">LinkedIn</div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

const Styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "0.2fr 1fr 1fr 0.1fr ",
    height: "7rem",
    border: "1px solid black",
  },

  logo: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid black",
  },
  quote: {
    display: "grid",
    alignItems: "center",
    justifyContent: "left",
    borderRight: "1px solid black",
    // paddingLeft: "10px",
  },

  menu: {
    display: "flex",
    borderRight: "1px solid black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  socialMedia: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
  },

  socialMediaLogo: {
    display: "flex",
    borderBottom: "1px solid black",
    justifyContent: "center",
    alignItems: "center",
  },
};
