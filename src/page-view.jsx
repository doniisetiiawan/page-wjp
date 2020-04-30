import React from 'react';

function PageView(props) {
  return (
    <div>
      {props.title}
      <button type="button">edit</button>
      <button type="button">delete</button>
    </div>
  );
}

export default PageView;
