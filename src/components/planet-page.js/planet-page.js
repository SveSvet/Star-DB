import React from 'react';

// Components
import ErrorIndicator from "../error-indicator";
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import ErrorBoundary from "../error-boundary";

// Service
import SwapiService from "../../services/swapi-service";

// Styles
import './planet-page.css';
import Grid from "../grid";


export default class PlanetPage extends React.Component {
    swapiService = new SwapiService();

    state = {
        selectedItem: null,
    }

    onItemSelected = (id) => {
        this.setState( {
            selectedItem: id
        })
    };

    render() {
        const { getAllPlanets, getPlanet, getPlanetImage } = this.swapiService;


        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={getAllPlanets}
                //рендер-функция
            >
                {(i) => (
                    i.name
                )}
            </ItemList>
        );

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem}
                         getData={getPlanet}
                         getImageUrl={getPlanetImage}>
                <Grid field="diameter" label="Diameter" />
            </ItemDetails>
        )

        return (
            <ErrorBoundary>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundary>
        );
    }
};

