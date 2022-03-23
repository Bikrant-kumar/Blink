import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const BlinkTypography = ({ variant, children, color, width, ...restProps}) => {
  return (
    <Typography
      variant={variant}
      color={color}
      sx={{ textAlign: "left", width: width }}
      {...restProps}
      data-testid="typography"
    >
      {children}
    </Typography>
  );
};

BlinkTypography.propTypes = {
  variant: PropTypes.oneOf([
    "h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","inherit",
  ]),
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
};

export default BlinkTypography;
