import React, { useState, useEffect } from "react";
import Request from "../../pages/Requests/Request";
import AvailableRequestItem from "../AvailiableRequestItem/AvailableRequestItem";
import classes from "./AvailableRequest.module.css";
export default function AvailableRequest() {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchRequests = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://react-http-b91bf-default-rtdb.firebaseio.com/people.json"
        );
        //if (!response.ok) {
        //throw new Error("Something went wrong!" + response.status);
        //}
        const data = await response.json();
        console.log(data);
        const loadedRequest = [];
        for (const key in data) {
          loadedRequest.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            title: data[key].title,
            image: data[key].image,
          });
        }
        setRequests(loadedRequest);
        setIsLoading(false);
      } catch (error) {
        setError("Something went wrong");
      }
    };
    fetchRequests();
  }, []);
  if (isLoading && !error) {
    return (
      <section className={classes.loading}>
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <React.Fragment>
      <AvailableRequestItem
        requests={requests}
        isLoading={isLoading}
        error={error}
      />
    </React.Fragment>
  );
}
