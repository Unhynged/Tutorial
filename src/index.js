import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

//Imports from Exported files
import { data } from "./books";
import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

function BookList() {
    console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
