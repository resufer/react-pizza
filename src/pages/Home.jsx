import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../Components';
import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' }
];

export default function Home() {
  let dispatch = useDispatch();
  let pizzas = useSelector(state => state.pizzas.items);

  let onSelectCategory = React.useCallback(ind => dispatch(setCategory(ind)), []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onSelectCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas && pizzas.map(pizza => <PizzaBlock key={pizza.id} data={pizza} />)}
      </div>
    </div>
  );
}
