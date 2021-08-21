import React from 'react';

const Categories = React.memo(
  function Categories({ items, onSelectCategory }) {
    let [active, setActive] = React.useState(0);

    return (
      <div className="categories">
        <ul>
          {items && items.map((item, ind) => (
            <li
              onClick={() => {
                setActive(ind);
                onSelectCategory(ind);
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
)

export default Categories;
