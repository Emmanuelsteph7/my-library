import { useRef } from "react";
import { useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import img1 from "./assets/img1.jpg";
import { Form, LinkTag, NavLinkTag, ImageSlider, Modal } from "./components";
import {
  useSuccessAlert,
  useErrorAlert,
} from "./components/alert/AlertContext";
import { array1, array2, array3 } from "./data";
import Home from "./pages/home/Home";

const App = () => {
  const modalRef = useRef();

  const close = () => {
    modalRef.current.closeModal();
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => modalRef.current.openModal()}>Open Modal</button>
      <Modal ref={modalRef}>
        <ModalBody closeFunc={() => modalRef.current.closeModal()} />
      </Modal>
    </div>
  );
};

const ModalBody = ({ closeFunc }) => {
  return (
    <>
      <h1>Header</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quae.</p>
      <button onClick={closeFunc}>close modal</button>
    </>
  );
};

export default App;
