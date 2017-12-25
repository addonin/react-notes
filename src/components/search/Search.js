import React, { Component } from 'react';

export default class Search extends Component {
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
                                <input type="text" placeholder="Search for..." className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-success">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}