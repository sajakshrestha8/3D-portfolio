import Logo from "../assets/logo-js-svgrepo-com";
import AnimatedQuote from "../Three/AnimatedText/AnimatedQuote/AnimatedQuote";

const Navigation = () => {
  return (
    <>
      <div style={Styles.wrapper}>
        <div style={Styles.logo}>
          <Logo />
        </div>
        <div style={Styles.quote}>
          <AnimatedQuote />
        </div>
        <div style={Styles.menu}>3</div>
        <div style={Styles.socialMedia}>4</div>
      </div>
    </>
  );
};

export default Navigation;

const Styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "0.2fr 1fr 1fr 0.2fr ",
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
    justifyContent: "center",
    borderRight: "1px solid black",
  },

  menu: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid black",
  },
  socialMedia: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
  },
};
