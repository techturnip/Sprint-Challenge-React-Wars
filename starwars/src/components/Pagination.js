import React from "react";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";

const Pagination = props => {
  console.log("Pagination Component Props: " + props);
  return (
    <div>
      <PrevBtn
        prevUrl={props.pagination.prevPageUrl}
        prevMethod={props.prevMethod}
      />
      <NextBtn
        nextUrl={props.pagination.nextPageUrl}
        nextMethod={props.nextMethod}
      />
    </div>
  );
};

export default Pagination;
