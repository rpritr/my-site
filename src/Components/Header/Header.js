import React, {Component} from "react";
import Logo from "./Logo";
import "./Header.css";
class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Logo/>
            </header>
        );
    }
}
export default Header;