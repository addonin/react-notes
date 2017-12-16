import React, { Component } from 'react';

export default class EditItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="itemTitle">Title</label>
                        <input type="text" className="form-control" id="itemTitle" placeholder="Title"/>
                    </div>
                    <div class="form-group">
                        <label for="itemText">Text</label>
                        <input type="text" className="form-control" id="itemText" placeholder="Text"/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }

}