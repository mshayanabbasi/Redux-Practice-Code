import React from 'react'

class AddPerson from React.Component {
	state = {
		name: '',
		age: ''
	}
	nameChangeHandler = (event) => {
		this.setState({
			name: event.target.value
		})
	}
	ageChangeHanlder = (event) => {
		this.setState({
			age: event.target.value
		})
	}
	render() {
		return (
			<div className="AddPerson"> 
				<input 
					name="name",
					type="text",
					value={this.state.name}
					placeholder="Enter your name"
					onChange={this.nameChangeHandler}
				/>
				<input 
					name="age",
					type="text",
					value={this.state.age}
					placeholder="Enter your age"
					onChange={this.ageChangeHanlder}
				/>
				<button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
			</div>
		)
	}
}
export default AddPerson