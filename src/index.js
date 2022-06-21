import React from "react";
import ReactDOM from "react-dom/client";

// Nested Components, React Tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>John Doe</h2>;

const Message = () => {
  return <p>This is my message.</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
