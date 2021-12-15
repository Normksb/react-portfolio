import Header from './components/Header';
import About from './pages/About'
import Portfolio from './pages/Portfolio';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

    return (
        <div className='App'>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <About/>
                </Route>
                <Route exact path='/portfolio'>
                    <Portfolio/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;