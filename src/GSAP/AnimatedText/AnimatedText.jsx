import { useEffect } from "react";
import { gsap } from "gsap";
import "./AnimatedText.css";
import CrossIcon from "../../assets/plus-a-svgrepo-com";
// import TextPlugin from "gsap/TextPlugin";

export default function AnimatedText(props) {
  const Letter = ({ space, letter }) => {
    return space ? (
      <div className="letter" style={Styles.letter}>
        &nbsp;
      </div>
    ) : (
      <div className="letter" style={Styles.letter}>
        {letter}
      </div>
    );
  };

  useEffect(() => {
    let textAnimation = gsap.timeline();
    textAnimation.from(".letter", {
      y: 100,
      stagger: {
        each: 0.1,
      },
    });

    const animateWord = (wordSelector) => {
      gsap.to(wordSelector, {
        rotationY: 360,
        duration: 2,
        stagger: 0.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
      });
    };

    const letterSelctor = document.querySelectorAll(".letter");

    const randomAnimation = () => {
      const randomIndex = Math.floor(Math.random() * letterSelctor.length);
      animateWord(letterSelctor[randomIndex]);
    };

    const interval = setInterval(() => {
      randomAnimation();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={Styles.wrapper}>
      <div className="word-0" style={Styles.words}>
        {props.firstName
          .split("")
          .map((value, index) =>
            value == " " ? (
              <Letter key={index} space={true} letter={value} />
            ) : (
              <Letter key={index} space={false} letter={value} />
            )
          )}
      </div>
      <div className="word-1" style={Styles.words}>
        {props.lastName
          .split("")
          .map((value, index) =>
            value == " " ? (
              <Letter key={index} space={true} letter={value} />
            ) : (
              <Letter key={index} space={false} letter={value} />
            )
          )}
      </div>
    </div>
  );
}

const Styles = {
  wrapper: {
    height: "30vh",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  words: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "center",
  },
  letter: {
    fontSize: 148,
    color: "black",
    fontWeight: "bold",
  },

  img: {
    width: "100%", // Adjust width
    height: "100%", // Adjust height
    objectFit: "contain",
  },
};
