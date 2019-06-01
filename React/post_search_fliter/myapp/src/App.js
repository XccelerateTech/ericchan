import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import { Provider, connect } from "react-redux"
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const ADD_NAME = "ADD_NAME"; //2 define the action and action creator

function addName(name){
  return{
    type: ADD_NAME,
    name: {
      name:name
    }
  }
}

function nameThunk(name){
  return(dispatch) =>{

    let arrayName = {name:name}
    return axios.post('/user', arrayName).then((res)=>{
console.log(arrayName)
let name = res.data.name
console.log(name)
      dispatch(addName(name))
    })
  }
}



const initalState = { //3 define the store, reducer or combine reducer, remember the property of mapStatetoProps must match to the props of combineReducers
  name: []
};

const nameReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        name: state.name.concat([action.name])
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  nameStore : nameReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))



class App extends React.Component { //1.define the component, local state , and declaration of props state for redux
  constructor(props) {
    super(props);
    this.state = { name: "" };
    // this.addName = this.addName.bind(this);
    this.handeChnage = this.handeChnage.bind(this);
  }

  handeChnage(event) {
    this.setState({ name: event.target.value }, () => { console.log(this.state) })
  }

  render() {
    return (
      <form>
        <label>
          Name:
      <input type="text" onChange={this.handeChnage} />
        </label>
        <input type="button" onClick={() => {this.props.addName(this.state.name)}} />
        {this.props.name.map((l,index) => (
          <p key={index} id={index}>
            {l.name}
          </p>
        ))}
      </form>
      
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    name: state.nameStore.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    addName: function(name){
      console.log(typeof name)
      dispatch(nameThunk(name))
    }

  }
}

    // addName: () => dispatch({
    //   type: ADD_NAME,
    //   name: {
    //     name: 'hello'
    //   }
    // })

// const NameList = connect(mapStateToProps, mapDispatchToProps)(App)

// const Pp = () => (
//   <Provider store={store}>
//     <div>
//       <NameList />
//     </div>
//   </Provider>
// );


class Users extends React.Component{
  constructor(props){
    super(props);
    this.state= {search:''};
    this.handeChnage = this.handeChnage.bind(this);
  }

  handeChnage(e){
    this.setState({search:e.target.value});
  }

render(){
  let filteredWords = this.props.name.filter(
    (name) => {
      return name.name.indexOf(this.state.search) !== -1; //if result found, return to the parameter name
    }
  );


  return(
    <form>
      <input value={this.state.search}
      onChange={this.handeChnage}/>

 {this.state.search==""? "" :filteredWords.map((l,index) => (
          <p key={index} id={index}>
            {l.name}
          </p>
        ))
}

    </form>
  )
}
}

const mapstateToProps = (state)=> {
  return{
    name:state.nameStore.name
  }
}

const SearchList = connect(mapstateToProps)(Users)

const NameList = connect(mapStateToProps, mapDispatchToProps)(App)

const Pp = () => (
  <Provider store={store}>
    <div>
      <NameList />
    </div>
  </Provider>
);

const Gg = () => (
  <Provider store={store}>
    <div>
      <SearchList/>
    </div>
  </Provider>
);

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Pp} />
        <Route path="/users/" component={Gg} />
      </div>
    </Router>
  );
}


export default AppRouter;


// const App = (props)=> {
//   return (
// <form>
//     <label>
//       Name:
//       <input type="text"/>
//     </label>
//     <input type="button" onClick={(e) => {props.addName(event)}}/>
//     <input onClick={props.addName}
//     type="submit" value="Submit" />

//     {props.name.map(l => (
//       <div>{l.name}</div>
//     ))}

// </form>
//   );
// }