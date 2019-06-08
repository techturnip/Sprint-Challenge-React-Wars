import React from "react";

const PrevBtn = props => {
  console.log(props.prevUrl);
  const clickHandler = e => {
    e.preventDefault();

    if (props.prevUrl !== undefined) {
      props.prevMethod(props.prevUrl);
    }
  };
  return (
    <button type="button" className="btn" onClick={clickHandler}>
      Previous
    </button>
  );
};

export default PrevBtn;
