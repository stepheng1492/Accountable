import React from 'react';

class Teacher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teacherName: this.props.teacherName,
            newClass: '',
            formSubmit: false,
            teacherId: this.props.uniqId
        }
        this.addClass = this.addClass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addClass() {
        console.log(this.props);
        this.setState({
            formSubmit: true
        })
        // set state to be a form
        // on form submission, reset state to teacher view
    }

    handleSubmit(event) {
        event.preventDefault();
        const { newClass } = this.state;
        this.setState({
            
            formSubmit: false
        })
        // console.log(newClass);
    }

    handleChange(event) {
        // event.preventDefault();
        console.log(event.target.value);
        this.setState({
            newClass: event.target.value
        })
    }

    render() {
        // console.log(this.state); 
        const { teacherName, formSubmit } = this.state;
        if (formSubmit) {
            return (
                <div>
                    <h2>Welcome {teacherName}</h2>
                    <div>
                        <form onSubmit={this.handleSubmit} >
                            <label>
                                Class name:
                                <br />
                                <input type="text" name="name" onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <h2>Welcome {teacherName}</h2>
                <input type="button" value="Add a Class!" onClick={this.addClass} />
            </div>
        )
    }
}

export default Teacher;
