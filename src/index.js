import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Setup Variables
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81F30JDZU9L._AC_UL604_SR604,400_.jpg",
  title: "Why a Daughter Needs a Dad",
  author: "Gregory E. Lang",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL604_SR604,400_.jpg",
  title: "Oh, the Places You'll Go!",
  author: "Dr. Seuss",
};

const thirdBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/61sDK3mWV9L._AC_UL604_SR604,400_.jpg",
  title: "I'd Like to Play Alone, Please: Essays",
  author: "Tom Segura",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sequi, libero nam error quis fuga inventore distinctio voluptatum esse sed veritatis adipisci aliquid ipsam totam, omnis perferendis earum illum placeat!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  );
}

const Book = (props) => {
    const {img, title, author, children} = props;
    return (
        <article className='book'>
            <img className='img' src={img} alt='' />
            <h1>{title}</h1>
            <h4>{author}</h4>
            {children}
        </article>
    );
};

// const Book = ({img, title, author, children }) => {
//     return (
//         <article className='book'>
//             <img className='img' src={img} alt='' />
//             <h1>{title}</h1>
//             <h4>{author}</h4>
//             {children}
//         </article>
//     );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
