import React, { Component } from 'react';

import Item from "../item/Item";
import {connect} from "react-redux";

export class Items extends Component {

    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }

    render() {
        return (
            <div>
                {
                    this.props.items.map((item) => {
                    return <Item data={item} key={item.id} onRemove={this.onRemove}/>})
                }
            </div>
        );
    }

    onRemove(id) {
        this.props.removeItem(id);
    }
}

function mapStateToProps(state, props) {
    return {
        items: state.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeItem: (id) => {
            dispatch({
                type: 'REMOVE_ITEM',
                payload: id
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);