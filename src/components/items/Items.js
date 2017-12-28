import React, {Component} from 'react';

import Item from "../item/Item";
import {connect} from "react-redux";
import {withRouter} from 'react-router';

export class Items extends Component {

    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    componentDidMount() {
        fetch('/notes')
            .then(notes => this.setState({ items: notes }));
    }

    render() {
        return (
            <div className="container">
                {
                    this.props.items.map((item) => {
                        return <Item data={item} key={item.id} onRemove={this.onRemove} onEdit={this.onEdit}/>
                    })
                }
            </div>
        );
    }

    onRemove(id) {
        this.props.removeItem(id);
    }

    onEdit(id) {
        this.props.history.push('/edit/' + id);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Items));