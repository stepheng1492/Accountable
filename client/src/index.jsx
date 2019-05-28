import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            admin: false,
            teacher: false
        }
    }

    render() {
        const { isLoggedIn } = this.state;

        if (!isLoggedIn) {
            return (
                <div>
                    <form>
                        <label>
                            <h3>Please Sign In:</h3>
                            <br />
                            <input type="text" name="school" placeholder="School" />
                            <input type="text" placeholder="Password" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
        }
    }
}

ReactDOM.render(<App />, document.getElementById('app'));