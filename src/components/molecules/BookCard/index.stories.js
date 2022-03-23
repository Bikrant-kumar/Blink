import React from "react";
import BookCard from ".";
import { Box } from "@mui/material";
import { books } from "../../../assets/data/data.json";


export default {
  title: "Molecules/BookCard",
  component: BookCard,
};

const Template = (args) => (
  <Box width="20vw">
    <BookCard {...args} />
  </Box>
);

export const BookCard1 = Template.bind({});
BookCard1.args = {
  book: books[0],
};