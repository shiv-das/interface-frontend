import React from "react";
import "../styles/Home.module.css";

const colors = ["/interface.jpg", "/interface2.jpg", "/interface3.jpg"];
//const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    console.log(index);
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  });

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
          backgroundColor: "black",
        }}
      >
        {colors.map((backgroundImage, index) => (
          <div
            className="slide"
            key={index}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "100% 100%",
              //width: "100%",
              //height: "auto",
            }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
