import PageDetail from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";


 const PageDetailStory = {
   title: "Organisms/PageDetail",
   component: PageDetail,
 }; ;

export default PageDetailStory;


const Template = (args) => {
   <BrowserRouter>
     <PageDetail {...args} />
   </BrowserRouter>;
};

export const PageDetail1 = Template.bind({});
PageDetail1.args = {};