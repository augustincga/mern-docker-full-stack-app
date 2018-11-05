import React, { Component } from 'react';

import './Note.css'

class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {
           
        }
    
    }


	render() {
		return (
            <div>
                <p>{this.props.noteData.title}</p>
                <p>{this.props.noteData.content}</p>
            </div>
		);
    }
}

export default Note;
