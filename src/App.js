import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Search from './components/search/Search';
import CreateItem from "./components/create-item/CreateItem";
import Items from "./components/items/Items";

class App extends Component {
  render() {
    return (
        <div>
            <Search/>
            <CreateItem onAdd={this.onAddItem}/>
            <Items/>
        </div>
    );
  }

  onAddItem(text) {
      console.log(text);
  }
}

function mapStateToProps(state, props) {
    return {
        items: state.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: (text) => {
            dispatch({
                type: 'ADD_ITEM',
                payload: text
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
