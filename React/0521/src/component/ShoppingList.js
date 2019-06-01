import React, {Component} from 'react'

// export default class ShoppingList extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return (
//             <div className="shopping-list">
//             <h1>Shopping List for {this.props.name}</h1>
//             </div>
//         )
//     }
// }

const ShoppingList = (props)=> {
    return(
        <div>
            <h1>Shopping List for {props.name}</h1>
        </div>
    )
}

export default ShoppingList