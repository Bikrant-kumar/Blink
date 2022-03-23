import React from "react";
import ExploreModal from ".";
import { BrowserRouter } from "react-router-dom";

const ExploreModalStory = {
  title: "Molecules/Explore Modal",
  component: ExploreModal,
};

export default ExploreModalStory;

const Template = (args) => (
  <BrowserRouter>
    <ExploreModal {...args} />
  </BrowserRouter>
);

export const ExploreModal1 = Template.bind({});
ExploreModal1.args = {};