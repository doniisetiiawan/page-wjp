import React from 'react';

function PageEditor() {
  return (
    <div>
      <form>
        <input type="text" name="title" />
        <textarea name="body" />
        <button type="button">back</button>
      </form>
    </div>
  );
}

export default PageEditor;
