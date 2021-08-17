import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './Components';
import { Cart, Home } from './pages';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
    // .then(resp => window.store.dispatch(setPizzas(resp.data.pizzas)))
      .then(resp => this.props.setPizzas(resp.data.pizzas))
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path='/' exact render={() => <Home pizzas={this.props.items}/>} />
          <Route path='/cart' render={() => <Cart />} />
        </div>
      </div>
    );
  }
}

function MSTP(state) {
  return {
    items: state.pizzas.items
  }
};

export default connect(MSTP, {setPizzas})(App);


// function MDTP(dispatch) {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAC(items))
//   }
// };