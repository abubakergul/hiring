import React, { useState, useContext } from "react";
import { BsFillArrowRightCircleFill } from "react-icons//bs";
import classes from "./Interest.module.css";
import ClientContext from "../../component/store/client-context";
import ModelWindow from "../../component/UI/ModelWindow/ModelWindow";
export default function InterestList(props) {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const clientCtx = useContext(ClientContext);
  const checkInts = clientCtx.checkInt(props.id);
  const toggleInterestedHandler = () => {
    if (checkInts) clientCtx.removeInt(props.id);
  };
  const modelWindowHandler = () => {
    setIsModelOpen(true);
  };
  const closeWindowHandler = () => {
    setIsModelOpen(false);
  };
  return (
    <div className={classes.box}>
      <img className={classes["box-image"]} src={props.image} alt="" />
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button onClick={toggleInterestedHandler} className="btn">
        {checkInts ? "not interesed" : ""}
      </button>
      <button onClick={modelWindowHandler} className="btn">
        Send message <BsFillArrowRightCircleFill className={classes.arrow} />
      </button>
      <ModelWindow
        name={props.name}
        onConfirm={closeWindowHandler}
        isModelOpen={isModelOpen}
      />
    </div>
  );
}
