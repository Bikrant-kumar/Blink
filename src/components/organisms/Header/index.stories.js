import Header from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";

 const HeaderStory = {
  title: "Organisms/Header",
  component: Header,
} ;

export default HeaderStory;

 const Template = (args) => {
   <BrowserRouter>
     <Header {...args}/>
   </BrowserRouter>;
 };

 export const Header1 = Template.bind({});
 Header1.args = {};