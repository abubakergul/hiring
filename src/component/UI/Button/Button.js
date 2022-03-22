import React from "react";
import "./Button.css";
export default function Button(props) {
  const classes = "btn " + props.className;
  return <button className={classes}>{props.children}</button>;
}
