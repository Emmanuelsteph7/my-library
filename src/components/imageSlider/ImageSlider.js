import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import SingleSlider from "./components/singleSlider/SingleSlider";
import "./imageSlider.scss";

const handleSlider = (data, state, stateFunc) => {
  let newArray = [];
  let singleSliderWidth = `${100 / data.length}%`;

  const increaseState = () => {
    if (state === data.length * 2) {
      stateFunc(1);
    } else {
      stateFunc(state + 1);
    }
  };

  const decreaseState = () => {
    if (state === 1) {
      stateFunc(data.length * 2);
    } else {
      stateFunc(state - 1);
    }
  };

  data.forEach((item) => {
    // item.nextSlider = increaseState;
    // item.prevSlider = decreaseState;

    item.width = singleSliderWidth;
    newArray.push(item);
  });

  return { newArray, increaseState, decreaseState };
};

const ImageSlider = ({ data, width, height }) => {
  const [state, setState] = useState(1);
  const toggleDivArray = [];

  useEffect(() => {
    const timer = setInterval(() => {
      if (state === data.length * 2) {
        return setState(1);
      }
      setState(state + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [state, data.length]);

  const newData = handleSlider(data, state, setState);

  for (let i = 1; i === newData.newArray.length; i++) {
    console.log(i);
    toggleDivArray.push(i);
  }

  const mapped = newData.newArray.map((item, key) => {
    return <SingleSlider key={key} {...item} />;
  });

  let style = {};
  if (width) {
    style.width = width;
  }

  if (height) {
    style.height = height;
  }

  let leftVal = -100 * (state - 1);
  let leftVal2 = -100 * (state - newData.newArray.length - 1);
  let alteredLeftVal =
    state > newData.newArray.length + 1
      ? 100 * newData.newArray.length + leftVal2
      : leftVal;
  let alteredLeftVal2 =
    state === 1
      ? -100 * newData.newArray.length
      : 100 * newData.newArray.length + leftVal;

  return (
    <div className="imageSlider" style={style}>
      <div
        className="imageSlider__container"
        style={{
          width: `${100 * newData.newArray.length}%`,
          left: `${alteredLeftVal}%`,
          zIndex: `${state >= 1 && state <= newData.newArray.length ? 2 : 1}`,
          opacity: `${
            state >= newData.newArray.length + 1 &&
            state <= newData.newArray.length + 2
              ? 0
              : 1
          }`,
        }}
      >
        {mapped}
      </div>
      <div
        className="imageSlider__container2"
        style={{
          width: `${100 * newData.newArray.length}%`,
          left: `${alteredLeftVal2}%`,
          zIndex: `${
            state >= newData.newArray.length + 1 &&
            state <= newData.newArray.length * 2
              ? 2
              : 1
          }`,
          opacity: `${state >= 1 && state <= 2 ? 0 : 1}`,
        }}
      >
        {mapped}
      </div>
      <span
        className="imageSlider__rightToggle"
        onClick={newData.increaseState}
      >
        <FiChevronRight />
      </span>
      <span className="imageSlider__leftToggle" onClick={newData.decreaseState}>
        <FiChevronLeft />
      </span>
      <div className="imageSlider__toggleDiv"></div>
    </div>
  );
};

// const ImageSlider2 = ({ data, width, height }) => {
//   const [state, setState] = useState(1);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (state === data.length) {
//         return setState(1);
//       }
//       setState(state + 1);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [state]);

//   const newData = handleSlider(data, state, setState);

//   const mapped = newData.map((item, key) => {
//     return <SingleSlider key={key} {...item} />;
//   });

//   let style = {};
//   if (width) {
//     style.width = width;
//   }

//   if (height) {
//     style.height = height;
//   }

//   return (
//     <div className="imageSlider" style={style}>
//       <div
//         className="imageSlider__container"
//         style={{
//           width: `${100 * newData.length}%`,
//           left: `${-100 * (state - 1)}%`,
//         }}
//       >
//         {mapped}
//       </div>
//     </div>
//   );
// };

export default ImageSlider;
