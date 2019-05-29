import React from 'react';

class Teacher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teacherName: this.props.teacherName,
            newClass: 'null',
            formSubmit: false
        }
        this.addClass = this.addClass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addClass() {
        console.log('test');
        this.setState({
            formSubmit: true
        })
        // set state to be a form
        // on form submission, reset state to teacher view
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(event.target.value);
        this.setState({
            formSubmit: false
        })
        return false;
    }

    handleChange(event) {
        // event.preventDefault();
        console.log(event.target.value);
        this.setState({
            newClass: event.target.value
        })
    }

    render() {
        const { teacherName, formSubmit } = this.state;
        if (formSubmit) {
            return (
                <div>
                    <h2>Welcome {teacherName}</h2>
                    <div>
                        <form>
                            <label>
                                Class name:
                                <br />
                                <input type="text" name="name" onChange={this.handleChange} />
                            </label>
                            <input type="button" value="Submit" onSubmit={this.handleSubmit} />
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
