import React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";

const BlinkAvatar = ({ letter,aWidth,aHeight }) => {
  return (
    <Avatar
      sx={{ bgcolor: "#69A6E3", display: "flex", alignItems: "center", width:aWidth, height:aHeight }}
      data-testid="avatar"
    >
      { letter }
    </Avatar>
  );
}

BlinkAvatar.propTypes = {
  letter: PropTypes.string,
  aWidth: PropTypes.number,
  aHeight: PropTypes.number
};

export default BlinkAvatar;
