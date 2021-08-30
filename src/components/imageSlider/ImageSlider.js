import { useEffect, useState } from "react";
import SingleSlider from "./components/singleSlider/SingleSlider";
import "./imageSlider.scss";

const handleSlider = (data, state, stateFunc) => {
  let newArray = [];
  let singleSliderWidth = `${100 / data.length}%`;

  const increaseState = () => {
    if (state === data.length) {
      stateFunc(1);
    } else {
      stateFunc(state + 1);
    }
  };

  const decreaseState = () => {
    if (state === 1) {
      stateFunc(data.length);
    } else {
      stateFunc(state - 1);
    }
  };

  data.forEach((item) => {
    item.nextSlider = increaseState;
    item.prevSlider = decreaseState;
    item.width = singleSliderWidth;
    newArray.push(item);
  });

  return newArray;
};

const ImageSlider = ({ data, width, height }) => {
  const [state, setState] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (state === data.length) {
        return setState(1);
      }
      setState(state + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [state]);

  const newData = handleSlider(data, state, setState);

  const mapped = newData.map((item, key) => {
    return <SingleSlider key={key} {...item} />;
  });

  let style = {};
  if (width) {
    style.width = width;
  }

  if (height) {
    style.height = height;
  }

  return (
    <div className="imageSlider" style={style}>
      <div
        className="imageSlider__container"
        style={{
          width: `${100 * newData.length}%`,
          left: `${-100 * (state - 1)}%`,
        }}
      >
        {mapped}
      </div>
    </div>
  );
};

export default ImageSlider;
