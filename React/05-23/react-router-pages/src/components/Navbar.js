import { Link } from 'react-router-dom'
import * as React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Link to='/shoppingList'>Shopping List</Link>
                <Link to='/leaderBoard'> Counter leaderBoard</Link>
            </div>
        )
    }
}