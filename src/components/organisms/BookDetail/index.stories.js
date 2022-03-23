import BookDetail from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const BookDetailStory = {
  title: "Organisms/BookDetail",
  component: BookDetail,
};

export default BookDetailStory;

 const Template = (args) => {
  <BrowserRouter>
    <BookDetail  {...args} />
  </BrowserRouter>
 };

export const BookDetail1 = Template.bind({});
BookDetail1.args = {};
