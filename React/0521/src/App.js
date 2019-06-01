import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ModalExample from './component/Modal'
import ShoppingList from './component/ShoppingList'
import CommentCard from './component/CommentCard'
import DisplayList from "./DisplayList"
import Test from "./component/test"
import { tsConstructorType } from '@babel/types';
import Counter from './component/Counter'



class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     testArray: [
  //       {
  //         item:(
  //           <CommentCard comment= '1'/>
  //         )
  //       },
  //       {
  //         item:(
  //           <CommentCard comment= '2'/>
  //         )
  //       },
  //       {
  //         item:(
  //           <CommentCard comment= '3'/>
  //         )
  //       }
  //     ]
  //   }
  // }

//   render(){
//   return (
//     <div>

// <Test testArray= {this.state.testArray} />

//     </div>
//   );
//   }
// }

render(){

  return(

  <div>
    <Counter name ="Eric"/>
  </div>
  )
}
}


// class CommentCardList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//         name: "Jyoti",
//         list: [
//             {
//                 id:0,
//                 item:(
//                     <CommentCard
//                         author = "Eric"
//                         comment="hello"
//                         date={"16/07/2018"}

//                     />
//                 )
//             },
//             {
//               id:1,
//               item:(
//                   <CommentCard
//                       author = "bb"
//                       comment="hello"
//                       date={"16/07/2018"}

//                   />
//               )
//           }

//         ]
//     }
// }


//   render() {
//     return (
//       <div>
//         {/* <CommentCard
//         author="Eric"
//         comment="Hello"
//         date={"16/05/2018"}
//         /> */}
//         <DisplayList name={this.state.name}
//                     fuckyou = {this.state.list} />

//         <ModalExample buttonLabel="Modal Button"/>
//       </div>

//     );
//   }
// }
// export default CommentCardList;

export default App;
