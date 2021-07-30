import React from "react";

import { Link } from "react-router-dom";

// dummy data
const items = [
  {
    id: "xc2-134-12s",
    name: "Water Bottle",
    image: "https://picsum.photos/200",
  },
  {
    id: "23d-zs1-3ca",
    name: "Airpods",
    image: "https://picsum.photos/200",
  },
  {
    id: "jh0-s24-hef",
    name: "Sticky Notes",
    image: "https://picsum.photos/200",
  },
  {
    id: "1sd-gr4-1hw",
    name: "Ortho Brush",
    image: "https://picsum.photos/200",
  },
  {
    id: "123-fgd-6d1",
    name: "Notebook",
    image: "https://picsum.photos/200",
  },
  {
    id: "42h-z14-s12",
    name: "Apple iPad",
    image: "https://picsum.photos/200",
  },
];

function Item({ item }) {
  return (
    <div className="card">
      <img src={item.image} className="w-100" />
      <div className="card-body">
        <p className="card-title">{item.name}</p>
        <Link to={`/shop/details/item/${item.id}`}>View</Link>
      </div>
    </div>
  );
}

export const Shop = () => {
  return (
    <>
      <h1>Shop</h1>

      <div className='d-flex flex-row'>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </>
  );
};
