import React from "react";

const NextBtn = props => {
  const clickHandler = e => {
    e.preventDefault();

    if (props.nextUrl !== undefined) {
      props.nextMethod(props.nextUrl);
    }
  };

  return (
    <button type="button" className="btn" onClick={clickHandler}>
      Next
    </button>
  );
};

export default NextBtn;
