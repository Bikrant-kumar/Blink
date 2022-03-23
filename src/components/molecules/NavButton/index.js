import React from "react";
import PropTypes from "prop-types";
import { Button, Grid } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";
import BlinkTypography from "../../atoms/BlinkTypography";

const NavButton = ({
  textColor,
  preElement,
  variant = "text",
  children,
  postElement,
  textVariant,
  hoverColor,
  borderColor,
  hoverTextColor,
  onClick,
  width,
  bgcolor,
  align,
  height,
  borderBottom = false,
  borderHover = true,
}) => {
  const StyledNavButton = styled(Button)(
    sx({
      textTransform: "none",
      display: "flex",
      justifyContent: align,
      color: textColor,
      bgcolor: bgcolor,
      height: height,
      width: width,
      borderBottomColor: hoverTextColor,
    })
  );

  const borderBottomHover = {
    ":hover": {
      bgcolor: hoverColor,
      borderBottomWidth: 2,
      borderBottomStyle: "solid",
    },
  };

  const permanentBorder = {
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  };

  return (
      <StyledNavButton
        variant={variant}
        onClick={onClick}
        sx={borderHover ? borderBottomHover : permanentBorder}
      >
        <Grid container spacing={2} alignItems="center" >
          <Grid item> {preElement} </Grid>
          <BlinkTypography variant={textVariant} children={children} />
          <Grid item> {postElement} </Grid>
        </Grid>
      </StyledNavButton>
  );
};

NavButton.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  bgcolor: PropTypes.string,
  borderBottom: PropTypes.bool,
  borderHover: PropTypes.bool,
  onClick: PropTypes.func,
  height: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  align: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  textVariant: PropTypes.oneOf([
    "button",
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
    "overline",
  ]),
};

export default NavButton;
