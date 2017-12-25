import React, { Component } from 'react';
import {connect} from "react-redux";

export class EditItem extends Component {

    constructor(props) {
        super(props);
        this.updateItem = this.updateItem.bind(this);
    }

    render() {
        console.log(this);
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="itemTitle">Title</label>
                        <input type="text" className="form-control" id="itemTitle" placeholder="Title"
                               defaultValue={this.props.item.title} ref={(title) => { this.title = title; }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="itemText">Text</label>
                        <input type="text" className="form-control" id="itemText" placeholder="Text"
                               defaultValue={this.props.item.text} ref={(text) => { this.text = text; }} />
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.updateItem}>Update</button>
                </form>
            </div>
        );
    }

    updateItem = () => {
        this.props.updateItem({
            id: this.props.item.id,
            title: this.title.value,
            text: this.text.value
        });
        this.props.history.push('/');
    }

}

function mapStateToProps(state, props) {
    return {
        item: state.items.find(item => {
            return item.id === parseInt(props.match.params.id)
        })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateItem: (item) => {
            dispatch({
                type: 'UPDATE_ITEM',
                payload: item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);