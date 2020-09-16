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


export default class PeoplePage extends React.Component {
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
        const { getAllPeople, getPerson, getPersonImage } = this.swapiService;


        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={getAllPeople}
                //рендер-функция
                >
                {(i) => (
                    `${i.name} (${i.gender})`
                )}
            </ItemList>
        );

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem}
                         getData={getPerson}
                         getImageUrl={getPersonImage}>
                <Grid field="gender" label="Gender" />
            </ItemDetails>
        )

        return (
            <ErrorBoundary>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundary>
        );
    }
};

