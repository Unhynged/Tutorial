import React from "react";
import ReactDOM from "react-dom";

// stateless functional component
// always return JSX

function Greeting() {
  return (
    <div>
        <h1>Hello World</h1>
    </div>
  );
}

/**
 * The below two examples are alternative methods of doing the above but are ultimately not recommended. 
 */

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// };

// const Greeting = () => {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'hello world')
//     );
// };

// ReactDom.render(<Greeting />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
