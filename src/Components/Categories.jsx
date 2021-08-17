import React from 'react';

export default function Categories({ items }) {
  let [active, setActive] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {items && items.map((item, ind) => (
          <li
            onClick={() => {
              setActive(ind);
            }}
            key={item + ind}
            className={active === ind ? 'active' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
