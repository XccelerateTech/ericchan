import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './screens/homepage'
import ShppingListPage from './screens/ShoppingListPage'
import leaderBoardPage from './screens/LeaderBoardPage'
import NoMatch from './screens/NoMacth'

export default class LandingPage extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <NavBar />

                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shoppingList' component={ShppingListPage} />
                    <Route exact path='/leaderBoard' component={leaderBoardPage} />
                    <Route component={NoMatch} />
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}