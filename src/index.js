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

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // The one thing that is different from the Javascript is that since we're setting this up in line, again, we need to make sure we're using the camelCase.
  // onClick, onMouseOver

  //   const clickHandler = () => {
  //     alert("hello world");
  //   };
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = () => {
    console.log({ author });
  };

  //   return (
  //     <article className="book">
  //       <img className="img" src={img} alt="" />
  //       <h1 onClick={() => console.log(title)}>{title}</h1>
  //       <h4>{author}</h4>
  //       <button type="button" onClick={clickHandler}>
  //         reference example
  //       </button>
  //       <button type="button" onClick={complexExample}>
  //         more complex example
  //       </button>
  //     </article>
  //   );
  // };
  // Keep in mind here that both of them are doing the same thing right now. In one case we have the inline function that has the functionality. <h1 onClick={()=> console.log(title)}>{title}</h1> . In the second case, we have the reference. <button type="button" onClick={clickHandler}>reference example</button> .

  // If you have the situation where you must pass the argument to into the function, you will have to first pass the argument, you'll have to setup a arrow function

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img className="img" src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
