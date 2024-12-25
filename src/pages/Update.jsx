import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onUpdate }) => {
  const { id } = useParams();
  const crtPrd = products.find((item) => item.id == id);
  const UPDATE = (e) => {
    e.preventDefault();
    const updateData = { ...crtPrd, ...inputValue };
    onUpdate(updateData);
  };
  const [inputValue, setInputValue] = useState({});
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  return (
    <div>
      <form action="" onSubmit={UPDATE}>
        <input
          defaultValue={crtPrd?.name}
          name="name"
          placeholder="name"
          onInput={onChange}
          type="text"
        />
        <input
          defaultValue={crtPrd?.des}
          name="des"
          placeholder="des"
          onInput={onChange}
          type="text"
        />
        <input
          defaultValue={crtPrd?.price}
          name="price"
          placeholder="price"
          onInput={onChange}
          type="text"
        />
        <input
          defaultValue={crtPrd?.img}
          name="img"
          placeholder="img"
          onInput={onChange}
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
