import React from "react";
import InputField from ".";

 const InputFieldStory = {
  title: "Molecules/Input Field",
  component: InputField,
};

export default InputFieldStory;

const Template = (args) => <InputField{...args} />;

export const InputField1 = Template.bind({});
InputField1.args = {
  text: "Enter the text",
};