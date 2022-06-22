import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Setup Variables
const books = [
  { 
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81F30JDZU9L._AC_UL604_SR604,400_.jpg",
    title: "Why a Daughter Needs a Dad",
    author: "Gregory E. Lang",
  },
  { 
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL604_SR604,400_.jpg",
    title: "Oh, the Places You'll Go!",
    author: "Dr. Seuss",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/61sDK3mWV9L._AC_UL604_SR604,400_.jpg",
    title: "I'd Like to Play Alone, Please: Essays",
    author: "Tom Segura",
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._AC_UL604_SR604,400_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
];

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book key={book.id} book={book} />;
//       })}
//     </section>
//   );
// }

// function BookList() {
//     return (
//         <section className='booklist'>
//             {books.map((book, index) => {
//                 return <Book key={index} book={book} />;
//             })}
//         </section>
//     );
// }

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book, index) => {
                return <Book key={book.id} {...book} ></Book>; {/* spread operator is "..." and then name of the operator. Now we're no longer passing in the book property as a object, we're passing it in as separate properties. That way don't need to use anymore the book property altogether. I would like to spread out all the properties here that are coming from the book on my prop. */}
            })}
        </section>
    );
}

// const Book = (props) => {
//   const { img, title, author } = props;

const Book = ({ img, title, author}) => {

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
