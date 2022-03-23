import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import TypographyComponent from "../../atoms/BlinkTypography";
import { styled, experimental_sx as sx } from "@mui/system";

const FilledButton = ({
  variant = "contained",
  textColor,
  preElement,
  children,
  textVariant,
  bgcolor,
  onClick,
  width,
  height,
  hoverColor,
  hoverTextColor,
  borderColor = "",
  isBorder = false,
  align,
}) => {
  const StyledButton = styled(Button)(
    sx({
      textTransform: "none",
      display: "flex",
      justifyContent: align,
      color: textColor,
      bgcolor: bgcolor,
      width: width,
      height: height,
      ":hover": {
        bgcolor: hoverColor,
        color: hoverTextColor,
      },
    })
  );

  const border = {
    borderColor: borderColor,
    borderWidth: 1,
    borderStyle: "solid",
  };

  return (
    <StyledButton
        variant={variant}
        onClick={onClick}
        style={isBorder ? border : undefined}
    >
      {preElement}
      <TypographyComponent variant={textVariant} children={children} />
    </StyledButton>
  );
};

FilledButton.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  bgcolor: PropTypes.string,
  isBorder: PropTypes.bool,
  onClick: PropTypes.func,
  height: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  align: PropTypes.oneOf(
    ["flex-start",
    "flex-end",
    "center",
    "stretch",
    "space-between",
    "space-around",
    "space-evenly"]
  ),
  textVariant: PropTypes.oneOf(
    ["button",
    "caption",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "inherit",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "overline"]
  ),
};

export default FilledButton;
