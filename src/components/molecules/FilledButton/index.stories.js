import React from "react";
import FilledButton from ".";

 const FilledButtonStory = {
  title: "Molecules/Filled Button",
  component: FilledButton,
};

export default FilledButtonStory; ;

const Template = (args) => (
  <FilledButton {...args} />
);

export const Finished = Template.bind({});
Finished.args = {
  textColor: "textColors.highEmphasis",
  children: "Finished Reading",
  bgcolor: "primary.300",
  textVariant: "body1",
};