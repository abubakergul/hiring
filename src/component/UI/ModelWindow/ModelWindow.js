import React, { useState, useRef } from "react";
import { ImCross } from "react-icons/im";
import reactDom from "react-dom";
import "./ModelWindow.css";
const ModelWindow = (props) => {
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const messageRef = useRef();
  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredMessage = messageRef.current.value;
    if (enteredMessage.length === 0) {
      setMessageIsValid(true);
      setDidSubmit(false);
    } else {
      setMessageIsValid(false);
      setDidSubmit(true);
    }
    if (messageIsValid) console.log(enteredMessage);
  };
  const modalContext = (
    <React.Fragment>
      <button onClick={props.onConfirm} className="close-modal">
        <ImCross className="close-btn" />
      </button>
      <div className="contact">
        <div className="title">
          <h4>From: Hiring Company</h4>
          <h4>To: {props.name}</h4>
        </div>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="">Message:</label>
          <br />
          {messageIsValid && (
            <p className="error-text ">Message should not be empty</p>
          )}
          <textarea className={"textarea"} ref={messageRef} rows={6} />
          <button className="btn">Send</button>
        </form>
      </div>
    </React.Fragment>
  );
  const didSumitContent = <h4>Message sent sucessfully</h4>;
  const Modal = () => {
    return (
      <div className={`modal  ${!props.isModelOpen ? "hidden" : ""}`}>
        {!didSubmit && modalContext}
        {didSubmit && didSumitContent}
      </div>
    );
  };
  const Overlay = () => {
    return (
      <div
        onClick={props.onConfirm}
        className={`overlay  ${!props.isModelOpen ? "hidden" : ""}`}
      ></div>
    );
  };
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <Modal onConfirm={props.onConfirm} />,
        document.getElementById("modal-root")
      )}
      {reactDom.createPortal(
        <Overlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ModelWindow;
