import "./myButton.scss";

const MyButton = ({ text }) => {
  return <button className="myBtn">{text}</button>;
};

MyButton.Yellow = ({ text }) => {
  return <button className="myBtn--yellow">{text}</button>;
};

export default MyButton;
