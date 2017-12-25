import React, { Component } from 'react';

export default class CreateItem extends Component {

    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Text..."
                               ref={(input) => {
                                   this.input = input;
                               }
                               }/>
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button" onClick={this.addItem}>Add</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    addItem() {
        this.props.onAdd(this.input.value);
        this.input.value = "";
    }

}