import Header from './components/Header';
import About from './pages/About'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

    return (
        <div className='App'>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <About/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;