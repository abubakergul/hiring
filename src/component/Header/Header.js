import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import ClientContext from "../store/client-context";
export default function Header() {
  const clientCtx = useContext(ClientContext);
  return (
    <header>
      <div className={classes.logo}>
        Hiring <span className={classes.dot}>.</span>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/requests">Requests</NavLink>
          </li>
          <li>
            <NavLink to="/interested ">
              Interested{" "}
              <span className={classes.badge}>{clientCtx.totalInterested}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
