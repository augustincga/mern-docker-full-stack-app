import React, { Component } from 'react';

import Note from '../Note/Note'
import './NotesList.css'

class NotesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
           notes: []
        }
        this._getNotes = this._getNotes.bind(this);
    }

	render() {
		return (
            <div>
                {this.state.notes.map((note, index) => {
                    return (
                        <Note key={index} noteData = {note}/>
                    )
                })}
            </div>
		);
    }

    componentDidMount() {
        this._getNotes();
    }

    _getNotes() {
        fetch('/notes', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'get',
        }).then(function (response) {
            if(response.status === 200) {
				response.json().then((data) => {
					this.setState({
                        notes: data
                    }, function() {
                        console.log(this.state.notes);
                    });
				})
			} else {
				//error
            }
        }.bind(this));
    }
}

export default NotesList;
