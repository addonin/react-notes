import React, { Component } from 'react';

export default class Item extends Component {

    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    render() {
        return (
            <div className={"panel panel-default" + (!this.props.data.visible ? ' hide' : '')}
                 onClick={this.editItem}>
                <div className="panel-heading">
                    {this.props.data.title}
                    <span className="glyphicon glyphicon-remove pull-right" onClick={this.removeItem} aria-hidden="true">
                    </span>
                </div>
                <div className="panel-body">
                    {this.props.data.text}
                </div>
            </div>
        );
    }

    removeItem(event) {
        event.stopPropagation();
        this.props.onRemove(this.props.data.id);
    }

    editItem = () => {
        this.props.onEdit(this.props.data.id);
    }

}