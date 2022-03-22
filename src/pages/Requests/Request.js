import React, { useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

//import ClientContext from "../../component/store/client-context";
import ClientContext from "../../component/store/client-context";
import Button from "../../component/UI/Button/Button";
import classes from "./Request.module.css";
export default function Request(props) {
  const clientCtx = useContext(ClientContext);
  const checkInts = clientCtx.checkInt(props.id);
  const toggleInterestedHandler = () => {
    console.log(checkInts);
    if (checkInts) clientCtx.removeInt(props.id);
    else
      clientCtx.addInt({
        id: props.id,
        name: props.name,
        image: props.image,
        title: props.title,
        description: props.description,
      });
  };
  return (
    <div className={classes.box}>
      <img className={classes["box-image"]} src={props.image} alt="" />
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <button onClick={toggleInterestedHandler} className="btn">
        {checkInts ? (
          <>Not interesed {<AiFillStar className={classes["star-icon"]} />}</>
        ) : (
          <>Interesed {<AiOutlineStar className={classes["star-icon"]} />}</>
        )}
      </button>
    </div>
  );
}
