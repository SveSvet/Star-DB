import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PeoplePage from "../people-page";

// Service
import SwapiService from "../../services/swapi-service";

import './app.css';
import ErrorIndicator from "../error-indicator";

export class App extends React.Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        hasError: false
    }

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({ hasError: true })
    }

    onPersonSelected = (id) => {
        this.setState( {
            selectedPerson: id
        })
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage />

                <div>
                    <div className="row mb2">
                        <div className="col-md-6">
                            <ItemList onItemSelected={this.onPersonSelected}
                                      getData={this.swapiService.getAllPlanets}>
                                {(i) => (i.name)}
                            </ItemList>
                        </div>
                        <div className="col-md-6">
                            <PersonDetails personId={this.state.selectedPerson}/>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row mb2">
                        <div className="col-md-6">
                            <ItemList onItemSelected={this.onPersonSelected}
                                      getData={this.swapiService.getAllStarships}>
                                {(i) => (i.name)}
                            </ItemList>
                        </div>
                        <div className="col-md-6">
                            <PersonDetails personId={this.state.selectedPerson}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};

export default App;
