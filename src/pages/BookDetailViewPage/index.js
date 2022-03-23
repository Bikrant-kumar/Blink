import React from "react";
import BookDetailView from "../../components/organisms/BookDetail";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";

const BookDetailViewPage = (props) => {
  return (
    <>
      <Header />
      <BookDetailView />
      <Footer />
    </>
  );
};

export default BookDetailViewPage;
