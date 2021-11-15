// this component is responsible for render a list Pages
// but start simple for now.

// import react
import React from "react";

// A react component is just a function that return JSX - (html embed in js)
const Pages = (props) => {
  console.log("HERE!");
  console.log(props.pages);
  // we want to take this array of objects and convert it to an array of
  // jsx ideas if a method to use here
  const renderPages = () => {
    console.log("renderPages called");
    return props.pages.map((page) => {
      return (
        <div>
          <h1>{page.title}</h1>
          <h3>{page.author}</h3>
          <p>{page.body}</p>
        </div>
      );
    });
  };

  return <p>Pages Here: {renderPages()}</p>;
};

// export the component
export default Pages;
