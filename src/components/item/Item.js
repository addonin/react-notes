import React, { Component } from 'react';

export default class Item extends Component {

    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }

    render() {
        return (
            <div className="panel panel-default" onClick={this.editItem}>
                <div className="panel-heading">{this.props.data.title}</div>
                <div className="panel-body">
                    {this.props.data.text}
                </div>
                <span className="glyphicon glyphicon-remove" onClick={this.removeItem} aria-hidden="true">
                </span>
            </div>
        );
    }

    removeItem() {
        this.props.onRemove(this.props.data.id);
    }

    editItem = () => {
        this.props.onEdit(this.props.data.id);
    }

}