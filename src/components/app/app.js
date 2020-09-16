import React from 'react';

// Components
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import PeoplePage from "../people-page";
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";
import Row from "../row";

// Service
import SwapiService from "../../services/swapi-service";

// Styles
import './app.css';
import StarshipPage from "../starship-page";

export class App extends React.Component {
    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    render() {
        const { getPerson,
                getStarship,
                getPersonImage,
                getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}
            />
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            />
        )

        return (
            <ErrorBoundary>
                <div>
                    <Header />
                    <RandomPlanet />
                    <PeoplePage />
                    <StarshipPage />
                    {/*<Grid*/}
                    {/*    left={personDetails}*/}
                    {/*    right={starshipDetails}*/}
                    {/*/>*/}
                </div>
            </ErrorBoundary>
        );
    }
};

export default App;
