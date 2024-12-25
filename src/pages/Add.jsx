import React from "react";

const Add = (props) => {
  const { onAdd, onChange } = props;
  return (
    <div>
      <form action="" onSubmit={onAdd}>
        <input name="name" placeholder="name" onInput={onChange} type="text" />
        <input name="des" placeholder="des" onInput={onChange} type="text" />
        <input
          name="price"
          placeholder="price"
          onInput={onChange}
          type="text"
        />
        <input name="img" placeholder="img" onInput={onChange} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Add;
