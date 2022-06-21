import React from "react";
import ReactDOM from "react-dom/client";

// CSS Basics
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = 'Gregory E. Lang'
const Book = () => {
  const title = "Why a Daughter Needs a Dad";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81F30JDZU9L._AC_UL604_SR604,400_.jpg"
        alt=""
        width="280px"
        height="200px"
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>This is how you comment out in JSX */}
      <p>{6+6}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
