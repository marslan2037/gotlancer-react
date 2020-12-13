import './App.css';
import './Coustom.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Footer from "./components/Footer";
import Header from "./components/Header";
import BrowseOffers from "./components/BrowseOffers";
import BuyerDashboard from "./components/BuyerDashboard";
import FreelancerDashboard from "./components/FreelancerDashboard";

function App() {
    return (
        <div className="App">
            <div className="main-container">
                <Router>
                    <Header />
                    
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/browse-offers' component={BrowseOffers} />
                        <Route path='/buyer-dashboard' component={BuyerDashboard} />
                        <Route path='/freelancer-dashboard' component={FreelancerDashboard} />
                    </Switch>
                    
                    <Footer />
                </Router>
            </div>
        </div>
    );
}

export default App;
