import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const { products, onDel } = props;
  return (
    <div>
      <Link to={`/products/add`}>
        <button>Add product</button>
      </Link>
      <div>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>des</td>
              <td>price</td>
              <td>img</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.des}</td>
                  <td>{product.price}</td>
                  <td>
                    <img src={product.img} alt="" />
                  </td>
                  <td>
                    <button onClick={() => onDel(product.id)}>Xoa</button>
                    <Link to={`/products/${product.id}/update`}>
                      <button>Update</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
