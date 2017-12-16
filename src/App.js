import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import Main from "./components/Main";
import EditItem from './components/edit/EditItem'

import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/edit/:id" component={EditItem}/>
                </Switch>
            </div>
        );
    }

}
