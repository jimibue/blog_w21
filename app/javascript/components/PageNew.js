import React from "react";

const PageNew = (props) => {
  return (
    <div>
      <h1>New Page Form Here!</h1>
      <form action="/pages" method="post">
        <p>title</p>
        {/* <input name='model[attr]'/> */}

        <input name="page[title]" />
        <p>author</p>
        {/* <input name='model[attr]'/> */}

        <input name="page[author]" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default PageNew;
