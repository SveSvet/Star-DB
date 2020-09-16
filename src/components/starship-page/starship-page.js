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
import './people-page.css';
import Grid from "../grid";


export default class StarshipPage extends React.Component {
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
        const { getAllStarships, getStarship, getStarshipImage } = this.swapiService;

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={getAllStarships}
                //рендер-функция
                >
                {(i) => (
                    `${i.name}, passengers: ${i.passengers}`
                )}
            </ItemList>
        );

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem}
                         getData={getStarship}
                         getImageUrl={getStarshipImage}>
                <Grid field="length" label="Length" />
                <Grid field="passengers" label="Passengers" />
            </ItemDetails>
        )

        return (
            <ErrorBoundary>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundary>
        );
    }
};

