import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Search from './components/search/Search';
import CreateItem from "./components/create-item/CreateItem";
import Items from "./components/items/Items";

class App extends Component {

    constructor(props) {
        super(props);
        this.onAddItem = this.onAddItem.bind(this);
    }

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
        this.props.addItem(text);
    }

}

function mapDispatchToProps(dispatch) {
    return {
        addItem: (text) => {
            dispatch({
                type: 'ADD_ITEM',
                payload: {
                    id: Date.now(),
                    title: text
                }
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(App);
