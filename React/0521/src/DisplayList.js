import React from "react";

const DisplayList = props => {
    const listItems = props.fuckyou.map(I => (
        <li className="list-group-item" key={I.id}>
            {I.item}
        </li>
    ))

        return(
            <div>
                <h1>{props.name}'s List</h1>
                <ul className="list-group">{listItems}</ul>
            </div>
        )

}

export default DisplayList;