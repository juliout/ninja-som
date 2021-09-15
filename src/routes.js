import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'

export default function Routes(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='*' component=''/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}