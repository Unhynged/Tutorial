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
];

const names = ['john', 'peter', 'susan']
const newNames = names.map((name) => {
    return <h1>{name}</h1>
});
console.log(newNames);
function BookList() {
  return (
    <section className="booklist">
        {names}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
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
