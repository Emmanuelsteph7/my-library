import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./singleSlider.scss";

const SingleSlider = ({ src, nextSlider, prevSlider, width }) => {
  return (
    <div className="singleSlider" style={{ width: width }}>
      <div className="singleSlider__container">
        <div className="singleSlider__imageDiv">
          <img src={src} alt="" className="singleSlider__image" />
        </div>
        <span className="singleSlider__rightToggle" onClick={nextSlider}>
          <FiChevronRight />
        </span>
        <span className="singleSlider__leftToggle" onClick={prevSlider}>
          <FiChevronLeft />
        </span>
        <div className="singleSlider__toggleDiv">
          <span className="singleSlider__toggleSpan"></span>
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;
