import React, { Component } from 'react';

import Note from '../Note/Note'
import NotesAdd from '../NotesAdd/NotesAdd'
import './NotesList.css'

class NotesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
           notes: []
        }
        this._getNotes = this._getNotes.bind(this);
        this._addNotes = this._addNotes.bind(this);
    }

    componentWillMount(newProps) {

    }

    componentWillReceiveProps(newProps) {
        if(newProps.notes !== this.state.notes) {
            
        }
    }

	render() {
		return (
            <div>
                <NotesAdd addNotes = {this._addNotes}/>
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

    _addNotes(noteName) {
        let noteObject = {
            "title": noteName,
            "content": 'testContent'
        }

        fetch('/notes', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(noteObject)
        }).then(function (response) {
            if(response.status === 200) {
				response.json().then((data) => {
					this.setState({
                        notes: [...this.state.notes, data]
                    })
				})
			} else {
				//error
            }
        }.bind(this));
    }
}

export default NotesList;
