import React from "react";

const Film = ({filmNameAsAProp, filmUrlAsAProp}) => {
    return (

        <li>
            <a href={filmUrlAsAProp} target="_blank">
            {filmNameAsAProp}
            </a>
        </li>
    )
}

export default Film