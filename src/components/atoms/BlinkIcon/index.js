import React from "react";
import PropTypes from "prop-types";

const BlinkIcon = ({ width, d, height, viewBox }) => {

  return (
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-testid = "blink-Icon"
      >
        <path d={d} fill="#042330" />
      </svg>
  );
}

BlinkIcon.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
};

export default BlinkIcon;
