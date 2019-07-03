import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { PrivateRoute } from './components/PrivateRoute';
import './index.scss';
import About from './pages/About';
import Website from './pages/Website';
import News from './news/News';
import NewsDetails from './news/NewsDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/404';
import NoMAtch from './pages/404';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import  history  from './helpers/history';
import * as serviceWorker from './serviceWorker';
import HomeCMS from './HomeCMS';

class Root extends Component{
    
    render(){
        return(
            
                <Router history={history}>
                    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
                        <Switch>
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeCMS}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/about-us`} component={About}/>
                            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/website`} component={Website}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/news`} component={News}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/news/:id`} component={NewsDetails}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/register`} component={Register}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
                            <Route component={NoMAtch} />
                        </Switch>
                    </BrowserRouter>
                </Router>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));

serviceWorker.register();