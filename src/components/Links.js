import React from "react";

function Links(props) {
    console.log(props)
    return (
        <div className="links">
            
            <h1>Links</h1>

            <p>
                <a href={props.github}>{props.github}</a>
            </p>

            <p>
                <a href={props.linkedin}>{props.linkedin}</a>
            </p>
        </div>
    )
}

export default Links