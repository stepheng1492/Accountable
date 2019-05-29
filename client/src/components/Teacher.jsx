import React from 'react';

class Teacher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teacherName: this.props.teacherName,
            classes: [],
            formSubmit: false
        }
        this.addClass = this.addClass.bind(this);
    }

    addClass() {
        console.log('test');
        this.setState({
            formSubmit: true
        })
        // set state to be a form
        // on form submission, reset state to teacher view
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
                                <input type="text" name="name" />
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
