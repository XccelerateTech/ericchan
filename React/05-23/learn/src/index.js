import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


//component = contain markup and logic(Js) and finally render to the dom

var name = 'eric'

var id = 'p'

var link = 'google.com'

function hey (array){
var i 
    for(i=0; i< array.length; i++){
        return(

        <h1>
            {array}
        </h1>
        )
    }
}

let array=[0,1,2,3]



const gg =( <h1> 
{hey(array)}
gg
</h1>
)

const test = <h1>test</h1>

// ReactDOM.render(gg, document.getElementById('root'));
ReactDOM.render(test, document.getElementById('hey'));


// function tick (){
//     const element =( <div> <p>unchanged string</p>
//         {new Date().toLocaleTimeString()}
//     </div>
//     )
//     ReactDOM.render(element, document.getElementById('hey')); //compare the dom with previous one
// }

// setInterval(tick,10) //call the time function every 0.10

function Test(props){
    return(
   <p>{props.hi}</p>
    )
}


class Clock extends React.Component{
constructor(props){
    super(props);
    this.state = {date:new Date(), log: console.log('first'), gg: 'gg'};
}
componentDidMount(){
    this.timerID = setInterval(()=> this.tick(), 1000)
    console.log('second')
}

componentWillUnmount(){
    clearInterval(this.timerID)
}

tick(){
    this.setState({
        date: new Date()
    })
}

    render(){
        return(
        
            <div>
            <Test hi='halo'  />
                <h1>{this.state.gg}</h1>
        <h1> it is {this.state.date.toLocaleTimeString()}</h1>
        <h1>{this.state.log}</h1>
        </div>
        )
    }
}

ReactDOM.render(<Clock />, document.getElementById('root') )


class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({
        isToggleOn: !this.state.isToggleOn
      });
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
             { this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );
// function tick (){
//     ReactDOM.render(
//         <Clock date={new Date()}/>,
//         document.getElementById('root')
//     )
//     }

//     setInterval(tick,1000)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


function Loggedin (props){
    return(
        <h1>loggedin</h1>
    )
}

function LoggedOut (props){
    return (
        <h1>not logged in </h1>
    )
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn){
      return  <Loggedin />
    }else{
      return  <LoggedOut />
    }
}

ReactDOM.render(
    <Greeting  isLoggedIn={true}/>,
    document.getElementById('root')
  );