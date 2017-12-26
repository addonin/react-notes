import React, { Component } from 'react';
import {connect} from "react-redux";

export class Search extends Component {

    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="">Notes</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                                <input type="text" placeholder="Search for..." className="form-control"
                                       onKeyUp={this.search} ref={(text) => {this.text = text}}/>
                            </div>
                            <button type="submit" className="btn btn-success" onClick={this.search}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }

    search() {
        this.props.searchItems(this.text.value);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchItems: (text) => {
            dispatch({
                type: 'SEARCH_ITEMS',
                payload: text
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Search);