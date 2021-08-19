import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Header } from './Components';
import { Cart, Home } from './pages';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

export default function App() {
  let dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(resp => dispatch(setPizzas(resp.data.pizzas)))
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' exact component={Home} />
        <Route path='/cart' component={Cart} />
      </div>
    </div>
  );
}
