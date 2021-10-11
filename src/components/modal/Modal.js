import { forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./modal.scss";

// to use, create a div with modal-root as id in the index.html file
// create a ref in the parent component of the modal
// pass the created ref in a ref prop in the modal component
// use the openModal func -> refName.current.openModal()
// use the closeModal func -> refName.current.closeModal()

const Modal = forwardRef(({ children }, ref) => {
  const [displayModal, setDisplayModal] = useState(true);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    };
  });

  const open = () => {
    setDisplayModal(true);
  };

  const close = () => {
    setDisplayModal(false);
  };

  return (
    <>
      {displayModal
        ? ReactDOM.createPortal(
            <div className={`modal ${displayModal ? "show" : ""}`}>
              <div className="modal__backdrop" onClick={close} />
              <div className="modal__box">{children}</div>
            </div>,
            document.getElementById("modal-root")
          )
        : null}
    </>
  );
});

export default Modal;
