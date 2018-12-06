import React, { Component } from 'react';

class NotesAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
           inputValue: '',

        }
        this._changeInputValue = this._changeInputValue.bind(this);

    }

	render() {
		return (
            <div>
                <input type="text" value={this.state.value} onChange={(e) => this._changeInputValue(e)}/>
                <button onClick={() => this.props.addNotes(this.state.inputValue)}>Add Note</button>
            </div>
		);
    }

    componentDidMount() {
        console.log(this.props);
    }

    _changeInputValue(e) {
        this.setState({
            inputValue: e.target.value
        }, () => {
        })
    }
}

export default NotesAdd;
