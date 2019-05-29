import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import Login from './components/Login.jsx';

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
        this.setState({
           selected: selectedOption.label
        });
    }

    render() {
        const { isLoggedIn, selected } = this.state;

        if (!isLoggedIn) {

            if (selected === 'Operation Spark') {
                return (
                    <div>
                        {/* <NavBar /> */}
                        <div>Some Nav Bar Stuff Here: Date, Time, Whatever</div>
                        <Login state={this.state}/>
                    </div>
                )
            }
            return (
                <div>
                    <div>Some Nav Bar Stuff Here: Date, Time, School Banner</div>
                    <h2>Select Your School</h2>
                    <div>
                    <Select
                        name="Choose an institution"
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