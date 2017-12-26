import React, { Component } from 'react';
import {connect} from "react-redux";

import Search from './search/Search';
import CreateItem from "./create-item/CreateItem";
import Items from "./items/Items";

export class Main extends Component {

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
                    title: text,
                    visible: true
                }
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(Main);