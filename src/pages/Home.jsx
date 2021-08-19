import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../Components';

export default function Home() {
  let dispatch = useDispatch();
  let pizzas = useSelector(state => state.pizzas.items);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={[
            'Все',
            'Мясные',
            'Вегетарианские',
            'Гриль',
            'Острые',
            'Закрытые',
          ]}
        />
        <SortPopup items={[
          { name: 'популярности', type: 'popular' },
          { name: 'цене', type: 'price' },
          { name: 'алфавиту', type: 'alphabet'}]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas && pizzas.map(pizza => <PizzaBlock key={pizza.id} data={pizza} />)}
      </div>
    </div>
  );
}
