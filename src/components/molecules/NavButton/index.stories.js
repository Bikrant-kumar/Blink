import NavButton from ".";
import React from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

const Navbar = {
  title: "Molecules/Nav Button",
  component: NavButton,
};

export default Navbar;

const Template = (args) => (
  <NavButton {...args} />
);

export const Explore = Template.bind({});
Explore.args = {
  children: "Explore",
  textColor: "textColors.highEmphasis",
  textVariant: "body1",
  hoverColor: "background.default",
  hoverTextColor: "primary.300",
  postElement: <KeyboardArrowDownOutlined />,
};