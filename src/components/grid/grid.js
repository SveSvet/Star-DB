import React from "react";

const Grid = ({item, field, label}) => {
    return (
                <li className="list-group-item">
                    <span className="term">{label}</span>
                    <span>{ item[field] }</span>
                </li>
    )
}

export default Grid;
