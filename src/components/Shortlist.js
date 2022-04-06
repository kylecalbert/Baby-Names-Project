import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Shortlist() {
  const { shortList } = useContext(GlobalContext);

  return <div>{shortList}</div>;
}

export default Shortlist;
