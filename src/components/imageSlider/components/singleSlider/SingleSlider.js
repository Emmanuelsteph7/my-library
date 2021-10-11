import "./singleSlider.scss";

const SingleSlider = ({ src, width }) => {
  return (
    <div className="singleSlider" style={{ width: width }}>
      <div className="singleSlider__container">
        <div className="singleSlider__imageDiv">
          <img src={src} alt="" className="singleSlider__image" />
        </div>
        <div className="singleSlider__toggleDiv">
          <span className="singleSlider__toggleSpan"></span>
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;
