import React from "react";
const Footer = (props) => {
    return (
        <footer>
            <p>{props.year}</p>
            {props.children}
        </footer>
    )
}

export default Footer;