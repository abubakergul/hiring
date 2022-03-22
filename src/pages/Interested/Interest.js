import React, { useContext } from "react";
import AvailableRequestItem from "../../component/AvailiableRequestItem/AvailableRequestItem";
import ClientContext from "../../component/store/client-context";
import classes from "./Interest.module.css";
import InterestList from "./InterestList";
export default function Interest() {
  const clientCtx = useContext(ClientContext);
  return (
    <section className={classes["section-interest"]}>
      <h3>Interested Clients</h3>
      {clientCtx.interested.length === 0 && (
        <h4>No client in interest list at the movement</h4>
      )}
      {
        <div className={classes["context-container"]}>
          {clientCtx.interested.map((request) => (
            <InterestList
              key={request.id}
              id={request.id}
              name={request.name}
              title={request.title}
              description={request.description}
              image={request.image}
            />
          ))}
        </div>
      }
    </section>
  );
}
