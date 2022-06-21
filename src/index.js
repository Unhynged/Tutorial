import React from "react";
import ReactDOM from "react-dom/client";

// JSX Rules
// return single element - Inside the element that we're returning, we can get extremely creative; you could return a whole website. Keep in mind though that we're still rendering the HTML.
// div / section / article or Fragment - You have the option of using proper HTML semantics or you can use a fragment.
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// function Greeting() {
//    return (
//     <div className="">
//       <h3>Hello World</h3>
//       <ul>
//         <li>
//             <a href="#">Hello World</a>
//         </li>
//         <img src="" alt="" />
//         <input type="text" name="" id="" />
//       </ul>
//     </div>
//   );
// }

// function Greeting() {
//    return (
//     <React.Fragment>
//         <div>
//             <h3>Hello World</h3>
//             <ul>
//                 <li>
//                     <a href='#'>Hello World</a>
//                 </li>
//             </ul>
//         </div>
//         <div></div>
//     </React.Fragment>
//   );
// }

//  function Greeting() {
//     return <h1>hello world</h1>;
// }

function Greeting() {
    return (
        <div>
            <h1>hello World</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
