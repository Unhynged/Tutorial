import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Setup Variables
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81F30JDZU9L._AC_UL604_SR604,400_.jpg",
    title: "Why a Daughter Needs a Dad",
    author: "Gregory E. Lang",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL604_SR604,400_.jpg",
    title: "Oh, the Places You'll Go!",
    author: "Dr. Seuss",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/61sDK3mWV9L._AC_UL604_SR604,400_.jpg",
    title: "I'd Like to Play Alone, Please: Essays",
    author: "Tom Segura",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._AC_UL604_SR604,400_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        // return <Book img={img} title={title} author={author} />;
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img className="img" src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
