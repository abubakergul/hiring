import React from "react";
import Request from "../../pages/Requests/Request";
import classes from "../AvailableRequest/AvailableRequest.module.css";
export default function AvailableRequestItem(props) {
  return (
    <React.Fragment>
      {!props.isLoading && !props.error && (
        <div className={classes.container}>
          {props.requests.map((request) => (
            <Request
              key={request.id}
              id={request.id}
              name={request.name}
              title={request.title}
              description={request.description}
              image={request.image}
            />
          ))}
        </div>
      )}
      {props.error && (
        <section className={classes.loading}>
          <h2>{props.error}</h2>
        </section>
      )}
    </React.Fragment>
  );
}
