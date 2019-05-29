import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

const options = [
    {value: 'test One', label: "Operation Spark"},
    {value: 'test Two', label: "Tulane"},
    {value: 'test Three', label: 'UNO'}
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            admin: false,
            teacher: false,
            selected: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectedOption) {
        event.preventDefault();
        // console.log(selectedOption.label);
        this.setState({
           selected: selectedOption.label
        });
        // console.log(`You picked: `, selectedOption)
        console.log(this.state)
    }

    render() {
        const { isLoggedIn, selected } = this.state;

        if (!isLoggedIn) {

            if (selected === 'Operation Spark') {
                return (
                    <div>
                        <div>Some Nav Bar Stuff Here: Date, Time, Whatever</div>
                        <LoginForm />
                    </div>
                )
            }
            return (
                <div>
                    <div>Some Nav Bar Stuff Here: Date, Time, Whatever</div>
                    <h1>Select Your School</h1>
                    <div class="selectBar">
                    <Select
                        name="pick a school"
                        value={selected}
                        options={options}
                        onChange={this.handleChange}
                        />
                    </div>
                </div>
            )
        }
    }
}

ReactDOM.render(<App />, document.getElementById('app'));