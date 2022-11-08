import React from "react";
import { DataContext } from "../Application/Application";
import { useContext } from "react";
import * as T from "../CONFIG/Config";

export default function Select() {
  const { setStatus } = useContext(DataContext);

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <select onChange={statusHandler} className="dropdown">
      <option value="filter" className="first">
        <T.SELECT_FILTER />
      </option>
      <option value="all" className="op">
        <T.SELECT_ALL />
      </option>
      <option value="Complete" className="op">
        <T.SELECT_COMPLETE />
      </option>
      <option value="Undone" className="op">
        <T.SELECT_UNDONE />
      </option>
    </select>
  );
}
