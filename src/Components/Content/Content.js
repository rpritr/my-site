import React, {Component} from "react";
import "./Content.css";
class Content extends Component {
    render() {
        return (
            <main className="App-main">
            <p className="App-text">
                Edit <code>src/App.js</code> and save to reload.
            </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
            </main>
        )
    }
}

export default Content;